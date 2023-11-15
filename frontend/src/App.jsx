import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Función para obtener todas las tareas desde el backend
  const getTasks = async () => {
    try {
      const response = await fetch('http://localhost:8000/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Llamada a la función al cargar el componente
  useEffect(() => {
    getTasks();
  }, []);

  // Función para agregar una nueva tarea
  const addTask = async () => {
    try {
      const response = await fetch('http://localhost:8000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 'ramdomId',
          title: newTask,
          completed: false,
        }),
      });

      const data = await response.json();
      setTasks([...tasks, data]);
      setNewTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>

      {/* Mostrar lista de tareas */}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.id} - {task.title}
          </li>
        ))}
      </ul>

      {/* Agregar nueva tarea */}
      <div>
        <input
          type='text'
          placeholder='Nueva tarea'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Agregar Tarea</button>
      </div>
    </div>
  );
}

export default App;
