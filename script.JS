// Function to render tasks on the UI
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    const tasks = getTasks();
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(index);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}

// Function to add a new task
function addTask() {
    console.log("in add task");
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim(); 
    if (taskText !== '') {
        const fajax = new FXMLHttpRequest();
        fajax.open('POST', '/api/tasks');
        fajax.onreadystatechange = () => {
            if (fajax.readyState === 4 && fajax.status === 201) {
                renderTasks();
                taskInput.value = '';
            }
        };
        fajax.send(taskText);
    }
}

// Function to delete a task
function deleteTask(index) {
    const fajax = new FXMLHttpRequest();
    fajax.open('DELETE', `/api/tasks/${index}`);
    fajax.onreadystatechange = () => {
        if (fajax.readyState === 4 && fajax.status === 200) {
            renderTasks();
        }
    };
    fajax.index = index;
    fajax.send();
}

// Initial render when the page loads
window.onload = renderTasks;
