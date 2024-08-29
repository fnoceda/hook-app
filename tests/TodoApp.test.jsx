import { render, screen } from "@testing-library/react"
import { TodoApp } from "../src/008-useReducer/TodoApp";
import { useTodos } from "../src/hooks/useTodos";

jest.mock('../src/hooks/useTodos');


describe('Test on <TodoApp />', () => { 
    const todos = [
        {
            id: 1, 
            description: 'Todo 1', 
            done: false, 
        }, 
        {
            id: 2, 
            description: 'Todo 2', 
            done: true, 
        }
    ];
    useTodos.mockReturnValue({
        todos, 
        todosCount: todos.length, 
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn(), 
    });

    test('should show the component', () => { 
        render( <TodoApp/> );
        
        expect(screen.getByText('Todo 1')).toBeTruthy();
        expect(screen.getByText('Todo 2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();

     })

 })