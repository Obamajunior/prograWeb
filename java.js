// Obtener las referencias a los elementos del HTML
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Evento para agregar una nueva tarea
addTodoBtn.addEventListener('click', function() {
    const taskText = todoInput.value.trim(); // Eliminar espacios en blanco

    // Validar que el input no esté vacío
    if (taskText === '') {
        alert('Ingresa algo, esta vacio :[');
        return;
    }

    // Crear un nuevo elemento de la lista (li)
    const li = document.createElement('li');

    // Crear el span para la tarea
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.classList.add('task');

    // Crear el span para la fecha
    const dateSpan = document.createElement('span');
    const now = new Date();
    dateSpan.textContent = now.toLocaleString();
    dateSpan.classList.add('date');

    // Habilitar edición solo con doble clic en el nombre de la tarea
    taskSpan.addEventListener('dblclick', function() {
        const newTaskText = prompt('Edita tu tarea:', taskSpan.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskSpan.textContent = newTaskText;
        }
    });

    // Crear el botón de completar
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete');
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Crear el botón de eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    // Agregar el contenido al li
    li.appendChild(taskSpan);
    li.appendChild(dateSpan);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Agregar el li a la lista
    todoList.appendChild(li);

    // Limpiar el input después de agregar la tarea
    todoInput.value = '';
});

// Función para actualizar el reloj analógico
// Función para actualizar el reloj digital
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Asegurarnos de que siempre se muestren dos dígitos
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Actualizar el contenido del div con el reloj
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);
updateClock();

