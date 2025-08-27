// Youtube.com/@KamranAshraf10

const addButton = document.getElementById('add');
const inputField = document.querySelector('#newtask input');
const tasksContainer = document.getElementById('tasks');

addButton.addEventListener('click', function () {
    const taskText = inputField.value.trim();

    if (taskText === '') return;

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const taskCheckDiv = document.createElement('div');
    taskCheckDiv.classList.add('taskCheck');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('taskCheckbox');

    const taskName = document.createElement('span');
    taskName.id = 'taskname';
    taskName.textContent = taskText;

    taskCheckDiv.appendChild(checkbox);
    taskCheckDiv.appendChild(taskName);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        taskDiv.remove();
    });

    taskDiv.appendChild(taskCheckDiv);
    taskDiv.appendChild(deleteButton);
    tasksContainer.appendChild(taskDiv);

    inputField.value = '';  // Clear input after adding task
});
