import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';





function TodoList() {

    const [todos, setTodos] = useState([])

    function addTodo(todo) {
        if(!todo.text || /^\s*$/.test(todo.text)) {
           
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)

        console.log(...todos);
    }


    return (
        <div>
        <TodoForm onSubmit = {addTodo} />
        <Todo todos={todos} />
        </div>
    )
}

export default TodoList
