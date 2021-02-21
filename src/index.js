import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
    <ThemeProvider theme={{}}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
)