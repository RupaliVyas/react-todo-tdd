import React from 'react'

function TodoForm() {
    return (
        <div>
            <input type='text' data-testid='inputItem'></input>
            <button type="submit" data-testid='addButton'>Add To do</button>
        </div>
    )
}

export default TodoForm
