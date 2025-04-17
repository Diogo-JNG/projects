const API_URL = '/tasks';

// Carregar tarefas
async function loadTasks() {
  const response = await fetch(API_URL);
  const tasks = await response.json();

  const list = document.getElementById('task-list');
  list.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title;

    // Botão Remover
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Remover';
    delBtn.onclick = async () => {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'remove', id: task._id })
      });
      loadTasks();
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// Adicionar tarefa
document.getElementById('task-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = document.getElementById('task-input');
  if (!input.value.trim()) return;

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: input.value })
  });

  input.value = '';
  loadTasks();
});

// Inicializar
loadTasks();
