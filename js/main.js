const input = document.querySelector("input");
const addBtn = document.querySelector("#btnAdd");
const listContainer = document.querySelector("#listContainer");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {

    e.preventDefault();

    let text = input.value;

    if (text !=""){
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.classList.add("text-end");
        const span = document.createElement("span");

        span.textContent = text;
        li.appendChild(span);
        li.appendChild(addDeleteBtn());
        listContainer.appendChild(li);

        input.value = "";
        empty.classList.add("d-none");

        Toastify({
            text: "🤙 Tarea Agregada",
            position: 'center',
            style: {
                background: "linear-gradient(to right, #368b38, #74c376)",
                },
            duration: 1000
            
            }).showToast();
    } else {

        Toastify({
            text: "🙄 Escriba una Tarea",
            position: 'center',
            style: {
                background: "linear-gradient(to right, #4b8fff, #1b6ffa)",
                },
            duration: 1000
            }).showToast();

    }
})

function addDeleteBtn() {

    const deleteBtn = document.createElement("button");

    deleteBtn.innerText = "X";
    deleteBtn.className = "btn btn-danger ms-1"

    deleteBtn.addEventListener("click", (e)=>{

        const item = e.target.parentElement;
        console.log(item);

        listContainer.removeChild(item);
        const items = document.querySelectorAll("li");

        Toastify({

            text: "🗑️ Tarea Eliminada",
            position: 'center',
            style: {
                background: "linear-gradient(to right, #9b0f1f, #db3448)",
                },
            duration: 1000
            
            }).showToast();

        if (items.length == 0) {
            empty.classList.remove("d-none");
        }

    });

    return deleteBtn

}
