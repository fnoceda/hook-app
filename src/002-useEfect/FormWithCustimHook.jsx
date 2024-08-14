import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustimHook = () => {

    const {
        formState, onInputChange, onResetForm, 
        username, email, password,

    } = useForm({
        username:'', 
        email: '', 
        password: ''
       }
    );

    // const {username, email, password} = formState;

    
  return (
   <>
    <h1>Form With Custom Hook</h1>
    <hr />
    <input onChange={ onInputChange } value={ username }  type="text" className='form-control' placeholder='User name' name='username' />
    <input onChange={ onInputChange } value={ email }     type="email" className='form-control mt-2' placeholder='fran@google.com' name='email' />
    <input onChange={ onInputChange } value={ password }  type="password" className='form-control mt-2' placeholder='******' name='password' />
    <button onClick={ onResetForm } className='btn btn-secondary mt-2'>Reset</button>
    {
        (username === 'fran1') && <Message />

    }
   </>
  )
}
