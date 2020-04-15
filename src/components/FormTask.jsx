import React from 'react'
import styled from 'styled-components'
import allColors from '../styles/colors'
import ColorBox from './ColorBox'
import { generate as id } from 'shortid'

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${allColors.mainColor};
    background-color: transparent;
    outline: none;
    color: ${allColors.mainColor};
`
const Button = styled.button`
    background-color: transparent;
    border: 1px solid ${allColors.mainColor};
    color: ${allColors.mainColor};
    cursor: pointer;
    border-radius: 5px;
    padding: .3rem .5rem;
    outline: none;

    &:hover{
        background-color: ${allColors.mainColor};
        color: #222;
    }
`

const ColorsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    margin: 0 auto .5rem;
`

const FormTask = ({ handleChangeColor, handleSubmit, colorSelected }) => (
    <form onSubmit={handleSubmit}>
        <Input name="title" type="text" />
        <ColorsContainer>
            {
                allColors.colors.map(color => (
                    <ColorBox
                        key={id()}
                        handleChangeColor={handleChangeColor}
                        color={color}
                        isChecked={colorSelected === color}
                    />
                ))
            }
        </ColorsContainer>
        <Button>add task</Button>
    </form>
)

export default FormTask;