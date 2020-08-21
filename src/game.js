class Game {

  drawGrid() {
    for (var x = 0; x <= width; x += width / 10) {
      for (var y = 0; y <= height; y += height / 10) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
  }

  preloadGame() {
    this.playerImg = loadImage("../assets/character-down.png")
  }

  setUpGame() {
    console.log('game set up');
    this.player = new Player();
    this.player.image = this.playerImg;
  }

  drawGame() {
    clear()
    this.drawGrid()
    this.player.drawPlayer()
  }

}