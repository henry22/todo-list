/* global $ */
$(document).ready(function() {
    $.getJSON('/api/todos')
    .then(addTodos);
    
    $('#todoInput').keypress(function(event) {
        if(event.which === 13) {
            createTodo();
        }
    });
    
    $('.list').on('click', 'span', function() {
        removeTodo($(this).parent());
    })
});

function addTodos(todos) {
    // Add todos to page here
    todos.forEach(function(todo) {
        addTodo(todo);
    });
}

function addTodo(todo) {
    var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
    
    newTodo.data('id', todo._id);
    
    if(todo.completed) {
        newTodo.addClass('done');
    }
    
    $('.list').append(newTodo);
}

function createTodo() {
    // Send request to create new todo
    var userInput = $('#todoInput').val();
    
    $.post('/api/todos', {name: userInput})
    .then(function(newTodo) {
        $('#todoInput').val('');
        addTodo(newTodo);
    })
    .catch(function(err) {
        console.log(err);
    });
}

function removeTodo(todo) {
    var todoId = todo.data('id');
    var deletedUrl = '/api/todos/' + todoId;
    
    $.ajax({
        method: 'DELETE',
        url: deletedUrl
    })
    .then(function(data) {
        todo.remove();
    });
}