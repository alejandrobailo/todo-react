import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import allColors from './styles/colors'
import FormTask from './components/FormTask'

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
    }

    handleChangeColor = (color) => {
        this.setState({ colorSelected: color })
    }

    render() {
        const { colorSelected } = this.state;

        return (
            <>
                <GlobalSyle />
                <h1>To do list</h1>
                <FormTask
                    colorSelected={colorSelected}
                    handleChangeColor={this.handleChangeColor}
                    handleSubmit={this.handleSubmit}
                />
            </>

        )
    }
}

export default App;