"use strict";

import { BallGame } from "./ball-game.js";

const amountBalls = 100;
const timerDelay = 30;
const gameCanvas = document.getElementById("canvas");

const ballGame = new BallGame(amountBalls, timerDelay, gameCanvas);
ballGame.startGame();
