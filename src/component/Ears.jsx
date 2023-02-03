import React from "react"
import { random } from "./utils"

const Ears = ({ x, y }) => {
    const randomNumber1 = random(-10, 10) / 10
    const randomNumber2 = random(-10, 10) / 5
    const randomNumber3 = random(-10, 10) / 10
    const randomNumber4 = random(-10, 4) / 3

    return (
        <>
            <path
                d={[
                    "M", 35 + x, 8 + y,
                    "c", -6, -20, -20, 12, `${-32 + randomNumber1},${9 + randomNumber2}`,
                    "q", -6, 13, 8, 21,
                    "q", 2, 6, 6, 7,
                    "l", 8, 2,
                    "q", 6, 2, 12, -9,
                ].join(" ")}
                strokeWidth={1.5}
                stroke="black"
                fill="white"
            />

            <path
                d={[
                    "M", 63 + x, 10 + y,
                    "c", 22, -14, `${17 + randomNumber3},${10 + randomNumber4}`, `${35 + randomNumber1},${16 + randomNumber2}`,
                    "q", 2, 12, -10, 15,
                    "q", -2, 3, -5, 4,
                    "l", -12, 2,
                    "q", -6, 0, -11, -10,

                ].join(" ")}
                strokeWidth={1.5}
                stroke="black"
                fill="white"
            />
        </>
    )
}

export default Ears
