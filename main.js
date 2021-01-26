

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


ondragstart = (task) => {
    console.log(`dragstart ${task}`)
}
ondragend = (task) => {
    console.log(`dragend ${task}`);
}
getAllElementsLI = () => {
    const li = document.querySelectorAll("li");
    const arrayLi = Array.from(li);

    for (const task of arrayLi) {
        console.log(task)
        task.addEventListener("dragstart", () => ondragstart(task));
        task.addEventListener("dragend", () => ondragend(task));

    }
}

dragOver = (e) => {
    e.preventDefault();
    console.log("dragover");
};
dragEnter = () => {
    console.log("dragenter")
};
dragLeave = () => {
    console.log("dragelave")
};

for (const element of ListUl) {
    element.addEventListener("dragover", dragOver);
    element.addEventListener("dragenter", dragEnter);
    element.addEventListener("dragleave", dragLeave);
}


// helpful Function
createLiElement = ({ value, parentElement }) => {
    const button = document.createElement("button");
    button.setAttribute("id", "deleteTask");
    button.setAttribute("onclick", `this.parentNode.remove()`);
    const img = document.createElement("img");
    img.setAttribute("src", "/image/delete.svg")
    button.appendChild(img)
    const li = document.createElement("li");
    li.setAttribute("draggable", "true")
    li.textContent = value;
    li.appendChild(button);
    parentElement.appendChild(li);
    getAllElementsLI();
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

getElementsLi = () => {
    let tasksLi = document.getElementsByTagName("li");
    liElements = [...tasksLi];

    return liElements;

};



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
        getElementsLi()
    }
}



// EventLsitener

cancelInputButton.addEventListener("click", cancelButton);


addInputButton.addEventListener("click", addTaskInputToArray)





