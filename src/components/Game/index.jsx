/* eslint-disable react/prop-types */

import { cloneElement } from "react"
import { Children } from "react"

function Game({ children, currentQuestion, questions, arrow, setShowQuestion }) {
    return(
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center relative font-sans text-4xl">
                { Children.toArray(children.map(child => cloneElement(child, { currentQuestion, questions, arrow, setShowQuestion }))) }
            </div>
        </>
    )
}

export { Game }