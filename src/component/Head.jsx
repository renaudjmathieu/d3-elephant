import React from "react"
import { random } from "./utils"
import Trunk from "./Trunk"
import Ears from "./Ears"
import Eyes from "./Eyes"

const Head = () => {
    const [x, setX] = React.useState(0)
    const [y, setY] = React.useState(0)
    const [trunkRandomNumber, setTrunkRandomNumber] = React.useState(random(5, 12))

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() < 0.5) {
                const angle = random(0, 360)
                const radius = random(0, 4)
                const newX = radius * Math.cos(angle)
                const newY = radius * Math.sin(angle)
                setX(newX)
                setY(newY)
            }

            if (Math.random() < 0.33) {
                setTrunkRandomNumber(random(5, 12))
            }
        }, 1500)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <Ears x={x} y={y} />

            <circle
                cx={x + 48}
                cy={y + 23.6}
                r={20.4}
                fill='none'
                stroke="black"
                strokeWidth={2}
            />

            <Trunk y={y} x={x} randomNumber={trunkRandomNumber} />

            <circle
                cx={x + 48}
                cy={y + 23.6}
                r={20}
                fill='#ccc'
                stroke="none"
                strokeWidth={2}
            />

            <Eyes x={x} y={y} />

            <path
                d={[
                    "M", x + 45.6, y + 41.6,
                    "q", 3.8, -3.2, 7, -0.1,
                ].join(" ")}
                strokeWidth={1.4}
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />

            <style>
                {`
                circle,
                path {
                    transition: all ${random(5, 15) / 10}s ease-out;
                }
                linearGradient,
                stop {
                    transition: all 0.3s ease-out;
                }
                `}
            </style>
        </>
    )
}

export default Head
