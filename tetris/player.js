'use strict'

class Player {
    constructor (game) {
        this.vx = 0
        this.vr = 0
        this.vy = 0
        this.drop = false
        this.game = game
    }

    init () {
        this.vx = 0
        this.vr = 0
        this.vy = 0
        this.drop = false
    }

    isMoved() {
        return this.vx !== 0 || this.vr !== 0 || this.vy !== 0 || this.drop
    }

    keyPressed(event) {
        if (event.keyCode === 65 || event.keyCode === 37) this.vx = -1;
        if (event.keyCode === 68 || event.keyCode === 39) this.vx = 1;
        if (event.keyCode === 83 || event.keyCode === 40) this.vy = 1;
        // キー配置的に難しいのでできないようにしておきます
        // if (event.keyCode === 87 || event.keyCode === 38) this.drop = true
        if (event.keyCode === 81) this.vr = -1;
        if (event.keyCode === 69) this.vr = 1;
        if (this.isMoved()) {
            this.game.update(this)
            this.init()
        }
    }
}

export { Player }