//mi primera chamba con js, toca documentar, zzzzzzz
// esto obteniene las referencias a los elementos del HTML
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// esto es un evento para agregar una nueva tarea
addTodoBtn.addEventListener('click', function() {
    const taskText = todoInput.value.trim(); // esto elimina los espacios en blanco

    // aqui se valida si el input no está vacío (un if de toda la vida)
    if (taskText === '') {
        alert('Ingresa algo, esta vacio :[');
        return;
    }

    // aqui creamos un nuevo elemento de la lista (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Creamos los botones de completar/descompletar
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete');
    
    // Agregamos un evento al botón de completar/descompletar
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed'); // esto alterna la clase 'completed'
    });

    // Creamos el botón de eliminar, nada nuevo
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');

    // Agregamos el evento al botón de eliminar como a los otros
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li); // Esto elimina el elemento li de la lista
    });

    // Agregamos los botones al li
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // aqui agregamos el nuevo elemento a la lista (ul)
    todoList.appendChild(li);

    // (opcional) esto Limpiara el input después de agregar la tarea
    todoInput.value = '';
});
