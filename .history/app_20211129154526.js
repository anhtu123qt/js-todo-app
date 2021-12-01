const input = document.querySelector("#input");
const btnAdd = document.querySelector("#btnAdd");

input.click = () => {
    let newTask = input.value;
    let getLocalStorage = localStorage.getItem("newTodo");
    if (getLocalStorage == null) {
        let listTasks = [];
    } else {

    }
}