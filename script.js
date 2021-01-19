// containers
const backlogContainer = document.querySelector(".list_container-backlog");
const progressContainer = document.querySelector(".list_container-progress");
const completeContainer = document.querySelector(".list_container-complete");
const onHoldContainer = document.querySelector(".list_container-onhold");



// Buttons

const addButton = document.querySelectorAll(".add_task-button");

// List

// const backlogItem = document.querySelectorAll(".list_item-backlog");
// const progressItem = document.querySelectorAll(".list_item-progress");
// const completeItem = document.querySelectorAll(".list_item-complete");
// const onHoldItem = document.querySelectorAll(".list_item-onhold");
const backlogItem = document.getElementById("backlog_ul");
const progressItem = document.getElementById("progress_ul");
const completeItem = document.getElementById("complete_ul");
const onHoldItem = document.getElementById("onhold_ul");


// Input

const input = document.getElementById("input");
const inputContainer = document.querySelector(".container_input");
const addInputButton = document.querySelector(".input_button-add");
const cancelInputButton = document.querySelector(".input_button-cancel");

//Array with Tasks
const backlogTasks = ["zadanie backlog"];
const progressTasks = ["zadanie progress"];
const completeTasks = ["zadanie complete"];
const onholdTasks = ["zadanie onhold"];


// Map Array


const arrayBacklogTasks = backlogTasks.map(el => {
    const list = document.createElement("li");
    list.classList.add("list_item-backlog");
    list.textContent = el;
    backlogItem.appendChild(list)
});

const arrayProgressTasks = progressTasks.map(el => {
    const list = document.createElement("li");
    list.classList.add("list_item-progress");
    list.textContent = el;
    progressItem.appendChild(list)
});

const arrayCompleteTasks = completeTasks.map(el => {
    const list = document.createElement("li");
    list.classList.add("list_item-complete");
    list.textContent = el;
    completeItem.appendChild(list)
});

const arrayOnholdTasks = onholdTasks.map(el => {
    const list = document.createElement("li");
    list.classList.add("list_item-onhold");
    list.textContent = el;
    onHoldItem.appendChild(list)
})

// Functions

createLiElement = ({ valueInput, parentElement }) => {
    const li = document.createElement("li");
    li.textContent = valueInput;
    parentElement.appendChild(li);
}

addTaskToArray = () => {
    const valueInput = input.value;
    const parentElement = inputContainer.parentNode.childNodes[3];
    console.log(parentElement)
    createLiElement({ valueInput, parentElement })
    input.value = "";
}

disabledButtons = () => {
    addButton.forEach(el => el.disabled ? el.disabled = false : el.disabled = true)
}

toggleInputContainer = () => {
    if (inputContainer.classList.contains("container_input")) {
        inputContainer.classList.remove("container_input");
        inputContainer.classList.add("container_remove-input")
    } else {
        inputContainer.classList.remove("container_remove-input");
        inputContainer.classList.add("container_input");
        disabledButtons()
    }

}


checkClassList = (button) => {
    if (button.classList.contains("button_backlog")) {
        toggleInputContainer();
        backlogContainer.appendChild(inputContainer);

    } else if (button.classList.contains("button_progress")) {
        toggleInputContainer();
        progressContainer.appendChild(inputContainer);

    } else if (button.classList.contains("button_onhold")) {
        toggleInputContainer();
        onHoldContainer.appendChild(inputContainer);

    } else if (button.classList.contains("button_complete")) {
        toggleInputContainer();
        completeContainer.appendChild(inputContainer);

    } else {
        return
    }
}

AddTask = (button) => {
    checkClassList(button);
    disabledButtons()

}

// EventListeners

const buttons = addButton.forEach(button => {

    button.addEventListener("click", () => AddTask(button))
})

cancelInputButton.addEventListener("click", toggleInputContainer);

addInputButton.addEventListener("click", addTaskToArray);



