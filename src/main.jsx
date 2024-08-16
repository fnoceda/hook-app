import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// import { StrictMode } from 'react'

// import { Memorize } from './006-memos/Memorize'
// import { MemoHook } from './006-memos/MemoHook'
// import { FormWithCustimHook } from './002-useEfect/FormWithCustimHook'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './001-useState/CounterApp'
// import { CounterWithCustomHook } from './001-useState/CounterWithCustomHook'
// import { SimpleForm } from './002-useEfect/SimpleForm'
// import { MultipleCustomHooks } from './003-examples/MultipleCustomHooks'
// import { FocusScreen } from './004-useRef/FocusScreen'
// import { Layout } from './005-useLayoutEffect/Layout'
// import { CallbackHook } from './006-memos/CallbackHook'
// import { Padre } from './007-tarea-memo/Padre'
// import { TodoApp } from './008-useReducer/TodoApp'
import { MainApp } from './009-useContext/mainApp'
// import './008-useReducer/intro-reducer'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MainApp />
    </BrowserRouter>
)
 