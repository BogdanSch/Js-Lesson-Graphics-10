import { Ball } from "./ball.js";

export class BallGame {
  constructor(amountBalls, timerDelay, gameCanvas) {
    this.amountBalls = amountBalls;
    this.timerDelay = timerDelay;

    this.gameCanvas = gameCanvas;
    this.canvasContext = this.gameCanvas.getContext("2d");
    this.width = this.gameCanvas.width;
    this.height = this.gameCanvas.height;
  }

  createBalls() {
    this.balls = [];

    for (let i = 0; i < this.amountBalls; i++) {
      this.balls[i] = new Ball(0, 0, this.gameCanvas);
    }
  }

  go() {
    this.clearGameCanvas();
    for (let i = 0; i < this.amountBalls; i++) {
      this.balls[i].draw();
      this.balls[i].move();
      this.balls[i].checkCollision();
    }
    this.drawGameCanvas();
  }

  clearGameCanvas() {
    this.canvasContext.clearRect(0, 0, this.width, this.height);
  }

  drawGameCanvas() {
    this.canvasContext.strokeStyle = "grey";
    this.canvasContext.lineWidth = 3;
    this.canvasContext.strokeRect(0, 0, this.width, this.height);
  }

  startGame() {
    this.createBalls();
    this.gameTimer = setInterval(this.go.bind(this), this.timerDelay);
  }
}
