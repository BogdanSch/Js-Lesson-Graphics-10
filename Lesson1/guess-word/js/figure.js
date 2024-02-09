export class Figure {
  constructor(gameCanvas) {
    this.gameCanvas = gameCanvas;
    this.drawFunctions = [
      () => this.gameCanvas.context.fillRect(100, 300, 200, 50),
      () => this.gameCanvas.context.fillRect(130, 250, 140, 50),
      () => {
        this.gameCanvas.context.beginPath();
        this.gameCanvas.context.arc(120, 350, 25, 0, Math.PI * 2, true);
        this.gameCanvas.context.closePath();
        this.gameCanvas.context.fill();
      },
      () => {
        this.gameCanvas.context.beginPath();
        this.gameCanvas.context.arc(280, 350, 25, 0, Math.PI * 2, true);
        this.gameCanvas.context.closePath();
        this.gameCanvas.context.fill();
      },
      () => this.gameCanvas.context.fillRect(150, 200, 100, 50),
      () => {
        this.gameCanvas.context.beginPath();
        this.gameCanvas.context.moveTo(160, 200);
        this.gameCanvas.context.lineTo(240, 200);
        this.gameCanvas.context.lineTo(210, 150);
        this.gameCanvas.context.fill();
      },
      () => {
        this.gameCanvas.context.fillRect(180, 200, 40, 20);
        this.gameCanvas.context.fillRect(150, 250, 30, 50);
      },
    ];
  }

  draw(maxAttempts, attemptsLeft) {
    this.drawFunctions
      .slice(maxAttempts - attemptsLeft)
      .forEach((objectFunction) => objectFunction());

    // switch (sliceNumber) {
    //   case 6:
    //     this.gameCanvas.context.fillRect(100, 300, 200, 50);
    //     break;
    //   case 5:
    //     this.gameCanvas.context.fillRect(130, 250, 140, 50);
    //     break;
    //   case 4:
    //     this.gameCanvas.context.beginPath();
    //     this.gameCanvas.context.arc(120, 350, 25, 0, Math.PI * 2, true);
    //     this.gameCanvas.context.closePath();
    //     this.gameCanvas.context.fill();
    //     break;
    //   case 3:
    //     this.gameCanvas.context.beginPath();
    //     this.gameCanvas.context.arc(280, 350, 25, 0, Math.PI * 2, true);
    //     this.gameCanvas.context.closePath();
    //     this.gameCanvas.context.fill();
    //     break;
    //   case 2:
    //     this.gameCanvas.context.fillRect(150, 200, 100, 50);
    //     break;
    //   case 1:
    //     this.gameCanvas.context.beginPath();
    //     this.gameCanvas.context.moveTo(160, 200);
    //     this.gameCanvas.context.lineTo(240, 200);
    //     this.gameCanvas.context.lineTo(210, 150);
    //     this.gameCanvas.context.fill();
    //     break;
    //   case 0:
    //     this.gameCanvas.context.fillRect(180, 200, 40, 20);
    //     this.gameCanvas.context.fillRect(150, 250, 30, 50);
    //     break;
    // }
  }
}
