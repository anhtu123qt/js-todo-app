const input = document.querySelector("#input");
const btnAdd = document.querySelector("#btnAdd");

input.onkeyup = () => {
    let newTask = input.value;
    if(newTask.trim() == 0) {
        btnAdd.classList.add(".active");
    }
}