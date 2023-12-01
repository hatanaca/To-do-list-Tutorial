const inputBox = document.getElementById("input-box");
// ira receber o campo "input"
const listContainer = document.getElementById("list-container");
// ira receber o elemento "container"

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something !")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
// Função ira criar um elemento "li" com o input do usuario

function chamarAddTask(event) {
    if(event.key === 'Enter'){
        addTask();
    }
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();     
    }
},false);
// Função para remover ou marcar elementos

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
// função para salvar os dados quando atualizada a página
