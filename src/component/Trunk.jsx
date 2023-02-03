import React from "react"

const Trunk = ({x, y, randomNumber}) => {
    return (
        <>
            <g stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#ccc">
                <path
                    d={[
                        `M ${38 + x},${40 + y}`,
                        `Q`,
                        `${40 + x},${55 + y}`,
                        `${46 + x},${60 + y}`,
                        `c`,
                        `${randomNumber},${randomNumber}`,
                        `${randomNumber * 2},${randomNumber * 1.2}`,
                        `${randomNumber * 3},${randomNumber * 1}`,
                        `q`,
                        `${randomNumber * 2.4},${randomNumber * -0.5}`,
                        `${randomNumber * 3},${randomNumber * -2}`,
                        `q`,
                        `6, -8`,
                        `5, -13`,
                        `q`,
                        `-3, 2`,
                        `-9, 0`,
                        `C`,
                        `${59 + (randomNumber * 4) + x},${40 + (randomNumber * 2.3) + y}`,
                        `${59 + (randomNumber * -0.5) + x},${40 + (randomNumber * 2.9) + y}`,
                        `${59 + x}, ${40 + y}`,
                    ].join(" ")}
                />
            </g>
        </>
    )
}

export default Trunk
