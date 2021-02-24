import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'
import Styles from './Styles'

const theme = (() => ({
    base: {
        main: '#000000'
    },
    text: {
        main: "#FFFFFF"
    }
}))()

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Styles />
        <App />
    </ThemeProvider>,
    document.getElementById("root")
)