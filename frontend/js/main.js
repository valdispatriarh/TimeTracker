// time
// Date

// textarea-task 
// textarea-time
// button-submit -записывает в сторадже данные textarea-task 
// + запускает функцию которая через промежуток  указзанный в textarea-time выведет новое окно с опросником
// 1) зрабіць змены у ветцы devVlad
// 2) зрабіць push origin devVlad
// 3) зрабіць Pullreq in dev
// 4)Merge in Dev

// 5)pull in dev
// 6) git chechout -b devVlad2
// 


function addBodyCentrumColumn(){
    const bodyhtml = document.createElement('div');
    bodyhtml.classList.add('container');
    bodyhtml.innerHTML = `
    <div class = "centrum-column">
        <div class = "time"></div>
        <div class = "date">2</div>
        <div class = "textareas-and-button">
            <div class = "textarea-task">3.1</div>
            <div class = "textarea-time">3.2</div>
            <div class = "button-submit">3.3</div>
        </div>
    </div>`
    document.body.appendChild(bodyhtml);
}
addBodyCentrumColumn()

function showTime(){
    const tagTime = document.querySelector('.time');
    const date = new Date()
    tagTime.textContent = `${date.toLocaleTimeString()}`;
    setTimeout(showTime, 1000);
}    
showTime()

function showDate(){
    const tagDate = document.querySelector('.date');
    const date = new Date()
    const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    };
    tagDate.textContent = `${date.toLocaleDateString("en-US", options)}`;
    setTimeout(showDate, 1000);
}    
showDate()

function ShowTextareaTask(){
    const tagTextareaTask = document.querySelector('.textarea-task');
    tagTextareaTask.innerHTML = "<input type = 'text'>"
}
ShowTextareaTask()

function ShowTextareaTime(){
    const tagTextareaTime = document.querySelector('.textarea-time');
    tagTextareaTime.innerHTML = "<input type = 'time'>"
}
ShowTextareaTime()

function ShowButtonSubmit(){
    const tagButtonSubmit = document.querySelector('.button-submit');
    tagButtonSubmit.innerHTML = "<input type = 'button' value = '+')>"
}
ShowButtonSubmit()
