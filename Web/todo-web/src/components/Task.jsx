import React, { useEffect, useState } from 'react';
import api from '../api';

const Task = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        api.get("/api/tasks")
            .then(response => setTasks(response.data))
            .catch(error => console.error("There was an error fetching the tasks!", error));
    }, []);

    useState(() => {
        api.get("/api/tasks")                               // invocando o métask "get" do axios utilizando a URL base instanciada em "api.js"
        .then(response => setTasks(response.data))
        .catch(error => console.error("There was an error fetching the tasks!", error));
    })

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
            <h1>To-Do List - No Netfily</h1>
            <input 
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                placeholder="Add new task"
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default Task;