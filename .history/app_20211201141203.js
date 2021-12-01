const input = document.querySelector("#input");
const btnAdd = document.querySelector("#btnAdd");
const task = document.querySelector("#task");

const app = {
    start: () => {
        showTasks ();
        addTask();
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
    let completedTasks = [];

    let getTasks = localStorage.getItem("task");
    let listTasks = JSON.parse(getTasks);
    let getCompletedTasks = localStorage.getItem("completed-task");
    if (getCompletedTasks == null) {
        let completedTasks = [];
    } else {
        completedTasks = JSON.parse("completed-task");
    }
    let checkedTask = listTasks[index]
    // listTasks.splice(index, 1)
    completedTasks.push(checkedTask);
    localStorage.setItem("completed-task", JSON.stringify(completedTasks));

    showTasks();
    console.log(completedTasks);
}

function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("task");
    let listTasks = JSON.parse(getLocalStorage);

    listTasks.splice(index, 1);

    localStorage.setItem("task", JSON.stringify(listTasks));

    showTasks();
}

app.start();

