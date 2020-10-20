import React, { useState } from 'react'

function Use() {

    const [state, setState] = useState([])
    const [input, setInput] = useState('')

    function handleClick() {
        setState([...state, input])
    }
    function handleInput(event) {
        setInput(event.target.value);
    }
    return (
        <div>
            <input value={input} onChange={handleInput} />
            <button className="btn" onClick={handleClick}>Touch</button>
            <div>
                {state.map(function (el) { return <div>{el}</div> })}
            </div>
        </div>
    )
}

export default Use