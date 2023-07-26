// "use strict";

// import {addBodrightColumn()} from './main.js'
//addBodrightColumn();

import { arr, arrDone } from "./arr.js";

export function addBodyrightColumn() {
  const container = document.querySelector(".container");

  // addright column to container
  const rightColumn = document.createElement("div");
  rightColumn.classList.add("right-column");
  container.appendChild(rightColumn);

  // add red list toright column
  const rightColumnRed = document.createElement("div");
  rightColumnRed.classList.add("right-column-red");
  rightColumn.appendChild(rightColumnRed);

  // add Green list toright column
  const rightColumnGreen = document.createElement("div");
  rightColumnGreen.classList.add("right-column-green");
  rightColumn.appendChild(rightColumnGreen);

  // add Done list toright column
  const rightColumnDone = document.createElement("div");
  rightColumnDone.classList.add("right-column-done");
  rightColumn.appendChild(rightColumnDone);

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
        ? rightColumnRed.appendChild(taskHTML)
        : rightColumnGreen.appendChild(taskHTML);
    }
    htmlBuilderDone() {
      const taskHTML = document.createElement("div");
      taskHTML.classList.add("task", "done");
      taskHTML.innerHTML = `
        <div class="tag grey"></div>
        <div class="task-name">${this.taskName}</div>
        <div class = "btn play"><img src='../../assets/images/play.png' alt=play class = play-btn-img></div>
        <div class = "btn done"><img src='../../assets/images/done.png' alt=play class = done-btn-img></div>
        <div class="time-expected">${this.timeExpected}</div>
        <div class="time-spent"> / ${this.timeSpent}</div>
        `;

      rightColumnDone.appendChild(taskHTML);
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
