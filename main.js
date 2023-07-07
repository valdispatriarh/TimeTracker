"use strict";

function addBodyLeftColumn() {
  const container = document.querySelector(".container");

  const leftColumn = document.createElement("div");
  leftColumn.classList.add("container");
  leftColumn.innerHTML = `
    <div class = "left-column">

        <div class = "player">
          <div class = "btn play"><img src='assets/images/play.png' alt=play class = play-btn-img></div>
          <div class = "btn pause"><img src='assets/images/pause.png' alt=pause class = pause-btn-img></div>
          <div class = "btn done"><img src='assets/images/done.png' alt=play class = done-btn-img></div>
        </div>

        <div class = "main-goals">
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
}
addBodyLeftColumn();
