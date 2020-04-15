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

    render() {

        return (
            <>
                <GlobalSyle />
                <h1>To do list</h1>
                <FormTask></FormTask>
            </>

        )
    }
}

export default App;