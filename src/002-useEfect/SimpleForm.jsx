import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        username: 'fran', 
        email: 'fran@google.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect(
        () => { 
            // console.log('mounted called') 
        }, 
        []
    );

    useEffect(
        () => { 
            // console.log('formState called') 
        }, 
        [formState]
    );

    useEffect(
        () => { 
            // console.log('email called') 
        }, 
        [email]
    );



    
  return (
   <>
    <h1>Simple Form</h1>
    <hr />
    <input onChange={ onInputChange } value={ username }  type="text" className='form-control' placeholder='User name' name='username' />
    <input onChange={ onInputChange } value={ email }     type="email" className='form-control mt-2' placeholder='fran@google.com' name='email' />
    {
        (username === 'fran1') && <Message />

    }
   </>
  )
}
