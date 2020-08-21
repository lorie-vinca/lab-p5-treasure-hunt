const game = new Game();

function preload() {
  game.preloadGame()
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setUpGame()
}

function draw() {
  game.drawGame();
}

function keyPressed() {
game.player.playerMovement()
}