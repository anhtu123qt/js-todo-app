

const input = document.querySelector("#input");
const btnAdd = document.querySelector("#btnAdd");
const task = document.querySelector("#task");
const completedTask = document.querySelector("#completed-task");
const countTaskCompleted = document.querySelector("#count");

const app = {
    start: () => {
        showTasks ();
        addTask();
        showCompletedTask();
    }
}

function addTask() {
    input.onkeyup = (event) => {
        let newTask = input.value;
        if(event.key === 'Enter' && newTask.trim() != 0)
            handleEventAdd(newTask);
        }
    btnAdd.onclick = () => {
        let newTask = input.value;
        if (newTask.trim() != 0) {
            handleEventAdd(newTask);
        }
    }
}
function handleEventAdd(newTask) {
        let listTasks = [];
        let getLocalStorage = localStorage.getItem("task");
            
        if (getLocalStorage == null) {
            let listTasks = [];
        } else {
            listTasks = JSON.parse(getLocalStorage);
        }
            
        listTasks.push(newTask);

        localStorage.setItem("task", JSON.stringify(listTasks));
        
        showTasks();
}
function showTasks() {
    let newTask = input.value;
    let listTasks = [];
    let getLocalStorage = localStorage.getItem("task");

    if (getLocalStorage == null) {
        let listTasks = [];
    } else {
        listTasks = JSON.parse(getLocalStorage);
    }

    let renderTask = '';

    listTasks.forEach( (element, index) => {
        renderTask +=
            `
            <div class="mt-1 bg-gray-50 p-4 rounded-md">
                <label class="inline-flex items-center">
                    <input type="radio" onclick="showCompletedTask(${index})" class="form-radio h-6 w-6" name="radio-sizes" value="${index}">
                    <span class="ml-3 text-lg">${element}</span>
                </label>
                <div id="trash" onclick="deleteTask(${index})" class="inline float-right text-2xl hover:opacity-25">
                    <i class="far fa-trash-alt"></i>
                </div>
            </div>
            `
    });

    task.innerHTML = renderTask;
    input.value = "";
}

function showCompletedTask(index) {
    let getLocalStorage = localStorage.getItem("task");
    let listTasks = JSON.parse(getLocalStorage);
    let completedTasks = [];
    let getCompletedTasks = localStorage.getItem("completed-task");
    if (getCompletedTasks == null) {
        let completedTasks = [];
    } else {
        completedTasks = JSON.parse(getCompletedTasks);
    }

    let checkedTask = listTasks[index]
    if (checkedTask != null) {
        completedTasks.push(checkedTask);
        listTasks.splice(index, 1);
        localStorage.setItem("task", JSON.stringify(listTasks));    
    }

    localStorage.setItem("completed-task", JSON.stringify(completedTasks));
    listTaskCompleted = '';
    completedTasks.forEach((element, index) => {
            listTaskCompleted += 
                        `
                        <div class="mt-1 bg-gray-50 p-4 rounded-md">
                            <label class="inline-flex items-center">
                            <input type="radio" class="form-radio h-6 w-6" onclick="undoTask(${index})" name="radio-sizes" value="${index}">
                            <span class="ml-3 text-lg line-through">${element}</span>
                        </div>
                            `
                        })
    completedTask.innerHTML = listTaskCompleted;
    let renderCountTaskCompleted = '';
    let count = completedTasks.length;
    renderCountTaskCompleted = `
                        <div class="mt-2 bg-gray-50 rounded-md w-36  hover:bg-opacity-80 cursor-pointer">
                            <span class="p-5">Completed ${count}</span>
                        </div>
                        `
    countTaskCompleted.innerHTML = renderCountTaskCompleted;

    countTaskCompleted.onclick = () => {
        if(count > 0) {
            completedTask.style.display = "hidden"
        }
    }
    showTasks();
}

function undoTask(index) {
    let task = JSON.parse(localStorage.getItem("task"));
    let taskCompleted = JSON.parse(localStorage.getItem("completed-task"));
    if(taskCompleted[index]) {
        task.push(taskCompleted[index]);
        localStorage.setItem("task", JSON.stringify(task));

        taskCompleted.splice(index, 1);
        localStorage.setItem("completed-task", JSON.stringify(taskCompleted));
    }
    showTasks();
    showCompletedTask();
}

function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("task");
    let listTasks = JSON.parse(getLocalStorage);

    listTasks.splice(index, 1);

    localStorage.setItem("task", JSON.stringify(listTasks));

    showTasks();
}

app.start();

