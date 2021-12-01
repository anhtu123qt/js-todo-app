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
    localStorage.setItem("ask")
}