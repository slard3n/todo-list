function save() {
localStorage.setItem('tasks', document.getElementById('taskList').innerHTML);
}

function attachTaskEvents(li) {
    li.addEventListener('click', function() {
        this.classList.toggle('completed');
        save();
    });
}
    
document.getElementById('taskWriting').addEventListener('submit', function(e) {
    e.preventDefault();

    let usersInput = this.usersInput.value;

    const errorEl = document.getElementById('error');

    if(usersInput.trim() === '') {
        errorEl.innerText = 'You didn\'t write anything!';
        errorEl.classList.remove('hidden');
        this.usersInput.value = '';
        return;
    }

        errorEl.classList.add('hidden');

    this.usersInput.value = '';

    
    let li = document.createElement('li');
    li.className = 'task-item';

    li.innerHTML = `<span class="round-check" aria-hidden="true"></span>
    <span class="task-text"></span>`

    
    li.querySelector('.task-text').innerText = usersInput;

    document.getElementById('taskList').appendChild(li);

    attachTaskEvents(li);

    save();
    
})

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('taskList').innerHTML = '';

    save();
})

document.getElementById('clearComButton').addEventListener('click', function() {
    let completedTasks = document.querySelectorAll('.task-item.completed');

    completedTasks.forEach(function(task) {
        task.remove();

    save();
    });
});

window.addEventListener('load', function() {
    const taskList = document.getElementById('taskList');

    taskList.innerHTML = localStorage.getItem('tasks') || '';

    document.querySelectorAll('.task-item').forEach(attachTaskEvents);
});