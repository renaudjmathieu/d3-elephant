import * as React from 'react'
import Background from "./component/Background"
import Elephant from "./component/Elephant"

const App = () => {
    return (
        <>
            <main>
                <svg width="40em" viewBox={'0 0 100 100'} style={{ overflow: 'visible' }}>
                    <Background />
                    <Elephant />
                </svg>
            </main>

            <style>
                {`
                main {
                    font-family: sans-serif;
                    text-align: center;
                    Background: #ceeaf3;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }
                `}
            </style>
        </>
    );
}

export default App;