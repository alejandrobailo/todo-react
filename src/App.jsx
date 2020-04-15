import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { generate as id } from 'shortid'
import allColors from './styles/colors'
import FormTask from './components/FormTask'
import Task from './components/Task'

const GlobalSyle = createGlobalStyle`
    body{
        font-family: Helvetica, sans-serif;
        background-color: #222;
        color:${allColors.mainColor};
        text-align: center;
        margin:0;
    }
`

const App = () => {

    const [colorSelected, setColorSelected] = useState(allColors.colors[0]);
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.title.value.trim() !== '') {
            createNewTask(e.target.title.value);
            e.target.title.value = '';
        }
    }

    const createNewTask = (title) => {
        const newTask = {
            id: id(),
            title,
            color: colorSelected,
            done: false
        }
        const allTasks = [...tasks, newTask];
        setTasks(allTasks);
    }

    const handleCompleteTask = (id) => {
        const currentTasks = [...tasks];
        const task = tasks.find(task => task.id === id);
        const index = currentTasks.indexOf(task);
        currentTasks[index].done = !currentTasks[index].done;
        setTasks(currentTasks);
    }

    const handleChangeColor = (color) => {
        setColorSelected(color);
    }

    const handleDeleteTask = (id) => {
        let currentTasks = tasks;
        currentTasks = currentTasks.filter(task => task.id !== id);
        setTasks(currentTasks);
    }

    return (
        <>
            <GlobalSyle />
            <h1>To do list</h1>
            <FormTask
                colorSelected={colorSelected}
                handleChangeColor={handleChangeColor}
                handleSubmit={handleSubmit}
            />
            {tasks.length === 0 && <p>Not tasks yet</p>}
            {
                tasks.map(task => (
                    <Task
                        title={task.title}
                        color={task.color}
                        key={id()}
                        done={task.done}
                        handleCompleteTask={() => handleCompleteTask(task.id)}
                        handleDeleteTask={() => handleDeleteTask(task.id)}
                    />
                ))
            }
        </>
    )
}

export default App;