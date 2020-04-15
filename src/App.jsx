import React, { Component } from 'react'
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

class App extends Component {

    state = {
        colorSelected: allColors.colors[0],
        tasks: [
            {
                title: 'Aprender React',
                color: allColors.colors[0],
                done: false
            }
        ]
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.title.value.trim() !== '') {
            this.createNewTask(e.target.title.value);
            e.target.title.value = '';
        }
    }

    createNewTask = (title) => {
        const newTask = {
            id: id(),
            title,
            color: this.state.colorSelected,
            done: false
        }
        const allTasks = [...this.state.tasks, newTask]
        this.setState({ tasks: allTasks })
    }

    getTask = (id) => {
        const task = this.state.tasks.find(task => task.id === id);
        return task;
    }

    handleCompleteTask = (id) => {
        const currentTasks = this.state.tasks;
        const task = this.getTask(id);
        const index = currentTasks.indexOf(task);
        currentTasks[index].done = !currentTasks[index].done;
        this.setState({ tasks: currentTasks })
    }

    handleChangeColor = (color) => {
        this.setState({ colorSelected: color })
    }

    handleDeleteTask = (id) => {
        let currentTasks = this.state.tasks;
        currentTasks = currentTasks.filter(task => task.id !== id);
        this.setState({ tasks: currentTasks })
    }

    render() {
        const { colorSelected, tasks } = this.state;

        return (
            <>
                <GlobalSyle />
                <h1>To do list</h1>
                <FormTask
                    colorSelected={colorSelected}
                    handleChangeColor={this.handleChangeColor}
                    handleSubmit={this.handleSubmit}
                />
                {this.state.tasks.length === 0 && <h2>Not tasks yet</h2>}
                <div>
                    {
                        tasks.map(task => (
                            <Task
                                title={task.title}
                                color={task.color}
                                key={id()}
                                done={task.done}
                                handleCompleteTask={() => this.handleCompleteTask(task.id)}
                                handleDeleteTask={() => this.handleDeleteTask(task.id)}
                            />
                        ))
                    }
                </div>
            </>

        )
    }
}

export default App;