

// Buttons 
const addButton = document.querySelectorAll(".add_task-button");


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


//Array with tasks

const backlogTasks = ["zadanie backlog"];
const progressTasks = ["zadanie progress"];
const completeTasks = ["zadanie complete"];
const onholdTasks = ["zadanie onhold"];


//Disabled buttons
disabledButtons = () => {
    addButton.forEach(el => el.disabled ? el.disabled = false : el.disabled = true)
}

// helpful Function
createLiElement = ({ value, parentElement }) => {
    const li = document.createElement("li");
    li.textContent = value;
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
}


addTaskInputToArray = (e) => {
    e.preventDefault();
    const value = input.value;
    const parentElement = inputContainer.parentNode.childNodes[3];
    createLiElement({ value, parentElement });

    input.value = "";
    toggleInput();
    disabledButtons();


}

// EventLsitener

cancelInputButton.addEventListener("click", cancelButton);


addInputButton.addEventListener("click", addTaskInputToArray)





