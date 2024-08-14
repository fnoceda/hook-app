

const initialState = [
    {
        id:1, 
        todo: 'Recolectar la piedra del Alma', 
        done: false,
    }
];


const todoReducer = ( state = initialState, action = {} ) => {

    if( action.type == '[TODO] add todo' ) {
        return [...initialState, action.payload];
    }
       

    return state;
};

let todos = todoReducer();
console.log( { state: todos } );


const newTodo = {
    id:1, 
    todo: 'Recolectar la piedra del Poder', 
    done: false,
};

const addTodoAction = {
    type: '[TODO] add todo', 
    payload: newTodo, 
};


todos = todoReducer(todos, addTodoAction);

console.log( {state: todos} );
