'use strict'

import { CanvasUtility } from '../utility/canvas.js'
import { Block } from './block.js'

class Mino {

    constructor(x, y, rot, shape) {
        this.x = x
        this.y = y
        this.rot = rot
        this.shape = shape
    }

    calcBlocks () {
        let blocks = [];
        switch (this.shape) {
            case 1: blocks = [new Block(-2, 0), new Block(-1, 0), new Block(0, 0), new Block(1, 0)]; break;   //I
            case 2: blocks = [new Block(-1, -1), new Block(-1, 0), new Block(0, 0), new Block(0, -1)]; break; //O
            case 3: blocks = [new Block(-1, 0), new Block(0, 0), new Block(0, -1), new Block(1, -1)]; break;  //S
            case 4: blocks = [new Block(-1, -1), new Block(0, -1), new Block(0, 0), new Block(1, 0)]; break;  //Z
            case 5: blocks = [new Block(0, -2), new Block(0, -1), new Block(-1, 0), new Block(0, 0)]; break;  //J
            case 6: blocks = [new Block(-1, -2), new Block(-1, -1), new Block(-1, 0), new Block(0, 0)]; break;//L
            case 7: blocks = [new Block(-1, 0), new Block(0, 0), new Block(0, -1), new Block(1, 0)]; break;   //T
        }
        let rot = (40000000 + this.rot) % 4;
        for (let r = 0; r < rot; r++) {
            blocks = blocks.map(b => new Block(-b.y, b.x));
        }

        blocks.forEach(b => (b.x += this.x, b.y += this.y));
        return blocks;
    }

    draw() {
        let blocks = this.calcBlocks();
        for (let b of blocks) {
            b.draw(CanvasUtility.MinoColorPallet(this.shape));
        }
    }

    copy() {
        return new Mino(this.x, this.y, this.rot, this.shape);
    }
}

export { Mino }
