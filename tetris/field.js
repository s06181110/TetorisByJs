'use strict'

import { Block } from './block.js'

// wikiより: テトリミノを落とす場となるフィールドのサイズは、公式には縦20行 × 横10列とされている。
const FIELD_WIDTH = 10
const FIELD_HEIGHT = 20
const EMPTY = 0
const FILLED = 1

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

    draw(context) {
        for (let y = 0; y < FIELD_HEIGHT; y++) {
            for (let x = 0; x < FIELD_WIDTH; x++) {
                if (this.tileAt(x, y) === 0) {
                    context.strokeStyle = "lightgray"
                    let size = 42
                    context.strokeRect(x * size, y * size, size, size)
                } else {
                    new Block(x, y).draw(context);
                }
            }
        }
    }
}

export { Field }
