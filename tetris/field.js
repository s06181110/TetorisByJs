'use strict'

import { Block } from './block.js'
import { CanvasUtility } from '../utility/canvas.js'

// wikiより: テトリミノを落とす場となるフィールドのサイズは、公式には縦20行 × 横10列とされている。
const FIELD_WIDTH = 10
const FIELD_HEIGHT = 20
const EMPTY = 0

class Field {
    constructor () {
        this.tiles = []
        this.minos = []
        this.initialize()
    }

    initialize () {
        // フィールドを0埋めする
        this.tiles = Array.from(new Array(FIELD_HEIGHT), () => new Array(FIELD_WIDTH).fill(EMPTY))
    }

    tileAt(x, y) {
        if (x < 0 || x >= FIELD_WIDTH || y < 0 || y >= FIELD_HEIGHT) return 1; //画面外
        return this.tiles[y][x];
    }

    putBlock(x, y, mino) {
        this.tiles[y][x] = mino.shape;
    }

    findLineFilled() {
        for (let y = 0; y < FIELD_HEIGHT; y++) {
            let isFilled = this.tiles[y].every(t => t > 0);
            if (isFilled) return y;
        }
        return -1;
    }

    cutLine(y) {
        this.tiles.splice(y, 1);
        this.tiles.unshift(new Array(FIELD_WIDTH).fill(EMPTY));
    }

    draw() {
        this.background()
        const canvas = CanvasUtility.getCanvas()
        const context = canvas.getContext("2d")
        const size = canvas.width / FIELD_WIDTH
        for (let y = 0; y < FIELD_HEIGHT; y++) {
            for (let x = 0; x < FIELD_WIDTH; x++) {
                const tileCode = this.tileAt(x, y)
                if (tileCode !== 0) {
                    context.strokeStyle = "black"
                    context.fillStyle = CanvasUtility.MinoColorPallet(tileCode)
                    context.fillRect(x * size, y * size, size, size)
                    context.strokeRect(x * size, y * size, size, size)
                }
            }
        }
    }

    background() {
        const canvas = CanvasUtility.getCanvas()
        const context = canvas.getContext("2d")
        const size = canvas.width / FIELD_WIDTH
        for (let y = 0; y < FIELD_HEIGHT; y++) {
            for (let x = 0; x < FIELD_WIDTH; x++) {
                context.strokeStyle = "lightgray"
                context.fillStyle = "white"
                context.fillRect(x * size, y * size, size, size)
                context.strokeRect(x * size, y * size, size, size)
            }
        }
    }
}

export { Field }
