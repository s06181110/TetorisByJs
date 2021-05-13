'use strict';

import { CanvasUtility } from '../utility/canvas.js'

class Block {
    /**
     * 
     * @param {Number} x フィールド上のx座標
     * @param {Number} y フィールド上のy座標
     */
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    draw(fillColor = "white") {
        const context = CanvasUtility.getCanvasContext("#canvas")
        context.strokeStyle = "black"
        context.fillStyle = fillColor
        let size = 42
        context.fillRect(this.x * size, this.y * size, size, size)
        context.strokeRect(this.x * size, this.y * size, size, size)
    }

}

export { Block };
