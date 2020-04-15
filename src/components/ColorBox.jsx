import React from 'react';
import styled from 'styled-components'

const LabelColor = styled.label`
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-top: .5rem;
    background-color: #fff;
`

const InputRadio = styled.input`

`

const ColorBox = () => (
    <>
        <InputRadio type="radio" name="color"></InputRadio>
        <LabelColor></LabelColor>
    </>
)

export default ColorBox;