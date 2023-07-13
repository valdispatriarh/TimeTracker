// "use strict";

// import {addBodyLeftColumn()} from './main.js'
//addBodyLeftColumn();

export function addBodyLeftColumn() {
  const container = document.querySelector(".container");

  const leftColumn = document.createElement("div");
  leftColumn.classList.add("left-column");
  leftColumn.innerHTML = `
    <div class = "left-column">

        <div class = "daily-todo-list">
          <div class = "btn play"><img src='../../assets/images/play.png' alt=play class = play-btn-img></div>
          <div class = "btn pause"><img src='../../assets/images/pause.png' alt=pause class = pause-btn-img></div>
          <div class = "btn done"><img src='../../assets/images/done.png' alt=play class = done-btn-img></div>
        </div>

        <div class = "done-list">
        <h4>Task list</h4>
          <ul>
            <li>task1</li>
            <li>task2</li>
            <li>task3</li>
            <li>task4</li>
          </ul>
        </div>
    </div>`;

  container.appendChild(leftColumn);
  const leftColumnSel = document.querySelector(".left-column");

  // task constructor
  class taskDaily {
    constructor(tag, taskName, timeExpected, timeSpent) {
      this.tag = tag;
      this.taskName = taskName;
      this.timeExpected = timeExpected;
      this.timeSpent = timeSpent;
    }

    htmlBuilder() {
      const taskHTML = document.createElement("div");
      taskHTML.classList.add("task");
      taskHTML.innerHTML = `
        <div class="tag ${this.tag}"></div>
        <div class="task-name">${this.taskName}</div>
        <div class = "btn play"><img src='../../assets/images/play.png' alt=play class = play-btn-img></div>
        <div class = "btn done"><img src='../../assets/images/done.png' alt=play class = done-btn-img></div>
        <div class="time-expected">${this.timeExpected}</div>
        <div class="time-spent">${this.timeSpent}</div>
        `;
      leftColumnSel.appendChild(taskHTML);
    }
  }

  const task1 = new taskDaily("red", "Write class for task", "03.00", "02.28");
  task1.htmlBuilder();
}
