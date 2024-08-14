import React, { useEffect, useState } from 'react'



export const Message = () => {


    useEffect(() => {

        const onMouseMove = ({x, y}) =>{
            const cords = {x, y};
            console.log(cords)
        }

      window.addEventListener('mousemove', onMouseMove)
    
      return () => {
        window.removeEventListener('mousemove', onMouseMove)
      }
    }, [])
    


  return (
    <>
    <h3 className="alert alert-danger mt-2">Usuario ya exste</h3>
    </>

)
}
