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

class Timer {
  constructor (el) {
    this.$show = el;
    this.timeSeconds = 0;
    this.timerInterval = null;
    this.timeDataToPlayOnPause = 0;
  }

  start () {
    const timerInput = document.getElementById('time');
    this.timeSeconds = parseInt(timerInput.value) * 60;
    this.timerInterval = setInterval(() => {
      if (this.timeSeconds <= 0) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        alert('Время закончилось');
      } else {
        --this.timeSeconds;
        this.updateDisplay();
      }

      this.timeDataToPlayOnPause = this.timeSeconds;
    }, 1000);
  }

  pause () {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
  }

  resume () {
    if (this.timerInterval === null) {
      this.timeSeconds = this.timeDataToPlayOnPause;
      this.timerInterval = setInterval(() => {
        console.log(1, this);
        if (this.timeSeconds <= 0) {
          clearInterval(this.timerInterval);
          this.timerInterval = null;
          alert('Время закончилось');
        } else {
          console.log(2, this);
          --this.timeSeconds;
          this.updateDisplay();
        }

        this.timeDataToPlayOnPause = this.timeSeconds;
      }, 1000);
    }
  }

  updateDisplay () {
    const seconds = this.timeSeconds % 60;
    const minutes = Math.trunc(this.timeSeconds / 60) % 60;
    const hours = Math.trunc(this.timeSeconds / 3600);
    const strTimer = `${hours}:${minutes}:${seconds}`;
    this.$show.innerHTML = strTimer;
  }
}
const timers = [];

const buttonRun = document.getElementById('button');

buttonRun.addEventListener('click', function () {
  const ul = document.getElementById('dailyTimerList');
  const childrenCount = ul.children.length;
  const [newLiEl, resumeBtn, pauseBtn, countEl] = createTimerEl(childrenCount);/// ////////////////////////////
  ul.appendChild(newLiEl);

  const timer = new Timer(countEl);
  resumeBtn.addEventListener('click', () => timer.resume());
  pauseBtn.addEventListener('click', () => timer.pause());
  timers.push(timer);
  console.log(timers);
  timer.start();
});

function createTimerEl (id) {
  const resumeBtnId = `timer-${id}-resume`;
  const pauseBtnId = `ttimer-${id}-pause`;
  const countId = `timer-${id}-count`;

  const li = document.createElement('li');
  li.setAttribute('id', `timer-${id}`);
  li.innerHTML = `
    Timer ${id + 1}
    <div class = "player" >
        <div class = "btn play">
          <img src='../assets/images/play.png' 
               alt=play
               id = '${resumeBtnId}' 
               class = play-btn-img>
        </div>
        <div class = "btn pause">
          <img src='../assets/images/pause.png' 
               alt=pause id = '${pauseBtnId}' 
               class = pause-btn-img">
        </div>
        <div class = "btn done"><img src='../assets/images/done.png' alt=play class = done-btn-img></div>
    </div>
    <div  title = 'nostart' class ="timers1"  id = '${countId}' ></div>
  `;

  const resumeBtn = li.querySelector(`#${resumeBtnId}`);
  const pauseBtn = li.querySelector(`#${pauseBtnId}`);
  const countEl = li.querySelector(`#${countId}`);

  return [li, resumeBtn, pauseBtn, countEl];
}
// test
