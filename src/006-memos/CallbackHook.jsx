import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

   const incrementFather = useCallback(
      (incrementValue) => {
        setCounter( (value) => value + incrementValue );
      },
      [],
    )

  return (
    <>
        <h1>useCallBack Hook: { counter } </h1>
        <hr />
        <ShowIncrement increment={ incrementFather } />
    </>
  )
}
