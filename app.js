document.addEventListener('DOMContentLoaded', () => {
  // Obtenemos los elementos del DOM
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  // --- FUNCIONES DE DATOS ---
  const getTasks = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  };

  const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  // --- FUNCIONES DE RENDERIZADO ---
  const renderTasks = () => {
    const tasks = getTasks();
    taskList.innerHTML = ''; // Limpia la lista

    if (tasks.length === 0) {
      taskList.innerHTML = '<li class="no-tasks">No hay tareas pendientes.</li>';
      return;
    }

    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.title;
      // Añadimos un data-id para poder identificar la tarea más adelante
      li.dataset.id = task.id;
      taskList.appendChild(li);
    });
  };

  // --- LÓGICA PARA AÑADIR TAREAS ---
  const addTask = () => {
    const taskTitle = taskInput.value.trim();

    // (Dejaremos la validación de texto vacío para un futuro hotfix)

    const tasks = getTasks();

    const newTask = {
      id: Date.now(), // Usamos un timestamp como ID único
      title: taskTitle,
      completed: false
    };

    tasks.push(newTask);
    saveTasks(tasks);
    renderTasks(); // Volvemos a pintar la lista actualizada

    taskInput.value = ''; // Limpiamos el input
  };

  // --- EVENT LISTENERS ---
  addTaskBtn.addEventListener('click', addTask);

  // --- EJECUCIÓN INICIAL ---
  renderTasks();
});