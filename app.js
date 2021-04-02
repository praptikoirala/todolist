//defining ui variables
const form = document.querySelector('.form-input');
const taskInp = document.querySelector('.new-task');
const filter = document.querySelector('.filetr');
const clearBtn = document.querySelector('.clear-btn');
const taskList = document.querySelector('.collection');

//load all event listener
loadEventListeners();

//add event
function loadEventListeners(){
    form.addEventListener('submit', addTask);
}

//add task
function addTask(e){
    e.preventDeafult();

    if(taskInp.value === ''){
        alert('add a task');
    }

    //create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInp.value));

    //create link
    const link = document.createElement('a');
    link.className = 'delete';
    link.innerHTML = '<i class="fas fa-minus-circle"></i>';

    //appent link to li 
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    console.log(li);

    
}