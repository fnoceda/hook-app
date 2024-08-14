import { useEffect, useReducer } from "react"
import { todoReducer } from "../008-useReducer/todoReducer";


export const useTodos = () => {
  
    
    const initialState = [];

    const init = () => {
        return JSON.parse( localStorage.getItem('todos') ) || [];
    };

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) || []);
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {type: 'ADD', payload: todo};
        dispatch(action);
    };

    const handleDeleteTodo = ( todo ) => {
        const action = {type: 'DELETE', payload: todo};
        dispatch(action);
    };

    const handleToggleTodo = ( todo ) =>{
        const action = {type: 'TOGGLE', payload: todo};
        dispatch(action);
    };

    return {
        todos, 
        todosCount: todos.length, 
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo, 
        handleDeleteTodo, 
        handleToggleTodo, 
    };

}
