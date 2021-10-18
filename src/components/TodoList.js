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

    const updateTodo = (todoId, newValue ) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        } 

        setTodos(prev => prev.map(item => (item.id ===todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

   

    return (
        <div>
        <TodoForm onSubmit = {addTodo} />
        <Todo todos={todos} 
        removeTodo = {removeTodo}
        updateTodo = {updateTodo}
        />
        </div>
    )
}

export default TodoList
