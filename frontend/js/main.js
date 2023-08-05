import { addBodyLeftColumn } from './left.js';
import { addBodyrightColumn } from './right.js';

function addBody () {
  const bodyhtml = document.createElement('div');
  bodyhtml.classList.add('container');
  bodyhtml.innerHTML = `
    <div class = "box-left" >
        <div></div>
    </div>

    <div class = "centrum-column">
        <div class = "time">00:00:00</div>
        <div class = "date">09.08.2020</div>
        <input type = 'button' id = 'add-task' value = 'ADD TASK'>
        <div class = "textareas-and-button"></div>    
    </div>

    <div class = "box-right" > task list   
        <ul id = 'dailyTimerList'></ul>
    </div>
    `;
  document.body.appendChild(bodyhtml);

  const addTaskBtn = document.getElementById('add-task');
  addTaskBtn.addEventListener('click', showTextareaAndButton);
}
addBody();

function showTextareaAndButton () {
  const tagTextareaAndButton = document.querySelector('.textareas-and-button');
  tagTextareaAndButton.innerHTML = `
  <div class = "box-add-task">
    <div class = "data-task-time">
      <div><input type = 'text' value = 'red/green'></div>
      <div class = "textarea-task"><input type = 'text' value = 'task'></div>
      <div class = "textarea-time" ><input type = 'text' id = "time" value = 'time'></div>
    </div>
    <div class = "down" id = "down"><input type = 'button' value = '&#x25BC'></div>
    <div class = "button-submit" id = "button"><input type = 'button' value = 'move to task list'></div>
  </div>
  `;
  const addSubTaskBtn = document.getElementById('down');
  addSubTaskBtn.addEventListener('click', showTextareaAndButton2);

  addBodyrightColumn();
}

function showTextareaAndButton2 () {
  const tagTextareaAndButton = document.querySelector('.down');
  tagTextareaAndButton.innerHTML = `
  <div class = "box-add-task2">
    <div class = "data-task-time2">
      <div class = "textarea-task2"><input type = 'text' value = 'sub-task'></div>
      <div class = "textarea-time2" ><input type = 'text' id = "time2" value = 'time'></div>
    </div>
    <div class = "down2" id = "down2"><input type = 'button' value = '&#x25B2'></div>
  </div>
  `;
}

/// /b2 вверх стрелка
function showTimeAndDate () {
  const tagTime = document.querySelector('.time');
  const tagDate = document.querySelector('.date');
  const date = new Date();
  tagTime.textContent = `${date.toLocaleTimeString()}`;
  const options = {
    // weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  };
  tagDate.textContent = `${date.toLocaleDateString('ru-RU', options)}`;
}
setInterval(showTimeAndDate, 1000);

addBodyLeftColumn();

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
