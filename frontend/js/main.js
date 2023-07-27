function addBody () {
  const bodyhtml = document.createElement('div');
  bodyhtml.classList.add('container');
  bodyhtml.innerHTML = `
    <div class = "centrum-column">
        <div class = "time"></div>
        <div class = "date"></div>
        <div class = "add-task">Add task</div>
        <div class = "textareas-and-button">
          <div><input type = 'text'></div>                   
          <div class = "textarea-time"><input type = 'text' id = 'time'></div>                          
          <div>min</div>                            
          <div class = "button-submit"><input type = 'button' value = '+' id = 'button'></div>
        </div>
    </div>
    <div class = "left-column">
      <h4>Task list</h4>
      <ul id = 'dailyTimerList'>
        <li>1</li>
      </ul>
    </div>
    `;
  document.body.appendChild(bodyhtml);
}
addBody();

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
function ShowQuestion () {
  const tagTextareaAndButton = document.querySelector('.textareas-and-button');
  tagTextareaAndButton.innerHTML = `Ты уложился в отведенное для себя время?
                                     <div><input type = 'button' value='yes'></div>
                                     <div><input type = 'button' value='no'></div>
                                     <div><input type = 'text' value='Почему?'></div>
                                     <div class = "button-submit"><input type = 'button' value = '+'></div>`;
  let answerYes;
  let answerWhy;
}
//     ShowQuestion()

let timeMinut = 0;
let goodTimer = 0;
let timeDataToPlayOnPause = 0;
class Timer {
  constructor (selector) {
    this.$show = document.querySelector(selector);
  }

  start () {
    const timerInput = document.getElementById('time');
    timeMinut = parseInt(timerInput.value) * 60;
    goodTimer = setInterval(() => {
      const seconds = timeMinut % 60;
      const min = timeMinut / 60 % 60;
      const hour = timeMinut / 60 / 60 % 60;
      if (timeMinut <= 0) {
        clearInterval(goodTimer);
        alert('Время закончилось');
      } else {
        const strTimer = `${Math.trunc(hour)}:${Math.trunc(min)}:${seconds}`;
        this.$show.innerHTML = strTimer;
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
    timeMinut = timeDataToPlayOnPause;/// //////////////////
    goodTimer = setInterval(function () {
      const seconds = timeMinut % 60;
      const min = timeMinut / 60 % 60;
      const hour = timeMinut / 60 / 60 % 60;
      if (timeMinut <= 0) {
        clearInterval(goodTimer);
        alert('Время закончилось');
      } else {
        const strTimer = `${Math.trunc(hour)}:${Math.trunc(min)}:${seconds}`;
        this.$show.innerHTML = strTimer;
      }
      --timeMinut;
      timeDataToPlayOnPause = timeMinut;
    }, 1000);
  }
}
// class Task {
//   constructor (selector) {
//     this.$el = document.querySelector(selector);
//   }

//   hide () {
//     this.$el.style.display = 'none';
//   }

//   show () {
//     this.$el.style.display = 'block';
//   }
// }

// class TaskList extends Task {
//   constructor (options) {
//     super(options.selector);
//     this.$el.style.width = this.$el.style.height = options.size + 'px';
//     this.$el.style.background = options.color;
//   }
// }
// const TaskList1 = new TaskList({
//   selector: '#box1',
//   size: 200,
//   color: 'red'
// });

const buttonRun = document.getElementById('button');

buttonRun.addEventListener('click', function () {
  const ul = document.getElementById('dailyTimerList');
  const childrenCount = ul.children.length;
  const newLiEl = createrTimerEl(childrenCount);
  ul.appendChild(newLiEl);
  const timer1 = new Timer(`#timer-${childrenCount}-count`);
  timer1.start();
});

function createrTimerEl (id) {
  const li = document.createElement('li');
  li.setAttribute('id', `timer-${id}`);
  li.innerHTML = `
    Timer ${id + 1}
    <div class = "player" >
        <div class = "btn play">
          <img src='../assets/images/play.png' 
               alt=play
               id = 'timer-${id}-play' 
               class = play-btn-img 
               onclick="() => { timerTask1.startOnPause(); }>
        </div>
        <div class = "btn pause">
          <img src='../assets/images/pause.png' 
               alt=pause id = 'timer-${id}-pause' 
               class = pause-btn-img 
               onclick="alert('pause')">
        </div>
        <div class = "btn done"><img src='../assets/images/done.png' alt=play class = done-btn-img></div>
    </div>
    <div  title = 'nostart' class ="timers1"  id = 'timer-${id}-count' ></div>
  `;
  return li;
}
