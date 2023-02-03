import React from "react"
import { random } from "./utils"

const Eyes = ({ x, y }) => {
    const randomNumber1 = random(-10, 10) / 10
    const randomNumber2 = random(-6, 10) / 3

    return (
        <>
            <path
                d={[
                    "M", x + 38.3, y + 26,
                    "q", 2, -2.8, 4.8, -0.7 + (randomNumber1 * randomNumber2),
                ].join(" ")}
                strokeWidth={1.4}
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />

            <path
                d={[
                    "M", x + 59.4, y + 24,
                    "q", -2.8, -2.4, -5, 0.2 + (randomNumber1 * randomNumber2),
                ].join(" ")}
                strokeWidth={1.4}
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />

            <circle
                cx={x + 40.9 + randomNumber1}
                cy={y + 30.9}
                r={1.8}
                fill='black'
                stroke="black"
                strokeWidth={0.25}
            />

            <circle
                cx={x + 56.8 + randomNumber1}
                cy={y + 29.9}
                r={1.8}
                fill='black'
                stroke="black"
                strokeWidth={0.25}
            />
        </>
    )
}

export default Eyes
