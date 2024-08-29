import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";


describe('Tests on useCounter', () => { 
    test('should to return the default values', () => { 
        const { result } =  renderHook( () => useCounter() );
        const {counter, increment, decrement, reset} = result.current;
        
        expect(counter).toBe(10);
        expect(increment).toEqual( expect.any( Function ) );
        expect(decrement).toEqual( expect.any( Function ) );
        expect(reset).toEqual( expect.any( Function ) );
     });

     test('should to return counter value on 100', () => { 
        const { result } =  renderHook( () => useCounter(100) );
        expect(result.current.counter).toBe(100);
     });


     test('should to increment counter value', () => { 
        const { result } =  renderHook( () => useCounter() );
        const { increment } = result.current;

        act(()=>{
            increment();
            increment(2);
        });
        expect(result.current.counter).toBe(13);
     });


     test('should to decrement counter value', () => { 
        const { result } =  renderHook( () => useCounter() );
        const { decrement } = result.current;

        act(()=>{
            decrement();
            decrement(2);
        });
        expect(result.current.counter).toBe(7);
     });

     test('should to reset counter value', () => { 
        const { result } =  renderHook( () => useCounter() );
        const { decrement, reset } = result.current;

        act(()=>{
            decrement();
            decrement(2);
        });
        expect(result.current.counter).toBe(7);

        act(() => {
            reset();
        });
        expect(result.current.counter).toBe(10);


     });

 });