'use strict'

import { Field } from './field.js'
import { Mino } from './mino.js'
import { Player } from './player.js'
import { CanvasUtility } from '../utility/canvas.js'

class Main {
    constructor () {
        this.field = new Field()
        this.mino = this.makeMino()
        this.field.draw()
        this.mino.draw()
    }

    makeMino () {
        return new Mino(5, 2, 0, Math.floor(Math.random() * 7) + 1)
    }

    isMinoMovable(mino, field) {
        let blocks = mino.calcBlocks();
        return blocks.every(b => field.tileAt(b.x, b.y) === 0)
    }

    update (player = null) {
        let futureMino = this.mino.copy()

        if (player) {
            futureMino.x += player.vx
            futureMino.rot += player.vr
            futureMino.y += player.vy
            if (player.drop) { // 一番下に落下させるやつ
                while (this.isMinoMovable(futureMino, this.field)) {
                    futureMino.y += 1
                }
                futureMino.y -= 1 // 一つだけ上にあげておく
            }
            player.init()
        } else {
            futureMino.y += 1
        }

        if (this.isMinoMovable(futureMino, this.field)) {
            this.mino = futureMino
        } else if (this.mino.y < futureMino.y) {
            // した方向に動けなかったらブロックを置く
            for (const b of this.mino.calcBlocks()) {
                this.field.putBlock(b.x, b.y, this.mino)
            }
            futureMino = this.makeMino()
            // 作った瞬間から動けないなら
            if (!this.isMinoMovable(futureMino, this.field)) {
                this.gameOver()
            } else {
                this.mino = futureMino
            }
        }

        let line;
        while ((line = this.field.findLineFilled()) !== -1) {
            this.field.cutLine(line);
        }

        this.field.draw()
        this.mino.draw()
    }

    gameOver () {
        $("#modal-toggle").click()
    }
}

const main = new Main()
const player = new Player(main)
$(document).on('keydown', player.keyPressed.bind(player))

// デバッグ用 ON/OFFをスペースボタンで
const ms = 500
let loop = setInterval(main.update.bind(main), ms)
$(document).on('keydown', (e) => {
    if (e.keyCode === 32) { // stop
        if (loop) loop = clearInterval(loop)
        else loop = setInterval(main.update.bind(main), ms)
    }
})

