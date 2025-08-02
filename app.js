document.addEventListener('DOMContentLoaded', () => {
  const taskList = document.getElementById('task-list');

  const getTasks = () => {
    // Obtiene las tareas de localStorage o devuelve un array vacío si no hay nada
    return JSON.parse(localStorage.getItem('tasks')) || [];
  };

  const renderTasks = () => {
    const tasks = getTasks();
    taskList.innerHTML = ''; // Limpia la lista antes de volver a pintarla

    if (tasks.length === 0) {
      taskList.innerHTML = '<li class="no-tasks">No hay tareas pendientes.</li>';
      return;
    }

    tasks.forEach(task => {
      // Por ahora solo mostramos el texto, luego haremos esto más complejo
      const li = document.createElement('li');
      li.textContent = task.title;
      taskList.appendChild(li);
    });
  };

  // Llama a la función para mostrar las tareas en cuanto carga la página
  renderTasks();
});