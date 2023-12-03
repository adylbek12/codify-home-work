let addMassage = document.querySelector('.message'),
addButton = document.querySelector('.add'),
todo = document.querySelector('.todo')

let toDoList = []
if(localStorage.getItem('todo')){
    toDoList = JSON.parse(localStorage.getItem('todo'));
    displayMassages(); 
}

addButton.addEventListener('click', function(){

   let newTodo = {
    todo: addMassage.value,
    checked: false,
    impotant: false
   }
   toDoList.push(newTodo)
   displayMassages(); 
   localStorage.setItem('todo', JSON.stringify(toDoList))
});

function displayMassages() {
    let displayMassages = '';
    toDoList.forEach(function(item,i){
        displayMassages += `
        <li>
        <input type= 'checkbox' id= 'item_ ${i}' ${item.checked ? 'checked' : ""}> 
        <lable for= 'item_ ${i}'>${item.todo}</lable>
        </li>
        `;
    
        todo.innerHTML = displayMassages

    });
}