

// Buttons 
const addButton = document.querySelectorAll(".add_task-button");
//ul List
const ListUl = document.querySelectorAll("ul");
//Container Tasks
const backlogContainer = document.querySelector(".list_container-backlog");
const progressContainer = document.querySelector(".list_container-progress");
const completeContainer = document.querySelector(".list_container-complete");
const onHoldContainer = document.querySelector(".list_container-onhold");
//container Input 
const inputContainer = document.querySelector(".container_input");
const cancelInputButton = document.querySelector(".input_button-cancel");
const addInputButton = document.querySelector(".input_button-add");
const input = document.getElementById("input");


//Disabled buttons
disabledButtons = () => {
    addButton.forEach(el => el.disabled ? el.disabled = false : el.disabled = true)
}


//Global variables for Drag and drop elements
let dragItem;
let currentColumn;

//drag and drop functions
drag = (e) => {
    dragItem = e.target;
}

allowDrop = (e) => {
    e.preventDefault();
}

drop = (e) => {
    e.preventDefault();
    // remove background color and paddings
    ListUl.forEach(el => {
        el.classList.remove("over")
    })

    //add Task do Ul

    const parent = ListUl[currentColumn];
    parent.appendChild(dragItem);
}
dragEnter = (column) => {
    ListUl[column].classList.add("over");
    currentColumn = column;
}
// helpful Function create Task
createLiElement = ({ value, parentElement }) => {
    const button = document.createElement("button");
    button.setAttribute("id", "deleteTask");
    button.setAttribute("onclick", `this.parentNode.remove()`);
    const img = document.createElement("img");
    img.setAttribute("src", "/image/delete.svg")
    button.appendChild(img)
    const li = document.createElement("li");
    li.draggable = true;
    li.setAttribute("ondragstart", "drag(event)");
    li.textContent = value;
    li.appendChild(button);
    parentElement.appendChild(li);
}

// Toggle Input 

const toggleInput = () => {
    if (inputContainer.classList.contains("container_input")) {
        inputContainer.classList.remove("container_input");
        inputContainer.classList.add("container_remove-input")
    } else {
        inputContainer.classList.remove("container_remove-input");
        inputContainer.classList.add("container_input");

    }
}

//Functions 


const addTaskToContainer = (number) => {
    if (number === 0) {
        toggleInput();
        disabledButtons();
        backlogContainer.appendChild(inputContainer);
    } else if (number === 1) {
        toggleInput();
        disabledButtons();
        progressContainer.appendChild(inputContainer);
    } else if (number === 2) {
        toggleInput();
        disabledButtons();
        completeContainer.appendChild(inputContainer);
    } else if (number === 3) {
        toggleInput();
        disabledButtons();
        onHoldContainer.appendChild(inputContainer);
    } else {
        return
    }
}


cancelButton = () => {
    toggleInput();
    disabledButtons();
    input.value = ""
}


addTaskInputToArray = (e) => {
    e.preventDefault();
    const value = input.value;
    const parentElement = inputContainer.parentNode.childNodes[3];
    if (value.length >= 1) {
        createLiElement({ value, parentElement });
        input.value = "";
        toggleInput();
        disabledButtons();
    }
}



// EventLsitener

cancelInputButton.addEventListener("click", cancelButton);


addInputButton.addEventListener("click", addTaskInputToArray)





