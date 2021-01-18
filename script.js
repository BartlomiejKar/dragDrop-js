// containers
const backlogContainer = document.querySelector(".list_container-backlog");
const progressContainer = document.querySelector(".list_container-progress");
const completeContainer = document.querySelector(".list_container-complete");
const onHoldContainer = document.querySelector(".list_container-onhold");

// Buttons

const addButton = document.querySelectorAll(".add_task-button");
const addInputButton = document.querySelector(".input_button-add");
const cancelInputButton = document.querySelector(".input_button-cancel");




// List

const backlogItem = document.querySelectorAll(".list_item-backlog");
const progressItem = document.querySelectorAll(".list_item-progress");
const completeItem = document.querySelectorAll(".list_item-complete");
const onHoldItem = document.querySelectorAll(".list_item-onhold");

// Input

const input = document.getElementById("input")
const inputContainer = document.querySelector(".container_input")


addTaskInputButton = (e) => {
    e.preventDefault();
    let value = input.value
    console.log(value);
    value = "";

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
input.addEventListener("input", addTaskInputButton)

// addInputButton.addEventListener("onChange", addTaskInputButton)

