import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


function Todo({todos}) {

    const [edit,setEdit] = useState({
        id:null,
        value:''
    })
    return todos.map((todo,index) => (
        <div>
            <div key={todo.id}>
                {todo.text}
            </div>
        </div>
    ))
    
}

export default Todo
