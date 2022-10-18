import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InputSearch from './pokedex/InputSearch'
import Pokemon404 from './pokedex/Pokemon404'

const PokedexById = () => {
 const {id} =  useParams()

 const[pokemon , setPokemon] =useState()
 const[hasError ,setHasErro] =useState()

useEffect(() => {
   const url =`https://pokeapi.co/api/v2/pokemon/${id}/`
   
   axios.get(url)
   .then( res => setPokemon(res.data))
   .catch( err =>{
     console.log(err)
     setHasErro(true)
    }) 
    }, [])
if (hasError) {
  return <Pokemon404 />
  
}
console.log(pokemon);

  return (
    <article>
     <header>
     <img src={pokemon?.sprites.other['official-artwork'].front_default} />
        
     </header>
     
     <section>
      <h2>{pokemon?.name}</h2>
     </section>
    
    </article>
  )
}

export default PokedexById