import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { seed } from "./component/utils"

window.onclick = () => {
    seed = Math.floor((new Date().getTime() + Math.random() * 1000000000000) / 10000000)
    render()
    console.log(seed)
}

const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

render()