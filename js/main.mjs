import { TimeTreker } from "./timer.mjs";
import { addTimeAndDate } from "./infoDisplay.mjs";
 
const arrLeftTime = [1800, 900, 7200, 7200, 1800, 3600, 3600, 900];
const arrLeftTimeTest = [10, 20, 30, 40, 50, 60, 70, 80];
const arrLeftTime2 = [1800, 1800, 9000, 3600, 3600, 3600, 3600, 1800];
const arrTasks = ['Leeway', '1. Morning ritual', '2. IT', '3. Job search in IT', '4. Sport and food', '5. English. ', '6. Hobby and health ', '7. Evening ritual']
const arrDayTask = [[], [], []]
const moreArrTasks1 = ['cold shower', 'tasks', 'physical jerks']
  

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
	for (let i = 0; i < arrLeftTime.length; i++) {
		const newTag = document.createElement("div");
		newTag.classList.add("timer");
		newTag.innerHTML = `
			<button class = "item" id = 'startButton${i}'>start</button>
		 	<div class = "item" >${arrTasks[i]}</div>
         	<div class = "item" id='timerDisplay${i}'>${arrLeftTime[i] / 60}min</div>
			<div>&#9660;</div>
			<div class = "moreArrTasks1" >${moreArrTasks1}</div>
         	<audio id="myAudio"><source src="assets/sounds/mysound.mp3" type="audio/mpeg"></audio>
    `;
		document.body.appendChild(newTag);

		
		const timer = new TimeTreker(arrLeftTime[i], `timerDisplay${i}`, "myAudio");


		document.getElementById(`startButton${i}`).addEventListener("click", () => {
			timer.start();

		});
	}
}
addTimer();


