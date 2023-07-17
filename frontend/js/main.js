// time
// Date
// textarea-task
// textarea-time
// button-submit - после нажатія записывает в сторадже данные textarea-task +записывает в другую переменную время таймера+
// + запускает функцию которая через промежуток  указзанный в textarea-time
// выведет новое окно с опросником(сет тайм аут на опросник)
// 1) зрабіць змены у ветцы devVlad
// 2) зрабіць push origin devVlad
// 3) зрабіць P in dev
// 4)Merge in Dev
// 5)git pull
// 6) git chechout -b devVlad(n)
// !!!!!npm istall

let bodyhtml = 1;
function addBody () {
  bodyhtml = document.createElement('div');
  bodyhtml.classList.add('container');
  document.body.appendChild(bodyhtml);
}
addBody();

function addBodyCentrumColumn () {
  bodyhtml.innerHTML = `
    <div class = "centrum-column">
        <div class = "time"></div>
        <div class = "date"></div>
        <div class = "add-task">Add task</div>
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
            <li id = 'box1'> task1
            <div class = "player" >
                <div class = "btn play"><img src='../assets/images/play.png' alt=play class = play-btn-img></div>
                <div class = "btn pause"><img src='../assets/images/pause.png' alt=pause id = 'timer-pause' class = pause-btn-img></div>
                <div class = "btn done"><img src='../assets/images/done.png' alt=play class = done-btn-img>
                </div><div id="timer1">60</div>
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

function addBodyRightColumn () {
  const container = document.querySelector('.container');
  const rightColumn = document.createElement('div');
  rightColumn.classList.add('container');
  rightColumn.innerHTML = `
    <div class = "right-column">
        <div class = "main-goals">
        <h4>Task list</h4>
          <ul>
            <li>task1
            <div class = "player">
                <div class = "btn play"><img src='../assets/images/play.png' alt=play class = play-btn-img></div>
                <div class = "btn pause"><img src='../assets/images/pause.png' alt=pause class = pause-btn-img></div>
                <div class = "btn done"><img src='../assets/images/done.png' alt=play class = done-btn-img>
                </div><div id="timer1">60</div>
            </div>
            </li>
            <li>task2
            <div class = "player">
                <div class = "btn play"><img src='../assets/images/play.png' alt=play class = play-btn-img></div>
                <div class = "btn pause"><img src='../assets/images/pause.png' alt=pause class = pause-btn-img></div>
                <div class = "btn done"><img src='../assets/images/done.png' alt=play class = done-btn-img></div>
                
            </div>
            </li>
            </li>
          </ul>
        </div>
    </div>`;
  container.appendChild(rightColumn);
}
addBodyRightColumn();

setInterval(showTimeAndDate, 1000);
function showTimeAndDate () {
  const tagTime = document.querySelector('.time');
  const tagDate = document.querySelector('.date');
  const date = new Date();
  tagTime.textContent = `${date.toLocaleTimeString()}`;
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  tagDate.textContent = `${date.toLocaleDateString('en-US', options)}`;
}

function showTextareaAndButton () {
  const tagTextareaAndButton = document.querySelector('.textareas-and-button');
  tagTextareaAndButton.innerHTML = `<div class = "textarea-task"><input type = 'text' ></div>
                                          <div class = "textarea-time"><input type = 'text' id = 'time'></div>
                                          <div>min</div>
                                          <div class = "button-submit"><input type = 'button' value = '+' id = 'button'></div>`;
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

const timerInput = document.getElementById('time'); // Берём строку
const buttonRun = document.getElementById('button');// Берём кнопку запуска
const timerShow1 = document.getElementById('timer1'); // Берём блок для показа времени
const timerShow2 = document.getElementById('timer2');
const timerPauseId = document.getElementById('timer-pause');
const timeMinut = 0;
let goodTimer = 0;
let timeDataToPlayOnPause = timeMinut;/// ///////////////////////////////

class Timer {
  start () {
    let timeMinut = parseInt(timerInput.value) * 60;
    goodTimer = setInterval(function () {
      const seconds = timeMinut % 60;
      const min = timeMinut / 60 % 60;
      const hour = timeMinut / 60 / 60 % 60;
      if (timeMinut <= 0) {
        clearInterval(goodTimer);
        alert('Время закончилось');
      } else {
        const strTimer = `${Math.trunc(hour)}:${Math.trunc(min)}:${seconds}`;
        timerShow1.innerHTML = strTimer;
      }
      --timeMinut;
      timeDataToPlayOnPause = timeMinut;/// ////////////////////////////////////
    }, 1000);
  }

  pause () {
    clearInterval(goodTimer);
    // const timeDataToPlayOnPause = timeMinut;
  }

  startOnPause () {
    let timeMinut = timeDataToPlayOnPause;/// //////////////////
    goodTimer = setInterval(function () {
      const seconds = timeMinut % 60;
      const min = timeMinut / 60 % 60;
      const hour = timeMinut / 60 / 60 % 60;
      if (timeMinut <= 0) {
        clearInterval(goodTimer);
        alert('Время закончилось');
      } else {
        const strTimer = `${Math.trunc(hour)}:${Math.trunc(min)}:${seconds}`;
        timerShow1.innerHTML = strTimer;
      }
      --timeMinut;
    }, 1000);
  }
}

const timerTask1 = new Timer();
buttonRun.addEventListener('click', function () { timerTask1.start(); });
timerPauseId.addEventListener('click', function () { timerTask1.pause(); });
x.addEventListener('click', function () { timerTask1.startOnPause(); });

class Task {
  constructor (selector) {
    this.$el = document.querySelector(selector);
    console.log(this.$el);
  }

  hide () {
    this.$el.style.display = 'none';
  }

  show () {
    this.$el.style.display = 'block';
  }
}

class TaskList extends Task {
  constructor (options) {
    super(options.selector);
    this.$el.style.width = this.$el.style.height = options.size + 'px';
    this.$el.style.background = options.color;
  }
}
const TaskList1 = new TaskList({
  selector: '#box1',
  size: 200,
  color: 'red'
});

buttonRun.addEventListener('click', function () {
  TaskList1.show();
});
