(function () {
    document.getElementById('add-todo').addEventListener('click', function click() {
        var todo = document.getElementById('user-todo');
        var todoList = document.getElementById('user-todo-list');

        var li = document.createElement('li');
        var closeBtn = document.createElement('button');
        closeBtn.setAttribute('class', 'pull-right btn btn-danger');
        closeBtn.innerText = "X";
        //hook event onto btn
        closeBtn.addEventListener('click', function() {
            todoList.removeChild(li);
        })
        li.setAttribute('class', 'list-group-item active');
        li.innerText = todo.value;

        li.appendChild(closeBtn);

        todoList.appendChild(li);
        
        todo.value = '';

        setInterval(function () {
            li.setAttribute('class', 'list-group-item');
        }, 2000);
    });
})();