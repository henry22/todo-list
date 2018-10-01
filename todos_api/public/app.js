/* global $ */
$(document).ready(function() {
    $.getJSON('/api/todos')
    .then(addTodos);
});

function addTodos(todos) {
    // Add todos to page here
    todos.forEach(function(todo) {
        var newTodo = $('<li class="task">' + todo.name + '</li>');
        
        if(todo.completed) {
            newTodo.addClass('done');
        }
        
        $('.list').append(newTodo);
    });
}