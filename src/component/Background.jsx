import React from "react"
import * as d3 from "d3"
import { random } from "./utils"

const Background = () => (
    <>

        <g transform="translate(100, -45)">
            <circle cx="50" cy="50" r="17" fill="#F9E79F" stroke="#000" strokeWidth={0.4} />
        </g>

        <g transform="translate(20, 68)">
            {[...Array(4)].map((_, i) => (
                <path d={[
                    "M", random(-100, 0), 0,
                    "q", random(20, 80), random(-30, -120),
                    random(50, 120), 0,
                    "z"
                ].join(" ")}
                    fill={d3.scaleOrdinal()
                        .domain([0, 1, 2, 3])
                        .range(["#a8ada0", "#a8caba", "#a8ada0", "#9db1a0"])(i)}
                    stroke="#000"
                    strokeWidth={0.25}
                />
            ))}
        </g>

        <g transform="translate(-80, -2)">
            <rect x="0" y="69" width="260" height="100%" fill="#D0C599" stroke="#000" strokeWidth={0.4} />
        </g>
    </>
)

export default Background
