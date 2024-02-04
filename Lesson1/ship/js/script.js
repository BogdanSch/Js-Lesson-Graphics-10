"use strict";

const drawingCanvas = document.getElementById("ship");
const velocityInput = document.getElementById("velocityInput");

let velocity = 5;
let shipInterval;

window.onload = function () {
  drawShip();
};

function drawShip() {
  if (drawingCanvas && drawingCanvas.getContext) {
    let context = drawingCanvas.getContext("2d");
    context.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);

    if (context.transformed) {
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.transformed = false;
    }

    context.beginPath();
    context.fillStyle = "#fc0";
    context.moveTo(20, 70);
    context.lineTo(60, 20);
    context.lineTo(60, 70);
    context.fill();

    context.beginPath();
    context.fillStyle = "#ccf";
    context.moveTo(0, 70);
    context.lineTo(30, 100);
    context.lineTo(70, 100);
    context.lineTo(100, 70);
    context.fill();

    context.beginPath();
    context.fillStyle = "#a60";
    context.fillRect(60, 5, 5, 65);

    context.beginPath();
    context.fillStyle = "#e49";
    context.fillRect(40, 5, 20, 10);

    context.fillStyle = "#00f";
    context.font = "italic 20px sans-serif";
    context.textBaseline = "top";
    context.fillText("SHIP", 25, 75);
  }
}

function moveShip(direction) {
  stopShip();

  shipInterval = setInterval(() => {
    if (drawingCanvas && drawingCanvas.getContext) {
      let context = drawingCanvas.getContext("2d");

      if (context.transformed) {
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.transformed = false;
      }

      context.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);

      if (
        direction === "forward" &&
        context.getTransform().e + velocity <= drawingCanvas.width - 100
      ) {
        context.translate(velocity, 0);
      } else if (
        direction === "backward" &&
        context.getTransform().e - velocity >= 0
      ) {
        context.translate(-velocity, 0);
      }
      drawShip();
    }
  }, 100);
}

function moveForward() {
  moveShip("forward");
}

function moveBackward() {
  moveShip("backward");
}

function stopShip() {
  clearInterval(shipInterval);
}

velocityInput.addEventListener("input", function () {
  velocity = parseInt(this.value, 10) || 0;
});
