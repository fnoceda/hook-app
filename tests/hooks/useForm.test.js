import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Test on useForm', () => { 

    const initialForm = {
        name: 'Francisco', 
        email: 'fnoceda83@gmail.com'
    };


    test('should to return the default info', () => { 
        const { result } =  renderHook(() => useForm(initialForm));
        expect(result.current).toEqual(
            {
                name:           initialForm.name,
                email:          initialForm.email,
                formState:      initialForm,
                onInputChange:  expect.any(Function),
                onResetForm:    expect.any(Function), 
            }
        );
    });

    test('should be change the name', () => { 
        const { result } =  renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        act(()=>{
            onInputChange({ target: { name: 'name', value: 'Juan' } });
        });
        expect(result.current.name).toBe('Juan');
    });

    test('should be reset the name', () => { 
        const { result } =  renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;
        act(()=>{
            onInputChange({ target: { name: 'name', value: 'Juan' } });
        });
        expect(result.current.name).toBe('Juan');
        act(()=>{
            onResetForm();
        });
        expect(result.current.name).toBe('Francisco');
        expect(result.current.formState.name).toBe('Francisco');

    });


 });