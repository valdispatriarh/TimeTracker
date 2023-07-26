// time
// Date
// textarea-task
// textarea-time
// button-submit - после нажатія записывает в сторадже данные textarea-task +записывает в другую переменную время таймера+
// + запускает функцию которая через промежуток  указзанный в textarea-time
// выведет новое окно с опросником(сет тайм аут на опросник)
// 1) зрабіць змены у ветцы devVlad
// 2) зрабіць push origin devVlad
// 3) зрабіць Pullreq in dev
// 4)Merge in Dev

// 5)pull in dev
// 6) git chechout -b devVlad2
// !!!!!npm istall
// 1) pull той веткі в которой находішься?

import { addBodyLeftColumn } from "./left.js";
import { addBodyrightColumn } from "./right.js";

function addBodyCentrumColumn () {
  bodyhtml.innerHTML = `
    <div class = "centrum-column">
        <div class = "time"></div>
        <div class = "date"></div>
        <div class = "textareas-and-button">
            <div class = "textarea-task"><input type = 'text'></div>
            <div class = "textarea-time"><input type = 'time'></div>
            <div class = "button-submit"><input type = 'button' value = '+'></div>
        </div>
    </div>`;
}
addBodyCentrumColumn();

function addBodyLeftColumn () {
  const container = document.querySelector('.container');
  const leftColumn = document.createElement('div');
  leftColumn.classList.add('container');
  leftColumn.innerHTML = `
    <div class = "left-column">
        <div class = "main-goals">
        <h4>Task list</h4>
          <ul>
            <li>task1
            <div class = "player">
                <div class = "btn play"><img src='../assets/images/play.png' alt=play class = play-btn-img></div>
                <div class = "btn pause"><img src='../assets/images/pause.png' alt=pause class = pause-btn-img></div>
                <div class = "btn done"><img src='../assets/images/done.png' alt=play class = done-btn-img></div>
            </div>
            </li>
            <li>task2
            <div class = "player">
                <div class = "btn play"><img src='../assets/images/play.png' alt=play class = play-btn-img></div>
                <div class = "btn pause"><img src='../assets/images/pause.png' alt=pause class = pause-btn-img></div>
                <div class = "btn done"><img src='../assets/images/done.png' alt=play class = done-btn-img></div>
            </div>
            </li>
            <li>task3
            <div class = "player">
                <div class = "btn play"><img src='../assets/images/play.png' alt=play class = play-btn-img></div>
                <div class = "btn pause"><img src='../assets/images/pause.png' alt=pause class = pause-btn-img></div>
                <div class = "btn done"><img src='../assets/images/done.png' alt=play class = done-btn-img></div>
            </div>
            </li>
            <li>task4
            <div class = "player">
                <div class = "btn play"><img src='../assets/images/play.png' alt=play class = play-btn-img></div>
                <div class = "btn pause"><img src='../assets/images/pause.png' alt=pause class = pause-btn-img></div>
                <div class = "btn done"><img src='../assets/images/done.png' alt=play class = done-btn-img></div>
            </div>
            </li>
          </ul>
        </div>
    </div>`;
  container.appendChild(leftColumn);
}
addBodyLeftColumn();
addBodyrightColumn();

function showTimeAndDate () {
  const tagTime = document.querySelector('.time');
  const date = new Date();
  tagTime.textContent = `${date.toLocaleTimeString()}`;
  const tagDate = document.querySelector('.date');
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  tagDate.textContent = `${date.toLocaleDateString('en-US', options)}`;
  setTimeout(showTimeAndDate, 1000);
}
showTimeAndDate();

function showTextareaAndButton () {
  const tagTextareaAndButton = document.querySelector('.textareas-and-button');
  tagTextareaAndButton.innerHTML = `<div class = "textarea-task"><input type = 'text'></div>
                                          <div class = "textarea-time"><input type = 'time'></div>
                                          <div class = "button-submit"><input type = 'button' value = '+'></div>`;
}
showTextareaAndButton();

function pressButtonSubmitStartTimer () {
}
pressButtonSubmitStartTimer();

function saveTask () {
}
saveTask();

function SaveTime () {

}
SaveTime();
function StartTimer () {
}
StartTimer();

// function ShowQuestion () {
//   const tagTextareaAndButton = document.querySelector('.textareas-and-button');
//   tagTextareaAndButton.innerHTML = `Ты уложился в отведенное для себя время?
//                                      <div><input type = 'button' value='yes'></div>
//                                      <div><input type = 'button' value='no'></div>
//                                      <div><input type = 'text' value='Почему?'></div>
//                                      <div class = "button-submit"><input type = 'button' value = '+'></div>`;
//   let answerYes;
//   let answerWhy;
// }
//     ShowQuestion()

function PressButtonSubmitAnswer () {
}
PressButtonSubmitAnswer();
