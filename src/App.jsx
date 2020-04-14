import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'

import allColors from './styles/colors'

const GlobalSyle = createGlobalStyle`
    body{
        font-family:sans-serif;
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
            </>

        )
    }
}

export default App;