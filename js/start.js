const startBtn = document.querySelector("#startBtn");
const guessingForm = document.querySelector("#guessing");

const HIDDEN = "hidden";

function startGame(event) {
  event.preventDefault();
  startBtn.classList.add(HIDDEN);
  guessingForm.classList.remove(HIDDEN);
}

startBtn.addEventListener("click", startGame);