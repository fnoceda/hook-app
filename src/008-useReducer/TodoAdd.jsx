import { useCallback } from "react";
import { useForm } from "../hooks/useForm"
import { v4 as uuidv4 } from 'uuid';

 

export const TodoAdd = ({onNewTodo}) => {


    const descriptionInput = useCallback((inputElement) => {
        if (inputElement) {
          inputElement.focus();
        }
      }, []);

    const {
        formState, onInputChange, onResetForm, 
        description, 

    } = useForm( { description:'' } );

    const onSubmit = (event) => {
        event.preventDefault();
        if(description.length <= 1) return ;
        const newTodo = { 
            id: uuidv4(), 
            done: false, 
            description: description,  
        };
        onNewTodo(newTodo);
        onResetForm();
    };


  return (
   <>
        <form onSubmit={onSubmit}>
            <input 
                ref={ descriptionInput }
                onChange={ onInputChange } 
                value={ description } 
                name="description"
                type="text" 
                placeholder="Que hay que hacer?" 
                className="form-control"
            />
            <button
                type="submit"
                className="btn btn-primary mt-2"
            >
            Agregar
            </button>
        </form>
   </>
  )
}
