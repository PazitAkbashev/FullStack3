
// Function to retrieve tasks from local storage
function getTasks() {
    console.log("in DB.getTasks ");

    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Function to save tasks to local storage
function saveTasks(tasks) {
    console.log("in DB.savetask ");

    localStorage.setItem('tasks', JSON.stringify(tasks));
}
