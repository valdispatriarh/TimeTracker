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
/// / !!!!!npm istall

import { addBodyLeftColumn } from './left.js';

function addBodyCentrumColumn () {
  const bodyhtml = document.createElement('div');
  bodyhtml.classList.add('container');
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
  document.body.appendChild(bodyhtml);
}
addBodyCentrumColumn();

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
