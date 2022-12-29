
const inputName =  document.querySelector('#name');
const buttonGravar = document.querySelector('#button');
const msgError = document.querySelector('.msg');
const ulList = document.querySelector('.list');
const buttonClear = document.querySelector('#buttonLimpar');


function addTask() {


    if (inputName.value === "" ) {
        msgError.textContent = "Digite a tarefa";
        msgError.classList = "error";
        
        setTimeout (() => {
        msgError.textContent = "";
        msgError.classList = "";
    }, 3000)};
    
    const li = document.createElement("li");
        li.classList = "ulList";
        li.innerHTML = ` ${inputName.value}`;

        ulList.appendChild(li);
        inputName.value = "";


}


function clearInput(){
    const textValue = inputName.value;
    document.getElementById('name').value = "";
}



