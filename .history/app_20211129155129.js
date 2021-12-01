const input = document.querySelector("#input");
const btnAdd = document.querySelector("#btnAdd");

input.click = () => {
    let newTask = input.value;
    let getLocalStorage = localStorage.getItem("task");
    if (getLocalStorage == null) {
        let listTasks = [];
    } else {
        listTasks = JSON.parse(getLocalStorage);
    }
    listTasks.push(newTask);
    localStorage.setItem("task", JSON.stringify(listTasks))
}

function showTasks() {
    let newTask = input.value;
    let getLocalStorage = localStorage.getItem("task");
    if (getLocalStorage == null) {
        let listTasks = [];
    } else {
        listTasks = JSON.parse(getLocalStorage);
    }

    let renderTask = '';

    listTasks.forEach((el, index) => {
        renderTask = `
            <div class="mt-1 bg-gray-50 p-4 rounded-md">
                <label class="inline-flex items-center">
                    <input type="radio" id="check" class="form-radio h-6 w-6" name="radio-sizes" value="2">
                    <span class="ml-3 text-lg">Option 2</span>
                </label>
                <div id="trash" class="inline float-right text-2xl hover:opacity-25">
                    <i class="far fa-trash-alt"></i>
                </div>
            </div>
            `
    })
}
