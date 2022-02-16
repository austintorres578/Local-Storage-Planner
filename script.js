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
 const filledWakeDeleteBtn = document.getElementById("filled-wake-delete-btn");
 const filledWakeEditBtn = document.getElementById("filled-wake-edit-btn");
 let wakeInfo = JSON.parse(localStorage.getItem("wake"));
 let wakeArray= [];

 wakeForm.addEventListener("submit",writeWakeTime);
 filledWakeDeleteBtn.addEventListener("click",deleteWakeTime);
 filledWakeEditBtn.addEventListener("click",editWakeTime);

 function writeWakeTime(Event){
    Event.preventDefault();
    wakeArray=[];
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

function deleteWakeTime(){
    localStorage.removeItem("wake");
    filledWakeTime.innerText="";
    wakeTimeContainer.style.display="block";
    filledWakeTimeContainer.style.display="none";

};

function editWakeTime(){
    localStorage.removeItem("wake");
    wakeInput.value=filledWakeTime.innerText;
    filledWakeTime.innerText="";
    wakeTimeContainer.style.display="block";
    filledWakeTimeContainer.style.display="none";
};

//BED TIME

const bedTimeContainer=document.getElementById("bed-time-container");
const bedForm=document.getElementById("bed-form");
const bedInput=document.getElementById("bed-input");
const filledBedTime=document.getElementById("filled-bed-time");
const filledBedTimeContainer=document.getElementById("filled-bed-time-container");
const filledBedDeleteBtn=document.getElementById("filled-bed-delete-btn");
const filledBedEditBtn = document.getElementById("filled-bed-edit-btn");
let bedInfo = JSON.parse(localStorage.getItem("bed"));
let bedArray=[];

bedForm.addEventListener("submit",writeBedTime);
filledBedDeleteBtn.addEventListener("click",deleteBedTime);
filledBedEditBtn.addEventListener("click",editBedTime);

function writeBedTime(Event){
    Event.preventDefault();

    bedArray=[];
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

function deleteBedTime(){
    localStorage.removeItem("bed");
    filledBedTime.innerText="";
    bedTimeContainer.style.display="block";
    filledBedTimeContainer.style.display="none";
    window.location.reload();
};

function editBedTime(){
    localStorage.removeItem("bed");
    bedInput.value=filledBedTime.innerText;
    filledBedTime.innerText="";
    bedTimeContainer.style.display="block";
    filledBedTimeContainer.style.display="none";
};

//PRIORITIES LIST

const prioritiesList = document.getElementById("priorities-list");
const prioritiesInputContainer = document.getElementById("priorities-input-container");
const prioritiesInput = document.getElementById("priorities-input");
const prioritiesData = JSON.parse(localStorage.getItem('priorityItems'));
const prioritiesEditInput = document.getElementById("priorities-edit-input-container");
let prioritiesArray = [];
let priorityEditBtnArray =[];


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
  
    let priorityDeleteArray = [];
    let priorityItem = document.createElement("li")
    priorityItem.id="parent-element";
    let priorityCheck = document.createElement('input');
    let priority = document.createElement('p');
    priority.id = "priority-text";
    let priorityEditBtn = document.createElement('button');
    let priorityDeleteBtn = document.createElement('button');

    priorityItem;
    priorityCheck.type="checkbox";
    priority.innerText=prioritiesInput.value;
    priorityEditBtn.innerHTML="Edit";
    priorityEditBtn.id="priority-edit-button";
    priorityDeleteBtn.innerHTML="Delete";
    priorityDeleteBtn.className="priority-delete-btn";
    priorityDeleteBtn.id="priority-delete-btn";
    
    priorityDeleteBtn.addEventListener("click",priorityDeleteBtnTest);

    function priorityDeleteBtnTest(event){
        let x = event.target;
        let xParent = x.parentNode;
        xParent.parentNode.removeChild(xParent);
        for (let i = 0; i < document.querySelectorAll("#priority-text").length; i++) {
            priorityDeleteArray.push(document.querySelectorAll("#priority-text")[i].innerHTML);
            
        };
        
        prioritiesArray=priorityDeleteArray;
        localStorage.setItem("priorityItems",JSON.stringify(prioritiesArray));
        prioritiesArray=[];
    };
    priorityEditBtn.addEventListener("click", priorityEditBtnTest);

    function priorityEditBtnTest(event){
        for (let i = 0; i < document.querySelectorAll("#priority-text").length; i++) {
            priorityEditBtnArray.push(document.querySelectorAll("#priority-text")[i].innerHTML);
            
        };
        let x = event.target;
        let xParent = x.parentNode;
        let editString = "edit";
        console.log(xParent.children[1].innerHTML);
        for (let i=0; i<priorityEditBtnArray.length; i++){
            if(priorityEditBtnArray[i]===xParent.children[1].innerHTML){
                priorityEditBtnArray[i]=editString;
            };
        };
        console.log(priorityEditBtnArray);
        prioritiesInputContainer.style.display="none";
        prioritiesEditInput.style.display="block";
        prioritiesEditInput.children[0].value=xParent.children[1].innerHTML;
        prioritiesEditInput.children[0].placeholder=xParent.children[1].innerHTML;
    
        prioritiesEditInput.addEventListener("submit", prioritiesEditFormSubmit);

        function prioritiesEditFormSubmit(event){
            event.preventDefault();
            for(let i=0; i < priorityEditBtnArray.length; i++){
                if(priorityEditBtnArray[i]==editString){
                    priorityEditBtnArray[i]=prioritiesEditInput.children[0].value;
                    xParent.children[1].innerHTML=prioritiesEditInput.children[0].value;
                    localStorage.setItem("priorityItems",JSON.stringify(priorityEditBtnArray));
                    priorityEditBtnArray=[];
                    location.reload();
                };
            };
    
            prioritiesEditInput.style.display="none";
            prioritiesInputContainer.style.display="block";
            prioritiesEditInput.children[0].value="";
            prioritiesEditInput.children[0].value="";
            prioritiesEditInput.children[0].placeholder="edit";
        };  
    };
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
    let priorityDeleteArray = [];
    let priorityItem = document.createElement("li")
    priorityItem.id="parent-element"
    let priorityCheck = document.createElement('input')
    let priority = document.createElement('p');
    priority.id = "priority-text";

    let priorityEditBtn = document.createElement('button');
    let priorityDeleteBtn = document.createElement('button');

    priorityItem;
    priorityCheck.type="checkbox";
    priority.innerText=item;

    priorityEditBtn.innerHTML="Edit";
    priorityEditBtn.id="priority-edit-button";
    priorityDeleteBtn.innerHTML="Delete";
    priorityDeleteBtn.className="priority-delete-btn";
    priorityDeleteBtn.id="priority-delete-btn";
    
    priorityDeleteBtn.addEventListener("click",priorityDeleteBtnTest);

    function priorityDeleteBtnTest(event){
        let x = event.target;
        let xParent = x.parentNode;
        xParent.parentNode.removeChild(xParent);
        for (let i = 0; i < document.querySelectorAll("#priority-text").length; i++) {
            priorityDeleteArray.push(document.querySelectorAll("#priority-text")[i].innerHTML);
            
        };
        
        prioritiesArray=priorityDeleteArray;
        localStorage.setItem("priorityItems",JSON.stringify(prioritiesArray));
        prioritiesArray=[];
    };

    priorityEditBtn.addEventListener("click", priorityEditBtnTest);

    function priorityEditBtnTest(event){
        for (let i = 0; i < document.querySelectorAll("#priority-text").length; i++) {
            priorityEditBtnArray.push(document.querySelectorAll("#priority-text")[i].innerHTML);
            
        };
        let x = event.target;
        let xParent = x.parentNode;
        let editString = "edit";
        console.log(xParent.children[1].innerHTML);
        for (let i=0; i<priorityEditBtnArray.length; i++){
            if(priorityEditBtnArray[i]===xParent.children[1].innerHTML){
                priorityEditBtnArray[i]=editString;
            };
        };
        console.log(priorityEditBtnArray);
        prioritiesInputContainer.style.display="none";
        prioritiesEditInput.style.display="block";
        prioritiesEditInput.children[0].value=xParent.children[1].innerHTML;
        prioritiesEditInput.children[0].placeholder=xParent.children[1].innerHTML;
    
        prioritiesEditInput.addEventListener("submit", prioritiesEditFormSubmit);

        function prioritiesEditFormSubmit(event){
            event.preventDefault();
            for(let i=0; i < priorityEditBtnArray.length; i++){
                if(priorityEditBtnArray[i]==editString){
                    priorityEditBtnArray[i]=prioritiesEditInput.children[0].value;
                    xParent.children[1].innerHTML=prioritiesEditInput.children[0].value;
                    prioritiesEditInput.children[0].value="";
                    localStorage.setItem("priorityItems",JSON.stringify(priorityEditBtnArray));
                    priorityEditBtnArray=[];
                    location.reload();
                };
            };
    
            prioritiesEditInput.style.display="none";
            prioritiesInputContainer.style.display="block";
            prioritiesEditInput.children[0].value="";
            prioritiesEditInput.children[0].value="";
            prioritiesEditInput.children[0].placeholder="edit";
        };  
    
    };


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
const toDoEditInput = document.getElementById("to-do-list-edit-input-container");
let toDoEditBtnArray = [];

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

    let toDoDeleteArray = [];
    let toDoItem = document.createElement("li")
    let toDoCheck = document.createElement('input')
    let toDo = document.createElement('p');
    toDo.id = "to-do-text";
    let toDoEditBtn = document.createElement('button');
    let toDoDeleteBtn = document.createElement('button');

    toDoItem;
    toDoCheck.type="checkbox";
    toDo.innerText=toDoListInput.value;
    toDoEditBtn.innerHTML="Edit";
    toDoEditBtn.id="to-do-edit-button"
    toDoDeleteBtn.className="to-do-delete-btn"
    toDoDeleteBtn.innerHTML="Delete";

    toDoDeleteBtn.addEventListener("click",toDoDeleteBtnTest);

    function toDoDeleteBtnTest(event){
        let x = event.target;
        let xParent = x.parentNode;
        xParent.parentNode.removeChild(xParent);
        for (let i = 0; i < document.querySelectorAll("#to-do-text").length; i++) {
            toDoDeleteArray.push(document.querySelectorAll("#to-do-text")[i].innerHTML);
            
        };
        
        toDoArray=toDoDeleteArray;
        localStorage.setItem("toDoItems",JSON.stringify(toDoArray));
        toDoArray=[];
    };

    toDoEditBtn.addEventListener("click", toDoEditBtnTest);

    function toDoEditBtnTest(event){
        for (let i = 0; i < document.querySelectorAll("#to-do-text").length; i++) {
            toDoEditBtnArray.push(document.querySelectorAll("#to-do-text")[i].innerHTML);
            
        };
        let x = event.target;
        let xParent = x.parentNode;
        let editString = "edit";
        console.log(xParent.children[1].innerHTML);
        for (let i=0; i<toDoEditBtnArray.length; i++){
            if(toDoEditBtnArray[i]===xParent.children[1].innerHTML){
                toDoEditBtnArray[i]=editString;
            };
        };
        console.log(toDoEditBtnArray);
        toDoListInputContainer.style.display="none";
        toDoEditInput.style.display="block";
        toDoEditInput.children[0].value=xParent.children[1].innerHTML;
        toDoEditInput.children[0].placeholder=xParent.children[1].innerHTML;
    
        toDoEditInput.addEventListener("submit", toDoEditFormSubmit);

        function toDoEditFormSubmit(event){
            event.preventDefault();
            for(let i=0; i < toDoEditBtnArray.length; i++){
                if(toDoEditBtnArray[i]==editString){
                    toDoEditBtnArray[i]=toDoEditInput.children[0].value;
                    xParent.children[1].innerHTML=toDoEditInput.children[0].value;
                    localStorage.setItem("toDoItems",JSON.stringify(toDoEditBtnArray));
                    toDoEditBtnArray=[];
                    location.reload();
                };
            };
    
            toDoEditInput.style.display="none";
            toDoListInputContainer.style.display="block";
            toDoEditInput.children[0].value="";
            toDoEditInput.children[0].value="";
            toDoEditInput.children[0].placeholder="edit";
        };  
    };

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
    let toDoDeleteArray = [];
    let toDoItem = document.createElement("li")
    toDoItem.id="parent-element"
    let toDoCheck = document.createElement('input')
    let toDo = document.createElement('p');
    toDo.id = "to-do-text";

    let toDoEditBtn = document.createElement('button');
    let toDoDeleteBtn = document.createElement('button');

    toDoItem;
    toDoCheck.type="checkbox";
    toDo.innerText=item;

    toDoEditBtn.innerHTML="Edit";
    toDoEditBtn.id="to-do-edit-button";
    toDoDeleteBtn.innerHTML="Delete";
    toDoDeleteBtn.className="to-do-delete-btn";
    toDoDeleteBtn.id="to-do-delete-btn";
    
    toDoDeleteBtn.addEventListener("click",toDoDeleteBtnTest);

    function toDoDeleteBtnTest(event){
        let x = event.target;
        let xParent = x.parentNode;
        xParent.parentNode.removeChild(xParent);
        for (let i = 0; i < document.querySelectorAll("#to-do-text").length; i++) {
            toDoDeleteArray.push(document.querySelectorAll("#to-do-text")[i].innerHTML);
            
        };
        
        toDoArray=toDoDeleteArray;
        localStorage.setItem("toDoItems",JSON.stringify(toDoArray));
        prioritiesArray=[];
    };

    toDoEditBtn.addEventListener("click", toDoEditBtnTest);

    function toDoEditBtnTest(event){
        for (let i = 0; i < document.querySelectorAll("#to-do-text").length; i++) {
            toDoEditBtnArray.push(document.querySelectorAll("#to-do-text")[i].innerHTML);
            
        };
        let x = event.target;
        let xParent = x.parentNode;
        let editString = "edit";
        console.log(xParent.children[1].innerHTML);
        for (let i=0; i<toDoEditBtnArray.length; i++){
            if(toDoEditBtnArray[i]===xParent.children[1].innerHTML){
                toDoEditBtnArray[i]=editString;
            };
        };
        console.log(toDoEditBtnArray);
        toDoListInputContainer.style.display="none";
        toDoEditInput.style.display="block";
        toDoEditInput.children[0].value=xParent.children[1].innerHTML;
        toDoEditInput.children[0].placeholder=xParent.children[1].innerHTML;
    
        toDoEditInput.addEventListener("submit", toDoEditFormSubmit);

        function toDoEditFormSubmit(event){
            event.preventDefault();
            for(let i=0; i < toDoEditBtnArray.length; i++){
                if(toDoEditBtnArray[i]==editString){
                    toDoEditBtnArray[i]=toDoEditInput.children[0].value;
                    xParent.children[1].innerHTML=toDoEditInput.children[0].value;
                    toDoEditInput.children[0].value="";
                    localStorage.setItem("toDoItems",JSON.stringify(toDoEditBtnArray));
                    toDoEditBtnArray=[];
                    location.reload();
                };
            };
    
            toDoEditInput.style.display="none";
            toDoListInputContainer.style.display="block";
            toDoEditInput.children[0].value="";
            toDoEditInput.children[0].value="";
            toDoEditInput.children[0].placeholder="edit";
        };  
    
    };


    toDoList.appendChild(toDoItem);
    toDoItem.appendChild(toDoCheck);
    toDoItem.appendChild(toDo);
    toDoItem.appendChild(toDoEditBtn);
    toDoItem.appendChild(toDoDeleteBtn);
    
};



//Work sheet