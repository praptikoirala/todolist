//defining ui variables
const form = document.querySelector('.form-input');
const taskInp = document.querySelector('.new-task');
const filter = document.querySelector('.filter');
const clearBtn = document.querySelector('.clear-btn');
const taskList = document.querySelector('.collection');

//load all event listener
loadEventListeners();

//add event
function loadEventListeners(){

    //adding task
    form.addEventListener('submit', addTask);
    //deleting a task
    taskList.addEventListener('click', removeTask);
    //clear task event
    clearBtn.addEventListener('click', clearTask);
    //filter tasks
    filter.addEventListener('keyup', filterTask);
}

//add task
function addTask(e){
    e.preventDefault();

    if(taskInp.value === ''){
        alert('add a task');
    }else{

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

        //localstorage
        storeinLocalStorage(taskInp.value);

        taskInp.value = '';

    }   
}

//setting local storage
function storeinLocalStorage(task){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

//deleting a task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete')){
        if(confirm('Delete task??')){
            e.target.parentElement.parentElement.remove();
        }
    }

    e.preventDefault();
}

//clering all task
function clearTask(e){
    
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    //taskList.innerHTML = '';

    e.preventDefault();
}

//filtering through tasks
function filterTask(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;

            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display ='flex';
            }else{
                task.style.display ='none';
            }
        }
    )

    e.preventDefault();
}