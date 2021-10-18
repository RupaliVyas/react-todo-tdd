import React, {useState} from 'react'


function TodoForm() {

    const [input, setInput] = useState('')

    const handleSubmit = e => {
        setInput('')
    }


    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
            <input className="todo-input" type='text' data-testid='inputItem'></input>
            <button className="todo-submit" type="submit" data-testid='addButton'>Add To do</button>
            </form>
        </div>
    )
}

export default TodoForm
