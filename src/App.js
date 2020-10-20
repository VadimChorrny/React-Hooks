import React, { useState } from 'react'

function App() {

    const [state, setState] = useState([])
    const [input, setInput] = useState('')

    function handleClick() {
        setState([...state, input])
    }
    function handleInput(event) {
        setInput(event.target.value)
    }

    return (
        <div>
            <input value={input} onChange={handleInput} />
            <button onClick={handleClick} className="btn btn-success" > Добавить </button>
            {
                state.map((name, index) => <p key={index} >{name}</p>)
            }
        </div>
    )
}

export default App
