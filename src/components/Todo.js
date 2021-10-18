import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { RiCloseCircleLine } from 'react-icons/ri' 


function Todo({todos,removeTodo}) {

    const [edit,setEdit] = useState({
        id:null,
        value:''
    })
    return todos.map((todo,index) => (
        <div>
            <div key={todo.id}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                onClick=
                {() => removeTodo(todo.id)} 
                className="delete-icon"
                data-testid="delete-icon"
                />
        
            </div>
        </div>
    ))
    
}

export default Todo
