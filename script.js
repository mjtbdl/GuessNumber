'use strict';

let value = Math.trunc(Math.random() * 20) + 1;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function correctNumber() {
  displayMessage('Correct Number');
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').textContent = value;
  document.querySelector('.number').style.width = '30rem';
}

function newRound() {
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 5;
  value = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number');
  } else if (guess === value) {
    correctNumber();
    const scoreElement = document.querySelector('.score');
    const highscoreElement = document.querySelector('.highscore');
    if (
      Number(scoreElement.textContent) > Number(highscoreElement.textContent)
    ) {
      highscoreElement.textContent = scoreElement.textContent;
    }
  } else {
    const scoreElement = document.querySelector('.score');
    const currentScore = Number(scoreElement.textContent);
    if (currentScore > 1) {
      displayMessage(guess > value ? 'Too high' : 'Too low');
      scoreElement.textContent = currentScore - 1;
    } else {
      displayMessage('You lost the game');
      scoreElement.textContent = 0;
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', newRound);
