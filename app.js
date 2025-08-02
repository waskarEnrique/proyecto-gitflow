document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];

  const saveTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));

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
      if (task.completed) li.classList.add('completed');
      li.dataset.id = task.id;

      const taskContent = document.createElement('div');
      taskContent.className = 'task-content';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;

      const span = document.createElement('span');
      span.textContent = task.title;

      taskContent.appendChild(checkbox);
      taskContent.appendChild(span);

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'X';

      li.appendChild(taskContent);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  };

  const addTask = () => {
    const taskTitle = taskInput.value.trim();

    if (taskTitle === '') {
      alert('Por favor, escribe una tarea.');
      return; 
    }

    const tasks = getTasks();
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks(tasks);
    renderTasks();
    taskInput.value = '';
  };

  const toggleTaskComplete = (taskId) => {
    const tasks = getTasks();
    const newTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    saveTasks(newTasks);
    renderTasks();
  };

  const deleteTask = (taskId) => {
    let tasks = getTasks();
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks(tasks);
    renderTasks();
  };

  taskList.addEventListener('click', (event) => {
    const target = event.target;
    const parentLi = target.closest('.task-item');

    if (!parentLi) return;

    const taskId = Number(parentLi.dataset.id);

    if (target.type === 'checkbox') {
      toggleTaskComplete(taskId);
    } else if (target.matches('.delete-btn')) {
      deleteTask(taskId);
    }
  });

  addTaskBtn.addEventListener('click', addTask);
  renderTasks();
});