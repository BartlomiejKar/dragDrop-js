// Buttons

const addButton = document.querySelectorAll(".add_task-button")



// List

const backlogItem = document.querySelectorAll(".list_item-backlog");
const progressItem = document.querySelectorAll(".list_item-progress");
const completeItem = document.querySelectorAll(".list_item-complete");
const onHoldItem = document.querySelectorAll(".list_item-onhold");



checkClassList = (button) => {
    if (button.classList.contains("button_backlog")) {
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

const buttons = addButton.forEach(button => {

    button.addEventListener("click", () => AddTask(button))
})


