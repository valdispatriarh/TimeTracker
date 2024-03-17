import { TimeTreker } from "./timer.mjs";
import { addTimeAndDate } from "./infoDisplay.mjs";

const arrLeftTime1 = [1, 2, 3, 4, 5, 6, 7, 8];
const arrLeftTime = [1800, 1800, 9000, 3600, 3600, 3600, 3600, 1800];

function getSumArr() {
  let sumArr = 0;
  for (let el of arrLeftTime) {
    sumArr += el;
  }
  return sumArr / 60 / 60;
}
let totalTimer = getSumArr();

function addTimer() {
  const elements = document.querySelectorAll(".task");
  for (let i = 0; i < elements.length; i++) {
    const newTag = document.createElement("div");
    newTag.innerHTML = `
    <div class = 'timer' id = "timer${i}">
         
         <div id='timerDisplay${i}'>
         <input type="number" id="myInput${i}" value="${arrLeftTime[i] / 60}"  step="10">
         min
         </div>
         <button id = 'startButton${i}'>start</button>
         <audio id="myAudio">
            <source src="assets/sounds/mysound.mp3" type="audio/mpeg">
         </audio>
    </div>
    `;
    elements[i].appendChild(newTag.cloneNode(true));

    const timerId = `timerDisplay${i}`;
    const timer = new TimeTreker(arrLeftTime[i], timerId, "myAudio");

    const startButton = document.getElementById(`startButton${i}`);

    startButton.addEventListener("click", () => {
      timer.start();
    });
  }
}
addTimer();

addTimeAndDate(totalTimer);