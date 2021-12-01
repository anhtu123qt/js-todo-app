const input = document.querySelector("#input");
const btnAdd = document.querySelector("#btnAdd");
const task = document.querySelector("#task");

function addTask () {
    input.onkeyup = (event) => {
        let newTask = input.value;
        if(event.key === 'Enter' && newTask.trim() != 0)
           
        }
}



showTasks();

btnAdd.onclick = () => {
    let newTask = input.value;
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

    listTasks.forEach( (element) => {
        renderTask +=
            `
            <div class="mt-1 bg-gray-50 p-4 rounded-md">
                <label class="inline-flex items-center">
                    <input type="radio" id="check" class="form-radio h-6 w-6" name="radio-sizes" value="">
                    <span class="ml-3 text-lg">${element}</span>
                </label>
                <div id="trash" class="inline float-right text-2xl hover:opacity-25">
                    <i class="far fa-trash-alt"></i>
                </div>
            </div>
            `
    });

    task.innerHTML = renderTask;
}

