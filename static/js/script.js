function addTodo() {
    var input = document.getElementById('todo-input');
    var newTodoText = input.value;
    if (newTodoText !== "") {
        var li = document.createElement('li');
        li.textContent = newTodoText;

        // Ajouter un bouton de suppression à chaque tâche
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.onclick = function () {
            li.parentNode.removeChild(li);
        };
        li.appendChild(deleteBtn);

        document.getElementById('todo-list').appendChild(li);
        input.value = ""; // clear the input after adding
    }
}