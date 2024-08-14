import React, { useLayoutEffect, useRef, useState } from 'react'

export const PokemonCard = ( { id, name, sprites = [] } ) => {

  const divRef = useRef();

  const [boxSize, setBoxSize] = useState({
    width:  0, 
    height: 0
  });

  useLayoutEffect(() => {
    // console.log(divRef.current.getBoundingClientRect());
    const {width, height} = divRef.current.getBoundingClientRect();
    setBoxSize({
      width:  width, 
      height: height
    })
  }, [id])

  return (
    <section style={{ height:200 } }>
        <h2 className='text-capitalize'>#{ id ?? '' } - { name ?? '' }</h2>

       <div ref = { divRef }>
       {
        sprites.map(sprite => (
            <img key={sprite} src={sprite} alt={name} />
        ))
       }
       </div>
       <p>Box size: { boxSize.width } x { boxSize.height }</p>

        {/* imagenes */}
        <div></div>
    </section>
  )
}
