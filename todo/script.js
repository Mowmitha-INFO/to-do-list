// Select necessary DOM elements
const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add task function
function addTask() {
    const task = input.value.trim();
   
    if (task) {
        const li = document.createElement('li');
       
        // Create task text
        const taskText = document.createElement('span');
        taskText.textContent = task;
       
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => li.remove();  // Delete task
       
        // Append text and delete button to the list item
        li.appendChild(taskText);
        li.appendChild(deleteButton);
       
        // Add the new task to the list
        todoList.appendChild(li);
       
        // Clear input field
        input.value = '';
    }
}

// Add button event listener
addButton.addEventListener('click', addTask);

// Add task by pressing Enter key
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

