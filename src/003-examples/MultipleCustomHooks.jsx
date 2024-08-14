import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";


export const MultipleCustomHooks = () => {

    const {counter, decrement, increment} = useCounter(1);
    const {data, isLoading, hasError, error} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    // console.log(data?.id);
    // console.log(data?.name);

  return (
    <>
        <h1>Pokemon's Info </h1>

        <hr />
        
        { 
            isLoading 
            ?  <LoadingMessage /> 
            : <PokemonCard 
                id={ data?.id } 
                name={ data?.name } 
                sprites = { [ 
                                data.sprites.front_default,  
                                data.sprites.front_shiny,  
                                data.sprites.back_default, 
                                data.sprites.back_shiny, 
                            ] } />
        }
        
        {/* <pre>{ JSON.stringify(data, null, 2) }</pre> */}


        <button onClick={ () => counter > 1 ? decrement() : null } className="btn btn-primary mt-2">Anterior</button>
        <button onClick={ () => increment() } className="btn btn-primary mt-2">Siguiente</button>

    </>
  )
}
