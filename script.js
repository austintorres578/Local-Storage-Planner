//DATE SECTION

const dateFormContainer = document.getElementById("date-form-container");
const dateForm = document.getElementById("date-form");
const dateInput = document.getElementById("date-input");
const filledDate = document.getElementById("filled-date");
const todaysDate = document.getElementById("todays-date");
const dayResetBtn = document.getElementById("day-reset-btn");
let dateInfo = JSON.parse(localStorage.getItem("date"))
const dayEditBtn = document.getElementById("day-edit-btn");
let dateArray=[];

dateForm.addEventListener("submit", submitDate);
dayResetBtn.addEventListener("click", dayReset);
dayEditBtn.addEventListener("click", editDate);

window.onload = multipleOnloadEnabler;

function multipleOnloadEnabler(){
    dateChecker();
    wakeChecker();
    bedChecker();
    priorityArrayFiller();
    priorityChecker();
    toDoArrayFiller();
    toDoChecker();
};


function submitDate(Event){
    Event.preventDefault();

    writeDate(dateInput.value);

};

function dayReset(){
    localStorage.clear();
    location.reload();
};

function dateChecker(){
    if(dateInfo!==null){
        todaysDate.innerText=dateInfo;
        dateFormContainer.style.display="none";
        filledDate.style.display="flex";
    }
};

function writeDate(text){
    todaysDate.innerText=text;
    dateArray.push(todaysDate.innerText);
    localStorage.setItem("date",JSON.stringify(dateArray))
    dateFormContainer.style.display="none";
    filledDate.style.display="flex"; 
};

function editDate(){
    dateInput.value=dateInfo;
    dateFormContainer.style.display="flex";
    filledDate.style.display="none";
};
// WAKE UP TIME

 const wakeTimeContainer=document.getElementById("wake-time-container");
 const wakeForm=document.getElementById("wake-form");
 const wakeInput=document.getElementById('wake-input');
 const filledWakeTime=document.getElementById("filled-wake-time");
 const filledWakeTimeContainer=document.getElementById("filled-wake-time-container");
 let wakeInfo = JSON.parse(localStorage.getItem("wake"));
 let wakeArray= [];

 wakeForm.addEventListener("submit",writeWakeTime);

 function writeWakeTime(Event){
    Event.preventDefault();

    filledWakeTime.innerText=wakeInput.value;
    wakeArray.push(wakeInput.value);
    localStorage.setItem("wake",JSON.stringify(wakeArray));
    wakeInput.value="";
    wakeTimeContainer.style.display="none";
    filledWakeTimeContainer.style.display="block";
 };
 function wakeChecker(){
    if(wakeInfo!==null){
        filledWakeTime.innerText=wakeInfo;
        wakeTimeContainer.style.display="none";
        filledWakeTimeContainer.style.display="block";
    }
};
//BED TIME

const bedTimeContainer=document.getElementById("bed-time-container");
const bedForm=document.getElementById("bed-form");
const bedInput=document.getElementById("bed-input");
const filledBedTime=document.getElementById("filled-bed-time");
const filledBedTimeContainer=document.getElementById("filled-bed-time-container");
let bedInfo = JSON.parse(localStorage.getItem("bed"));
let bedArray=[];

bedForm.addEventListener("submit",writeBedTime);

function writeBedTime(Event){
    Event.preventDefault();

    filledBedTime.innerText=bedInput.value;
    bedArray.push(bedInput.value);
    localStorage.setItem("bed",JSON.stringify(bedArray));
    bedInput.value="";
    bedTimeContainer.style.display="none";
    filledBedTimeContainer.style.display="block";
};

function bedChecker(){
    if(bedInfo!==null){
        filledBedTime.innerText=bedInfo;
        bedTimeContainer.style.display="none";
        filledBedTimeContainer.style.display="block";
    }
};

//PRIORITIES LIST

const prioritiesList = document.getElementById("priorities-list");
const prioritiesInputContainer = document.getElementById("priorities-input-container");
const prioritiesInput = document.getElementById("priorities-input");
let prioritiesArray = [];
const prioritiesData = JSON.parse(localStorage.getItem('priorityItems'));


prioritiesInputContainer.addEventListener("submit", prioritiesLiMaker);

function priorityArrayFiller(){
    if(prioritiesData!==null){
        prioritiesArray=prioritiesData;
        localStorage.setItem("priorityItems",JSON.stringify(prioritiesArray));

    };
};



function priorityChecker(){
    if(prioritiesData!==null){
    for (let i = 0; i < prioritiesData.length; i++) {
        const element = prioritiesData[i];
        prioritiesCheckerLiMaker(element);
    }
}
};

function prioritiesLiMaker(Event){
    Event.preventDefault();
  
    let priorityItem = document.createElement("li")
    let priorityCheck = document.createElement('input');
    let priority = document.createElement('p');
    let priorityEditBtn = document.createElement('button');
    let priorityDeleteBtn = document.createElement('button');

    priorityItem;
    priorityCheck.type="checkbox";
    priority.innerText=prioritiesInput.value;
    priorityEditBtn.innerHTML="Edit";
    priorityDeleteBtn.innerHTML="Delete";
    priorityDeleteBtn.className="priority-delete-btn";

    prioritiesList.appendChild(priorityItem);
    priorityItem.appendChild(priorityCheck);
    priorityItem.appendChild(priority);
    priorityItem.appendChild(priorityEditBtn);
    priorityItem.appendChild(priorityDeleteBtn);
    
    prioritiesArray.push(prioritiesInput.value);
    localStorage.setItem("priorityItems",JSON.stringify(prioritiesArray));
    
    prioritiesInput.value="";
};

function prioritiesCheckerLiMaker(item){
    let priorityItem = document.createElement("li")
    let priorityCheck = document.createElement('input')
    let priority = document.createElement('p');
    let priorityEditBtn = document.createElement('button');
    let priorityDeleteBtn = document.createElement('button');

    priorityItem;
    priorityCheck.type="checkbox";
    priority.innerText=item;
    priorityEditBtn.innerHTML="Edit";
    priorityDeleteBtn.innerHTML="Delete";
    priorityDeleteBtn.className="priority-delete-btn";

    prioritiesList.appendChild(priorityItem);
    priorityItem.appendChild(priorityCheck);
    priorityItem.appendChild(priority);
    priorityItem.appendChild(priorityEditBtn);
    priorityItem.appendChild(priorityDeleteBtn);
    
};

//TO DO LIST

const toDoList = document.getElementById("to-do-list");
const toDoListInputContainer = document.getElementById("to-do-list-input-container");
const toDoListInput = document.getElementById("to-do-list-input");
let toDoArray = [];
const toDoData = JSON.parse(localStorage.getItem("toDoItems"));

toDoListInputContainer.addEventListener("submit", toDoListLiMaker);

function toDoArrayFiller(){
    if(toDoData!==null){
        toDoArray=toDoData;
        localStorage.setItem("toDoItems",JSON.stringify(toDoArray));
    };
};

function toDoListLiMaker(Event){
    Event.preventDefault();

    let toDoItem = document.createElement("li")
    let toDoCheck = document.createElement('input')
    let toDo = document.createElement('p');
    let toDoEditBtn = document.createElement('button');
    let toDoDeleteBtn = document.createElement('button');

    toDoItem;
    toDoCheck.type="checkbox";
    toDo.innerText=toDoListInput.value;
    toDoEditBtn.innerHTML="Edit";
    toDoDeleteBtn.className="to-do-delete-btn"
    toDoDeleteBtn.innerHTML="Delete";

    toDoList.appendChild(toDoItem);
    toDoItem.appendChild(toDoCheck);
    toDoItem.appendChild(toDo);
    toDoItem.appendChild(toDoEditBtn);
    toDoItem.appendChild(toDoDeleteBtn);

    toDoArray.push(toDoListInput.value);
    localStorage.setItem("toDoItems",JSON.stringify(toDoArray));

    toDoListInput.value="";
};

function toDoChecker(){
    if(toDoData!==null){
    for (let i = 0; i < toDoData.length; i++) {
        const element = toDoData[i];
        toDoCheckerLiMaker(element);
    }
}
};

function toDoCheckerLiMaker(item){
    let toDoItem = document.createElement("li")
    let toDoCheck = document.createElement('input')
    let toDo = document.createElement('p');
    let toDoEditBtn = document.createElement('button');
    let toDoDeleteBtn = document.createElement('button');
    

    toDoItem;
    toDoCheck.type="checkbox";
    toDo.innerText=item;
    toDoEditBtn.innerHTML="Edit";
    toDoDeleteBtn.className="to-do-delete-btn"
    toDoDeleteBtn.innerHTML="Delete";

    toDoList.appendChild(toDoItem);
    toDoItem.appendChild(toDoCheck);
    toDoItem.appendChild(toDo);
    toDoItem.appendChild(toDoEditBtn);
    toDoItem.appendChild(toDoDeleteBtn);
    
};

