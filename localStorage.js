
const todoItems=[];


function addItem(){
    const inputValue = document.getElementById('todo_input').nodeValue;
    todoItems.push(inputValue);
    localStorage.setItem('todoItem,inputValue');
    console.log(localStorage.getItem('todoItems');
    getItems();
}

function getItems(){
    const todoList = document.getElementById('todo_list');
    const todoItem = localStorage.getItem(todoItem);
    todoList.innerHTML = '<li>' + todoItem + '</li>';
}

getItems();