export function addTimeAndDate(totalTimer) {
    const bodyhtml = document.createElement("div");
    bodyhtml.classList.add("container");
    bodyhtml.innerHTML = `
        <div class = "centrum-column">
            <div class = "time">00:00:00</div>
            <div class = "date">09.08.2020</div> 
            <div>Total timer in this entire application: ${totalTimer} hour(s)</div> 
        </div>
        `;
  
    document.body.appendChild(bodyhtml);
  
    function apdateTimeAndDate() {
      const tagTime = document.querySelector(".time");
      const tagDate = document.querySelector(".date");
      const date = new Date();
      tagTime.textContent = `${date.toLocaleTimeString()}`;
      const options = {
        // weekday: 'long',
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      };
      tagDate.textContent = `${date.toLocaleDateString("ru-RU", options)}`;
    }
    setInterval(apdateTimeAndDate, 1000);
  }