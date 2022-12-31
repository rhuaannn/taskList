
    const inputName =  document.querySelector('#name');
    const buttonGravar = document.querySelector('#button');
    const msgError = document.querySelector('.msg');
    const ulList = document.querySelector('.list');
    const buttonClear = document.querySelector('#buttonLimpar');
    const buttonDelete = document.querySelector('#deleteTask');
    const deleteButton = document.querySelector('.material-symbols-outlined');
    const checkbox = document.querySelector('.inputCheckBox')


    addTask=()=> {
    
        
        if (inputName.value === "" ) {
            msgError.textContent = "Digite a tarefa";
            msgError.classList = "error";
            
            setTimeout (() => {
            msgError.textContent = "";
            msgError.classList = "";

        }, 3000)
        
    };

    if(inputName.value !=''){
        
        const li = document.createElement("li");

            li.classList = "ulList";
            li.innerHTML = ` ${inputName.value}`;

            ulList.appendChild(li);
            inputName.value = "";


            
        const deleteButton = document.createElement("li");
        const checkbox = document.createElement('input')

            checkbox.type = 'checkbox'
            li.prepend(checkbox);
       
            checkbox.addEventListener('change',()=>{

           
                if(checkbox.checked) {
                    li.classList.add("done")
                }
                else { li.classList.remove("done");
                    }
          
        })
       
            deleteButton.classList.add("material-symbols-outlined");
            deleteButton.innerHTML = "delete"; 
            li.appendChild(deleteButton);
            deleteButton.addEventListener('click', () => {
            li.remove();
            });
            

            };

    };


    clearInput=()=>{
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



    deleteTask=()=>{
        if(ulList.value !='')
        msgError.textContent = "Tarefa vazia";
        msgError.classList = "error";
        
        setTimeout (() => {
        msgError.textContent = "";
        msgError.classList = "";

    }, 3000)
        
        let remove = document.querySelector('ulList ');
    
        ulList.innerHTML = ""
        
    
    }
