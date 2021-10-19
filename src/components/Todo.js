import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { RiCloseCircleLine } from 'react-icons/ri' 
import { TiEdit } from 'react-icons/ti' 


function Todo({todos,removeTodo, updateTodo}) {

    const [edit,setEdit] = useState({
        id:null,
        value:''
    })

    const SubmitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={SubmitUpdate} />  
    }


    return todos.map((todo,index) => (
        <div className='todo-row'>
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
                <TiEdit 
                onClick=
                {() => setEdit({id: todo.id, value: todo.text})} 
                className="edit-icon"
                data-testid="edit-icon"
                />
        
            </div>
        </div>
    ))
    
}

export default Todo
