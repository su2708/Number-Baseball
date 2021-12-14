// guessingForm is already declared in start.js
const guessingInput = document.querySelector("input");
const guessingList = document.querySelector("#guessing-list");
const result = document.querySelector("#result");
const restartBtn = document.getElementById("restart");
const endBtn = document.getElementById("end");
const target = localStorage.getItem("targetNumber").split("");

const HOMERUN = "Homerun!";
let innings = 1;

function outCount(guessedNumber) {
  let strike = 0;
  let ball = 0;

  const guessed = guessedNumber.split("");
  
  for(i=0; i<guessed.length; i++) {
    // guessed 안에 target[i] 와 일치하는 값이 없을 경우
    if(guessed.indexOf(target[i]) === -1) {
      continue;
    }
    // 값과 자리가 모두 일치하면 strike, 값만 일치하면 ball
    if(target[i] === guessed[i]) {
      strike++;
    } else {
      ball++;
    }
  }

  if(strike === 0 && ball === 0) {
    return "Out!";
  } else if (strike === 4) {
    return HOMERUN;
  } else {
    return `${strike} Strike ${ball} Ball`;
  }
}

function showResultOfGuess(guessedNumberObj) {
  const li = document.createElement("li");
  const inning = document.createElement("span");
  const number = document.createElement("span");
  const count = document.createElement("span");

  inning.innerText = `${guessedNumberObj.innings}th `;
  number.innerText = `${guessedNumberObj.text} `;
  count.innerText = guessedNumberObj.count;
  
  li.appendChild(inning);
  li.appendChild(number);
  li.appendChild(count);

  guessingList.appendChild(li);
}

function showResultOfGame(guessedNumberObj) {
  const obj = guessedNumberObj;
  if(obj.count === HOMERUN) {
    result.innerText = "You Win! Do you want to restart?";
  } else {
    result.innerText = `You Lose! The number is ${localStorage.getItem("targetNumber")}. Do you want to restart?`;
  }
}

function handleListSubmit(event) {
  event.preventDefault();
  const guessedNumber = guessingInput.value;
  guessingInput.value = "";
  const guessedNumberObj = {
    innings: innings,
    text: guessedNumber,
    count: outCount(guessedNumber),
  }
  showResultOfGuess(guessedNumberObj);
  innings++;
  if(guessedNumberObj.count === HOMERUN || innings > 9) {
    guessingForm.classList.add(HIDDEN);
    restartBtn.classList.remove(HIDDEN);
    endBtn.classList.remove(HIDDEN);
    showResultOfGame(guessedNumberObj);
  }
}

guessingForm.addEventListener("submit", handleListSubmit);