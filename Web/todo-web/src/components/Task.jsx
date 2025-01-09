import React, { useEffect, useState } from 'react';
import api from '../api';

const Task = () => {
    const [tasks, setTasks] = useState([]); // Inicialmente vazio
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        api.get("/api/tasks")
            .then(response => {
                if (response.status === 204 || !response.data) {
                    // Nenhum conteúdo retornado pela API
                    console.log("No tasks found (204 response).");
                    setTasks([]); // Garante que o estado seja uma lista vazia
                } else {
                    setTasks(response.data); // Atualiza com as tasks retornadas
                }
            })
            .catch(error => console.error("There was an error fetching the tasks!", error));
    }, []);

    const addTask = () => {
        api.post("/api/tasks", { 
            description: newTask, 
            completed: false 
        })
        .then(response => {
            setTasks([...tasks, response.data]); // Adiciona a nova task ao estado atual
            setNewTask("");
            console.log("Task added successfully!", response.data);
        })
        .catch(error => console.error("There was an error adding the task!", error));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input 
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                placeholder="Add new task"
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.length > 0 ? (
                    tasks.map(task => (
                        <li key={task.id}>{task.description}</li>
                    ))
                ) : (
                    <p>No tasks available.</p> // Exibe mensagem se não houver tasks
                )}
            </ul>
        </div>
    );
};

export default Task;
