import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from './pokedex/CardPoke'
import InputSearch from './pokedex/InputSearch'
import Pagination from './pokedex/Pagination'
import SelectByType from './pokedex/SelectByType'
import stylesCardPoke from "./styles/stylesCardPoke.css";

const Pokedex = () => {
  const userName =  useSelector(state =>state.userName)
 const[pokemons ,setPokemons] = useState()
 const[typeSelected, setTypeSelected] = useState('All Pokemons')
  useEffect(() => {
    if (typeSelected !== 'All Pokemons') {
      axios.get(typeSelected)
      .then(res=> {
        
        const result = res.data.pokemon.map( e => e.pokemon)
        setPokemons(result)
      })
       .catch(err => console.log(err))
    }else{

      const baseURL ='https://pokeapi.co/api/v2/pokemon?limit=50000offset=0'
      axios.get(baseURL)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
    }
    }, [typeSelected])
  console.log(pokemons);
  
  const [page, setPage] = useState(10)
  const [pokePerPage, setPokePerPage] = useState(8)
  const initialPoke = (page - 1) * pokePerPage
  const finalPoke =  page * pokePerPage  
  
  return (
    <div>
        <header>

            <h1>pokedex</h1>
            <p>welcome <span>{userName}</span></p>
        
        </header>
        <aside>
      <InputSearch />
      <Pagination
        setPage={setPage}
        page={page}
        pagesLength={pokemons && Math.ceil(pokemons?.length /pokePerPage)}
      />
      <SelectByType  setTypeSelected={setTypeSelected}/>
     </aside>
      <main>
        <div className="card-container">
          {
            pokemons?.slice(initialPoke , finalPoke).map(pokemon =>(
              <CardPoke 
              key={pokemon.url} 
              url={pokemon.url}
              />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default Pokedex