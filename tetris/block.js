'use strict';

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

    draw(context) {
        context.strokeStyle = "red"
        context.fillStyle = "white"
        let size = 42
        context.fillRect(this.x, this.y, size, size)
    }

}

export { Block };
