const taskInput = document.querySelector('.js-task-input');
const button = document.querySelector('.js-add-button');
const container = document.querySelector('.js-container');

let todo = [];
const saveToDo = localStorage.getItem('todo');
if (saveToDo) {
    todo = JSON.parse(saveToDo);
    updateDisplay();
}
button.addEventListener('click', () => {
    const input = taskInput.value;

    if (!input) return;

    todo.push({
        input: input
    });

    taskInput.value = "";
    updateDisplay();
});

function updateDisplay() {
    container.innerHTML = "";

    todo.forEach((tasks,index) => {
        container.innerHTML += `
            <div class="display">
                <span>${tasks.input}</span>
                <button class="btn" data-index="${index}">
                x
                </button>
            </div>
        `
    });

    const remove = document.querySelectorAll('.btn');  
    remove.forEach(btn => {
        btn.addEventListener('click', () => {
            let i = btn.getAttribute('data-index');
            todo.splice(i, 1);
            updateDisplay();
        })
    });
    localStorage.setItem('todo', JSON.stringify(todo));
}

