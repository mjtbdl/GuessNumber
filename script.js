'use strict';

let value = Math.trunc(Math.random() * 20) + 1;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function correctNumber() {
  document.querySelector('.message').textContent = 'Correct Number';
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').textContent = value;
  document.querySelector('.number').style.width = '30rem';
}

function newRound() {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 5;
  value = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === value) {
    correctNumber();
    if (
      document.querySelector('.score').textContent >
      document.querySelector('.highscore').textContent
    ) {
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    }
  } else if (score > 1) {
    document.querySelector('.score').textContent--;
    document.querySelector('.message').textContent =
      guess > value ? 'Too high' : 'Too low';
  } else {
    document.querySelector('.message').textContent = 'You lost the game';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  newRound();
});
