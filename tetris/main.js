'use strict'

import { Field } from './field.js'

class Main {
    constructor () {
        this.canvas = $("#canvas")[0]
        this.field = new Field()
        console.log(this.canvas.width)

        this.field.draw(this.canvas.getContext("2d"))
    }
}

const main = new Main()

