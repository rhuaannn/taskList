
const inputName =  document.querySelector('#name');
const buttonGravar = document.querySelector('#button');
const msgError = document.querySelector('.msg');
const ulList = document.querySelector('.list');
const buttonClear = document.querySelector('#buttonLimpar');
const buttonDelete = document.querySelector('#deleteTask');
const deleteButton = document.querySelector('.material-symbols-outlined');

function addTask() {

    if (inputName.value === "" ) {
        msgError.textContent = "Digite a tarefa";
        msgError.classList = "error";
        
        setTimeout (() => {
        msgError.textContent = "";
        msgError.classList = "";

    }, 3000)
       
};
    
    const li = document.createElement("li");
        li.classList = "ulList";
        li.innerHTML = ` ${inputName.value}`;

        ulList.appendChild(li);
        inputName.value = "";

    const deleteButton = document.createElement("li");
    
      
      deleteButton.classList.add("material-symbols-outlined");
      deleteButton.innerText = "delete"; 
      li.appendChild(deleteButton);
      deleteButton.addEventListener('click', () => {
        li.remove();
      });


};



function clearInput(){
    const textValue = inputName.value;

    if(inputName.value == "")
    msgError.textContent = "Tarefa vazia";
    msgError.classList = "error";
    
    setTimeout (() => {
    msgError.textContent = "";
    msgError.classList = "";

}, 3000)


    document.getElementById('name').value = "";
}

function deleteTask(){
   
    
    let remove = document.querySelector('ulList ');
 
    ulList.innerHTML = ""
    
  
}
