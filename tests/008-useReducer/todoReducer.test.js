import { todoReducer } from "../../src/008-useReducer/todoReducer";

describe('Test on todoReducer', () => { 
    
    const initialState = [{
        id: 1, 
        description: 'demo todo', 
        done: false,
    }];



    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should to return the initial state', () => {  
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
     });

     test('should to add a new todo', () => { 
        const action = {
            type: 'ADD', 
            payload: {
                id:2, 
                description: 'New TODO', 
                done: false
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
      });

      test('should to remove a todo', () => { 
        const action = {
            type: 'DELETE', 
            payload: {
                id:1, 
                description: 'New TODO', 
                done: false
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);

       });

      test('should to update a todo', () => { 
        
        const action = {
            type: 'TOGGLE', 
            payload: {
                id:1, 
                description: 'demo todo', 
                done: false
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
        

        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBe(false);


       });



 });