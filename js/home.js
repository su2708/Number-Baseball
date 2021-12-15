// homeBtn is already declared in game.js

function returnToHome(event) {
  window.history.go(0);
}

homeBtn.addEventListener("click", returnToHome);