const startBtn = document.querySelector("#start");
const guessingForm = document.querySelector("#guessing");

const HIDDEN = "hidden";

function startGame(event) {
  startBtn.classList.add(HIDDEN);
  guessingForm.classList.remove(HIDDEN);
}

startBtn.addEventListener("click", startGame);