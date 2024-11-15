let todoTasks = ["Walk Chilli", "Make Dinner"];
let todoTasksStatus = [false, true];
let todoImportance = [false, true];


const updateTodoList = () => {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    for (const [index, task] of todoTasks.entries()) {
        const newTodoTaskElement = createNewTodoItemElement(task, index);
        todoList.appendChild(newTodoTaskElement);
    }
};

const createNewTodoItemElement = (task, index) => {
    // Create a <p> element to store the task description
    const newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    // Apply a CSS class to the completed items
    if (todoTasksStatus[index] == true) {
        newTodoTaskTextElement.classList.add("complete");
    }  

    if (todoImportance[index] == true) {
        newTodoTaskElement.classList.add("Important");

    }

    // Create a <li> element to contain the paragraph
    const newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);

    const completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    completeButtonElement.onclick = function () {
    toggleComplete(index);
    };

    newTodoTaskElement.appendChild(completeButtonElement);

    const importantButtonElement = document.createElement("input");
    importantButtonElement.type = "button";
    importantButtonElement.value = "Important";
    importantButtonElement.onclick = function () {
        toggleComplete(index);
    };

    newTodoTaskElement.appendChild(importantButtonElement);

    return newTodoTaskElement;
};

const toggleComplete = (index) => {
    // If it is complete, set it to incomplete. 
    // If it is incomplete, set it to complete.
    if (todoTasksStatus[index] == false) {
        todoTasksStatus[index] = true;
    } else {
      todoTasksStatus[index] = false;
    }
      updateTodoList();
};

// Initialize the list
updateTodoList();


const addTask = () => {
     const newTask = document.getElementById("new-task-text");
    if (newTask.value) {
        todoTasks.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = "";
        updateTodoList();
    } 
};




// Mark items as important.











