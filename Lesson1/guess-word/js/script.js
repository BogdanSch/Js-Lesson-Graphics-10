"use strict";

import { WordSeekerGame } from "./wordseeker.js";
import { Canvas } from "./canvas.js";

const playButton = document.getElementById("playButton");
const guessWordButton = document.getElementById("guessButton");

const guessInput = document.getElementById("guessInput");
const canvas = document.getElementById("gameCanvas");

const words = ["Adventure", "Sunshine", "Harmony", "Treasure", "Serenity"];
const gameCanvas = new Canvas(canvas);
let game;

function enablePlayButton(isEnabled) {
  if (isEnabled) {
    playButton.style = `display: inline-block;`;
    guessWordButton.style = `display: none;`;
    guessInput.style = `display: none;`;
  } else {
    playButton.style = `display: none;`;
    guessWordButton.style = `display: inline-block;`;
    guessInput.style = `display: block;`;
  }
}

function showGameMenu() {
  enablePlayButton(true);
}

showGameMenu();

playButton.addEventListener("click", () => {
  enablePlayButton(false);
  let word = WordSeekerGame.getRandomWord(words);
  game = new WordSeekerGame(word, gameCanvas, showGameMenu);
});

guessWordButton.addEventListener("click", function () {
  const letter = guessInput.value.trim().toLowerCase();

  if (letter && letter.length === 1 && /^[a-z]$/.test(letter)) {
    game.guess(letter);
  } else {
    alert("Please enter a valid single letter.");
  }
  guessInput.value = "";
});
