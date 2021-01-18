// Buttons

const addButton = document.querySelectorAll(".add_task-button");
const addInputButton = document.querySelector(".input_button-add");
const cancelInputButton = document.querySelector(".input_button-cancel")



// List

const backlogItem = document.querySelectorAll(".list_item-backlog");
const progressItem = document.querySelectorAll(".list_item-progress");
const completeItem = document.querySelectorAll(".list_item-complete");
const onHoldItem = document.querySelectorAll(".list_item-onhold");

// Input


const inputContainer = document.querySelector(".container_input")


toggleInputContainer = () => {
    if (inputContainer.classList.contains("container_input")) {
        inputContainer.classList.remove("container_input");
        inputContainer.classList.add("container_remove-input")
    } else {
        inputContainer.classList.remove("container_remove-input")
        inputContainer.classList.add("container_input")
    }

}


checkClassList = (button) => {

    if (button.classList.contains("button_backlog")) {
        toggleInputContainer()
        console.log("backlog")
    } else if (button.classList.contains("button_progress")) {
        console.log("progress")
    } else if (button.classList.contains("button_onhold")) {
        console.log("onhold")
    } else if (button.classList.contains("button_complete")) {
        console.log("complete")
    } else {
        return
    }
}

AddTask = (button) => {
    checkClassList(button)
}

// EventListeners

const buttons = addButton.forEach(button => {

    button.addEventListener("click", () => AddTask(button))
})

cancelInputButton.addEventListener("click", toggleInputContainer)



