import React, { useRef } from 'react'

function Now() {

    const headingRef = useRef(null)
    console.log("Hello");

    const changeText = () => {
        headingRef.current.textContent = "Hello React"
    }
    return (
        <>
            <h2 ref={headingRef} > Now</h2>
            <button onClick={changeText}> Change heading </button>

        </>
    )
}

export default Now