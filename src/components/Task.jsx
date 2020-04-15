import React from 'react';
import styled from 'styled-components'

const TaskContainer = styled.div`
    display:grid;
    width: 100%;
    max-width: 250px;
    grid-template-columns: 30px 1fr 50px;
    align-items: center;
    justify-items: start;
    padding: 0 1rem;
    margin: 1rem auto;
    background-color: ${({ color }) => color};
    border-radius: 5px;
`

const TaskButton = styled.button`
    font-size: .8rem;
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: .3rem .5rem;
    border-radius: 10px;
    outline: none;
    cursor: pointer;

    &:hover{
        background-color: #fff;
        color: #222
    }
`

const TaskText = styled.p`
    font-size: .8rem;
    color: #fff;
    text-decoration: ${({ done }) => done ? 'line-through' : 'none'};
`

const Task = ({ color, title, done, handleCompleteTask, handleDeleteTask }) => (
    <TaskContainer color={color}>
        <input
            onChange={handleCompleteTask}
            type="checkbox"
            defaultChecked={done}
        />
        <TaskText done={done}>{title}</TaskText>
        <TaskButton onClick={handleDeleteTask}>Delete</TaskButton>
    </TaskContainer>
)

export default Task;