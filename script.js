var todoForm = document.querySelector("#todo-form");
var todoInput = document.querySelector("#todo-text");
var todoCountSpan = document.querySelector("#todo-count");
var todoList = document.querySelector("#todo-list");

var todos = ["Learn Html", "Learn CSS", "Learn JacaScript"];

renderTodos();

function renderTodos() {
    //At first, clear the input box then create a todoList's element and update the todoCountSpan:
    todoList.innerHtml = "";
    todoCountSpan.textContent = todos.length;

    // Then render the created new list item(li) for each todo:
    for (var i = 0; i < todos.length; i++) {
        var todo = todo[i];
        var li = document.createEliment("li");
        li.textContent = todo;
        todoList.appendChild(li);
    }
}

// when form is submitted ...

todoForm.addEventListener("submit", function(event){
    event.preventDefault();
    var todoText = todoInput.value.trim(); 

    if(todoText===""){
        return;
    }
//  todo input item or valu will add to the todos array's:
todos.push(todoText);
todoInput.value = "";

// Rerander the list item:
renderTodos();

});