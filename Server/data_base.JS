// Function to retrieve tasks from local storage
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Function to save tasks to local storage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Updating the ui to display the current list of tasks stored in local storage. 
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; //clears any existing content inside the task list container
    const tasks = getTasks();
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = //the 'delete' and 'edit' buttons on the shown list
        `<span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(listItem);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput'); //Get the task text from the input field
    const taskText = taskInput.value.trim(); // remove any leading and trailing whitespace from a string.
    if (taskText !== '') {
        const allTasks = getTasks();
        allTasks.push(taskText); //insert the new task to tasks collectction
        saveTasks(allTasks);
        renderTasks(); //update the UI to display the current list of tasks
        taskInput.value = ''; //Clear the input field.
    } else {
        alert('Please enter a task!');
    }
}

// Function to edit a task
function editTask(index) {
    const tasks = getTasks();
    const newTaskText = prompt('Edit task:', tasks[index]); //open a dialog box to input some text.
    if (newTaskText !== null) {
        tasks[index] = newTaskText.trim();// remove any leading and trailing whitespace from a string.
        saveTasks(tasks);
        renderTasks(); //Shows the current list
    }
}

// Function to delete a task
function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1); //removes one item from the exepted index
    saveTasks(tasks);
    renderTasks();//Shows the current list
}

// Initial render when the page loads
window.onload = renderTasks;
