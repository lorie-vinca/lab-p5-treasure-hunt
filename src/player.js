class Player {
    constructor() {
        this.col = 0;
        this.row = 0;
        this.image;
    }

    drawPlayer() {
        console.log("drawing the player")
        image(this.image, this.col, this.row, 100, 100);
    }


    playerMovement() {

        if (keyCode === 38) {
            console.log("move up");
            this.row -= 100;

        }
        if (keyCode === 40) {
            console.log("move down");
            this.row += 100;

        }

        if (keyCode === 37) {
            console.log("move left");
            this.col -= 100;

        }

        if (keyCode === 39) {
            console.log("move right");
            this.col = 100;

        }

    }

}