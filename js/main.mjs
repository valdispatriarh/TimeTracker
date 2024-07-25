import { TimeTreker } from "./timer.mjs";

const arrLeftTime = [1800, 900, 7200, 3600, 1800, 3600, 3600, 900];
const arrTasks = [
  "Leeway",
  "1. Morning ritual",
  "2. IT",
  "3. Job search in IT",
  "4. Sport and food",
  "5. English",
  "6. Hobby and health",
  "7. Evening ritual",
];

function getSumArr() {
  let sumArr = 0;
  for (let el of arrLeftTime) {
    sumArr += el;
  }
  return sumArr / 60 / 60;
}
let totalTimer = getSumArr();

addTimeAndDate(totalTimer);
function addTimer() {
  const container = document.querySelector(".container");

  for (let i = 0; i < arrLeftTime.length; i++) {
    const newTag = document.createElement("div");
    newTag.classList.add("timer");
    newTag.innerHTML = `
      <button class="item" id="startButton${i}">start</button>
      <div class="item">${arrTasks[i]}</div>
      <div class="item" id="timerDisplay${i}">${arrLeftTime[i] / 60} min</div>
      <audio id="myAudio${i}">
        <source src="assets/sounds/mysound.mp3" type="audio/mpeg">
      </audio>
    `;
    container.appendChild(newTag);

    const timer = new TimeTreker(
      arrLeftTime[i],
      `timerDisplay${i}`,
      `myAudio${i}`,
    );
    document.getElementById(`startButton${i}`).addEventListener("click", () => {
      timer.start();
    });
  }
}
addTimer();

function addTimeAndDate(totalTimer) {
  const bodyhtml = document.createElement("h1");
  bodyhtml.classList.add("centrum-column");
  bodyhtml.innerHTML = `
            <div class = "time">00:00:00</div>
            <div class = "date">09.08.2020</div> 
            <div>Total timer in this entire application: ${totalTimer} hour(s)</div> 
        `;
  document.body.appendChild(bodyhtml);

  function apdateTimeAndDate() {
    const tagTime = document.querySelector(".time");
    const tagDate = document.querySelector(".date");
    const date = new Date();
    tagTime.textContent = `${date.toLocaleTimeString()}`;
    const options = {
      // weekday: 'long',
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    tagDate.textContent = `${date.toLocaleDateString("ru-RU", options)}`;
  }
  setInterval(apdateTimeAndDate, 1000);
}
