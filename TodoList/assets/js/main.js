const button = document.querySelector('.button-add-tarefa')
const inputTarefa = document.querySelector('.input-nova-tarefa')
const tarefas = document.querySelector('.tarefas')

function salvaTarefas() {
    const tarefasLi = tarefas.querySelectorAll("li");
    const listaTarefas = []
    
    tarefasLi.forEach(li =>{
        const texto = li.firstChild.textContent.trim();
        listaTarefas.push(texto)
    })

    localStorage.setItem("tarefas",JSON.stringify(listaTarefas))
}

function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem("tarefas");
    if (!tarefasSalvas) return;

    const lista = JSON.parse(tarefasSalvas);
    lista.forEach(tarefa => criaTarefa(tarefa));
}

carregarTarefas();

function criaLi() {
   const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputTarefa.value = ""
    inputTarefa.focus();
}



function criaButton() {
    const bnt = document.createElement('button')
    bnt.classList.add('apagar')
    bnt.textContent = "x"
    return bnt;



}

function criaTarefa(textoInput) {
    const li = criaLi();
    const bnt = criaButton();
    li.classList.add("tarefasli")
    li.textContent = textoInput;
    tarefas.appendChild(li).appendChild(bnt)

    bnt.addEventListener('click',(e)=>{
        li.remove()
        salvaTarefas();
    })
    salvaTarefas();
}





inputTarefa.addEventListener('keypress',function(e){
    if(!inputTarefa.value) return;
    if(e.keyCode === 13){
        criaTarefa(inputTarefa.value)
        limpaInput()
    };
})

button.addEventListener('click', (e)=>{
    if(!inputTarefa.value) return; 
    criaTarefa(inputTarefa.value)   
    limpaInput();
})


