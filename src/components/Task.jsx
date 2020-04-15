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
`

const TaskButton = styled.button`

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