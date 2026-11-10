import React, { useRef, useState } from 'react'

function Form() {

    const [name, setName] = useState("");
    const inputRef = useRef()
    console.log("Component Re-rendering...")

    const handleSubmit = (e) => {
        e.preventDefault()
        setName(inputRef.current.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your message' ref={inputRef} />
            <button type='submit'>Submit</button>
            <h2> {name}</h2>
        </form>
    )
}

export default Form;