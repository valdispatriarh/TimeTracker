// добавил вывод таймера updateDisplay изменил код в 4 местах
// в метод старт добавил проверку
class Timer {
    constructor(initialTime, timerDisplay) {
      //!!!
      if (initialTime < 1) {
        throw new Error("value must be greater than 1");
      }
  
      this.initialTime = initialTime;
      this.leftTime = initialTime; // оставшиеся время в данный момент
  
      this._intervalId = null;
  
      this.$show = document.getElementById(timerDisplay); //!!!
    }
  
    get passedTime() {
      return this.initialTime - this.leftTime;
    }
  
    get isRunning() {
      return this._intervalId !== null;
      // if (this._intervalId !== null) {
      //   return true;
      // } else {
      //   return false;
      // }
    }
  
    get isStopped() {
      return !this.isRunning;
    }
  
    get isFinished() {
      return this.leftTime <= 0;
    }
  
    updateDisplay() {
      //!!!
      // Вычисляем оставшиеся часы, минуты и секунды
      const hours = Math.trunc(this.leftTime / 60 / 60); // количество часов
      const minutes = Math.trunc(this.leftTime / 60) % 60; // количество минут
      const seconds = this.leftTime % 60; // количество секунд
  
      // Форматируем строку времени в формат "часы:минуты:секунды"
      const strTimer = `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  
      // Обновляем отображение времени в HTML-элементе с идентификатором $show
      this.$show.innerHTML = strTimer;
    }
  
    start() {
      if (this.isFinished || !this.isStopped) return;
      this._intervalId = setInterval(() => {
        this.leftTime--;
        /////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.updateDisplay(); /////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        /////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        if (this.isFinished) {
          this.stop();
        }
      }, 1000);
    }
  
    stop() {
      if (this._intervalId !== null) {
        clearInterval(this._intervalId);
        this._intervalId = null;
      }
    }
  
    reset() {
      this.stop();
      this.leftTime = this.initialTime;
    }
  
    zero() {
      this.stop();
      this.leftTime = 0;
    }
  }
  
  export class TimeTreker {
    static allTimers = [];
    constructor(initialTime, timerDisplay, myAudio) {
      //!!!
      if (initialTime < 1) {
        throw new Error("value must be greater than 1");
      }
      this.$audio = document.getElementById(myAudio);
  
      this.initialTime = initialTime;
      this.leftTime = initialTime; // оставшиеся время в данный момент
  
      this._intervalId = null;
  
      this.$show = document.getElementById(timerDisplay); //!!!
      TimeTreker.allTimers.push(this);
    }
  
    get passedTime() {
      return this.initialTime - this.leftTime;
    }
  
    get isRunning() {
      return this._intervalId !== null;
      // if (this._intervalId !== null) {
      //   return true;
      // } else {
      //   return false;
      // }
    }
  
    get isStopped() {
      return !this.isRunning;
    }
  
    get isFinished() {
      return this.leftTime <= 0;
    }
  
    updateDisplay() {
      //!!!
      // Вычисляем оставшиеся часы, минуты и секунды
      const hours = Math.trunc(this.leftTime / 60 / 60); // количество часов
      const minutes = Math.trunc(this.leftTime / 60) % 60; // количество минут
      const seconds = this.leftTime % 60; // количество секунд
  
      // Форматируем строку времени в формат "часы:минуты:секунды"
      const strTimer = `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  
      // Обновляем отображение времени в HTML-элементе с идентификатором $show
      this.$show.innerHTML = strTimer;
    }
  
    start() {
      if (this.isFinished || !this.isStopped) return;
  
      TimeTreker.stopAll();
  
      this._intervalId = setInterval(() => {
        this.leftTime--;
        /////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.updateDisplay(); /////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        /////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  
        if (this.isFinished) {
          this.stop();
  
          this.$audio.play();
  
          for (let i = 0; i < TimeTreker.allTimers.length; i++) {
            if (!TimeTreker.allTimers[i].isFinished) {
              TimeTreker.allTimers[i].start();
              break; // Завершаем цикл после запуска следующего таймера
            }
          }
        }
      }, 1000);
    }
  
    stop() {
      if (this._intervalId !== null) {
        clearInterval(this._intervalId);
        this._intervalId = null;
      }
    }
  
    reset() {
      this.stop();
      this.leftTime = this.initialTime;
    }
  
    zero() {
      this.stop();
      this.leftTime = 0;
    }
  
    static stopAll() {
      TimeTreker.allTimers.forEach((timer) => {
        timer.stop();
      });
    }
  }