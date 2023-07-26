// "use strict";

// import {addBodyLeftColumn()} from './main.js'
//addBodyLeftColumn();

import { arr, arrDone } from "./arr.js";

export function addBodyLeftColumn() {
  const container = document.querySelector(".container");

  // add left column to container
  const leftColumn = document.createElement("div");
  leftColumn.classList.add("left-column");
  container.appendChild(leftColumn);

  // add red list to left column
  const leftColumnRed = document.createElement("div");
  leftColumnRed.classList.add("left-column-red");
  leftColumn.appendChild(leftColumnRed);

  // add Green list to left column
  const leftColumnGreen = document.createElement("div");
  leftColumnGreen.classList.add("left-column-green");
  leftColumn.appendChild(leftColumnGreen);

  // add Done list to left column
  const leftColumnDone = document.createElement("div");
  leftColumnDone.classList.add("left-column-done");
  leftColumn.appendChild(leftColumnDone);

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
        <div class="time-spent"> / ${this.timeSpent}</div>
        `;

      this.tag === "red"
        ? leftColumnRed.appendChild(taskHTML)
        : leftColumnGreen.appendChild(taskHTML);

      const lastElements = document.querySelectorAll(".play-btn-img");
      const curElem = lastElements[lastElements.length - 1];
      curElem.addEventListener("click", () => {
        const lastElementsTimer = document.querySelectorAll(".time-spent");
        const curElemTimer = lastElementsTimer[lastElementsTimer.length - 1];
        curElemTimer.innerText = curElemTimer.innerText + 1;
        console.log(curElemTimer.innerText);
      });
    }
    htmlBuilderDone() {
      const taskHTML = document.createElement("div");
      taskHTML.classList.add("task", "done");
      taskHTML.innerHTML = `
        <div class="tag grey"></div>
        <div class="task-name">${this.taskName}</div>
        <div class = "btn play"><img src='../../assets/images/play.png' alt=play class = play-btn-img></div>
        <div class = "btn done"><img src='../../assets/images/done.png' alt=play class = done-btn-img></div>
        <div class="time-expected">${this.timeExpected} / </div>
        <div class="time-spent">${this.timeSpent}</div>
        `;

      leftColumnDone.appendChild(taskHTML);
    }
  }

  arr.forEach((x) => {
    let taskProc = new taskDaily(...x);
    taskProc.htmlBuilder();
  });

  arrDone.forEach((x) => {
    let taskProc = new taskDaily(...x);
    taskProc.htmlBuilderDone();
  });
}
