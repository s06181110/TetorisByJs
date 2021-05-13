'use strict'

class CanvasUtility {

    static getCanvas(id = "#canvas") {
        return $(id)[0]
    }

    static getCanvasContext (id = "#canvas") {
        return this.getCanvas(id).getContext("2d")
    }

    // static変数safariエラーでるのでfunctionで定義
    static Colors () {
        return {
            WHITE:     0,
            LIGHTBLUE: 1,
            YELLOW:    2,
            GREEN:     3,
            RED:       4,
            BLUE:      5,
            ORANGE:    6,
            PURPLE:    7,
        }
    }

    static MinoColorPallet (number) {
        let color = "white"
        switch (number) {
            case 1: color = "lightblue"; break;
            case 2: color = "yellow"; break;
            case 3: color = "green"; break;
            case 4: color = "red"; break;
            case 5: color = "blue"; break;
            case 6: color = "orange"; break;
            case 7: color = "purple"; break;
        }
        return color
    }
}


export { CanvasUtility }