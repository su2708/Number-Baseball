const initialNum = document.querySelector(".initial-number");
const num_list = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let given_num = "";

function getRandomNumber() {
  const randomNumList = [];

  // 중복없이 무작위 숫자 4개 추출
  while(1) {
    const i = num_list[Math.floor(Math.random() * 10)];
    if(randomNumList.indexOf(i) > -1) {
      continue;
    }
    randomNumList.push(i);
    if(randomNumList.length == 4) {
      break;
    }
  }

  // 추출한 숫자들을 하나의 문자열로 합치기
  for(i=0; i<randomNumList.length; i++) {
    given_num = given_num + randomNumList[i];
  }
  
  localStorage.setItem("givenNumber", given_num);
  initialNum.innerText = given_num;
}

getRandomNumber();