document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  const getTasks = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  };

  const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const renderTasks = () => {
    const tasks = getTasks();
    taskList.innerHTML = ''; 

    if (tasks.length === 0) {
      taskList.innerHTML = '<li class="no-tasks">No hay tareas pendientes.</li>';
      return;
    }

    tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = 'task-item';
      if (task.completed) {
        li.classList.add('completed');
      }
      li.dataset.id = task.id;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;

      const span = document.createElement('span');
      span.textContent = task.title;

      li.appendChild(checkbox);
      li.appendChild(span);
      taskList.appendChild(li);
    });
  };

  const addTask = () => {
    const taskTitle = taskInput.value.trim();
    const tasks = getTasks();
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false
    };

    tasks.push(newTask);
    saveTasks(tasks);
    renderTasks();
    taskInput.value = '';
  };

  // --- NUEVA LÓGICA PARA COMPLETAR TAREA ---
  const toggleTaskComplete = (taskId) => {
    const tasks = getTasks();
    // Buscamos la tarea por su ID y cambiamos su estado 'completed'
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    saveTasks(newTasks);
    renderTasks();
  };

  // Usamos delegación de eventos para manejar los clics en los checkboxes
  taskList.addEventListener('click', (event) => {
    if (event.target.type === 'checkbox') {
      const taskId = Number(event.target.parentElement.dataset.id);
      toggleTaskComplete(taskId);
    }
  });

  addTaskBtn.addEventListener('click', addTask);
  renderTasks();
});