import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InputSearch from './pokedex/InputSearch'
import Pokemon404 from './pokedex/Pokemon404'

const PokedexById = () => {
 const {id} =  useParams()

 const[pokemon , setPokemon] =useState()
 const[hasError ,setHasErro] =useState()
//  const[ubication , setUbication] =useState()

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

//  //setUbication(pokemon?.location_area_encounters)
//  useEffect(() => {
//   const url = 'https://pokeapi.co/api/v2/pokemon/3/encounters'
//   axios.get(url)
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err))


//  }, [])
// // console.log(setUbication);
// // console.log(pokemon?.location_area_encounters);
console.log(pokemon);

  return (
    <article>
     <header>
     <img src={pokemon?.sprites.other['official-artwork'].front_default} />
        
     </header>
     
     <section>
      <h2>{pokemon?.name}</h2>
      <p>Height:<span>{pokemon?.height}</span></p>
      <p>Weight:<span>{pokemon?.weight}</span></p>
      <hr />
      <p>#<span>{pokemon?.id}</span></p>
     </section>
    
     <section>
       <h2>Type</h2>
       <ul className="card__poke_type">
          {pokemon?.types.map((type) => (
            <li key={type.slot}>{type.type.name}</li>
            ))}
            </ul>
    </section>
     <section>
      <h2>Abilities</h2>
            <ul className="card__poke_abilitie">
            {pokemon?.abilities.map((abilitie) => (
            <li key={abilitie.slot}>{abilitie.ability.name}</li>
            ))}
            </ul>
     </section>
     <section>
      <h2>stats</h2>
      <ul className="card__poke_stat">
            {pokemon?.stats.map((stat) => (
            <li key={stat.stat.url}>{stat.stat.name} <span>{stat.base_stat}</span></li>
            ))}
            </ul>
     </section>
     <section>
      <h2>Movements</h2>
     <ul className="card__poke_move">
            {pokemon?.moves.map((move) => (
            <li key={move.slot}>{move.move.name}</li>
            ))}
            </ul>
     </section>

    </article>
  )
}

export default PokedexById