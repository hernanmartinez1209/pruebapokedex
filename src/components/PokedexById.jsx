import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InputSearch from './pokedex/InputSearch'
import Pokemon404 from './pokedex/Pokemon404'
import stylesPOkedexBiId from './styles/stylesPOkedexBiId.css'
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
    <article className='poke__card_principal' >
     <header className={`poke__container_img ${pokemon?.types[0].type.name}`}>
    
     <img className='img__poke-by-id' src={pokemon?.sprites.other['official-artwork'].front_default} />
        
     </header>
     
      <h2 className={`name__poke ${pokemon?.types[0].type.name} `}>{pokemon?.name}</h2>
     <section className='info__poke-card' >
      <div className='fuerza'>
      <p className='height__poke' >Height:<span>{pokemon?.height}</span></p>
      <p className='weight__poke'>Weight:<span>{pokemon?.weight}</span></p>
      </div>
      <hr />
     </section>
      <p className={`id__poke ${pokemon?.types[0].type.name} `} >#<span>{pokemon?.id}</span></p>
    
     <section className='type__poke'>
       <h2>Type</h2>
       <ul className="card__poke_type">
          {pokemon?.types.map((type) => (
            <li className='list__type' key={type.slot}>{type.type.name}</li>
            ))}
            </ul>
    </section>
     <section className='abilyts__poke'>
      <h2>Abilities</h2>
            <ul className="card__poke_abilitie">
            {pokemon?.abilities.map((abilitie) => (
            <li className='list__abilitys' key={abilitie.slot}>{abilitie.ability.name}</li>
            ))}
            </ul>
     </section>
     <section>
      <h2>stats</h2>
      <ul className="card__poke_stat">
            {pokemon?.stats.map((stat) => (
            <div>
            <li key={stat.stat.url}>{stat.stat.name} <span>{stat.base_stat}</span></li>
            <div className='barra'>
               <img  className='centro' src='https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG8lMjBkZSUyMGNvbG9yZXN8ZW58MHx8MHx8&w=1000&q=80' width={stat.base_stat} />
              
            </div>
            </div>
            ))}
            </ul>
     </section>
       <h2 className='title__move-poke' >Movements</h2>
     <section className='moves__poke'>
     <ul className="card__poke_move">
            {pokemon?.moves.map((move) => (
            <li className='list__move' key={move.slot}>{move.move.name}</li>
            ))}
            </ul>
     </section>

    </article>
  )
}

export default PokedexById