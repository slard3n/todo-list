document.getElementById('taskWriting').addEventListener('submit', function(e) {
    e.preventDefault();

    let usersInput = this.usersInput.value;

    if(usersInput.trim() === '') {
        document.getElementById('error').innerText = 'You didn\'t write anything!';
        document.getElementById('error').classList.remove('hidden');
        this.usersInput.value = '';
        return;
    }

    if(usersInput.trim() != '') {
        document.getElementById('error').classList.add('hidden');
    }

    this.usersInput.value = '';


    // document.getElementById('error').innerText = '';
    // this.usersInput.value = '';
    


    let li = document.createElement('li');
    li.className = 'task-item';

    li.innerHTML = `<span class="round-check" aria-hidden="true"></span>
    <span class="task-text"></span>`

    
    li.querySelector('.task-text').innerText = usersInput;

    document.getElementById('taskList').appendChild(li);

    li.addEventListener('click', function() {
        this.classList.toggle('completed');
    });
})

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('taskList').innerHTML = '';
})

document.getElementById('clearComButton').addEventListener('click', function() {
    let completedTasks = document.querySelectorAll('.task-item.completed');

    completedTasks.forEach(function(task) {
        task.remove();
    });
});