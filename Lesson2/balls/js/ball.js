export class Ball {
  constructor(x = 100, y = 100, canvas, color = null) {
    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext("2d");

    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.x = x;
    this.y = y;

    this.xSpeed = Math.floor(Math.random() * 10) + 1;
    this.ySpeed = Math.floor(Math.random() * 10) + 1;

    this.colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

    if (color === null) {
      this.ballColor = this.getRandomColor();
    }
  }

  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  draw() {
    this.canvasContext.fillStyle = this.ballColor;
    this.canvasContext.beginPath();
    this.canvasContext.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    this.canvasContext.fill();
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  checkCollision() {
    if (this.x < 0 || this.x > this.width) {
      this.xSpeed = -this.xSpeed;
    }

    if (this.y < 0 || this.y > this.height) {
      this.ySpeed = -this.ySpeed;
    }
  }
}
