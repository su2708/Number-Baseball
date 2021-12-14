// restartBtn & endBtn is already declared in game.js

function restartGame(event) {
  guessingForm.classList.remove(HIDDEN);
}

function endGame(event) {
  window.history.go(0);
}

restartBtn.addEventListener("click", restartGame);
endBtn.addEventListener("click", endGame);