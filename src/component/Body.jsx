import React from "react"

const Body = () => (
    <>
        <path
            d={[
                "M", 18, 38.5,
                "q", -6, 46, 9, 58,
                "q", 4, 1, 11, -2,
                "q", 6, -3, 2, -12,
                "l", 0, -45,
                "l", -20, 0,
            ].join(" ")}
            strokeWidth={1.5}
            stroke="black"
            fill="white"
        />

        <path
            d={[
                "M", 56.86, 91,
                "c", -8, -10, 6, -9, -8, -26,
                "l", 24, 6,
            ].join(" ")}
            strokeWidth={1.5}
            stroke="black"
            fill="white"
        />

        <path
            d={[
                "M", 32, 37,
                "c", -7, 15, 0, 44, 5, 58,
                "q", 4, 2, 11, -2,
                "q", 4, -6, 0, -16,
                "c", -8, -18, 16, -8, 9, 14,
                "q", 16, 11, 20, -9,
                "c", -3, -14, 8, -12, 0, -45,
                "q", -20, -10, -40, -12,
            ].join(" ")}
            strokeWidth={1.5}
            stroke="black"
            fill="#666"
        />
    </>
)

export default Body
