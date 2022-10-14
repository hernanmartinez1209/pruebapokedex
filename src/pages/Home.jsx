import React from 'react'
import FormHome from '../components/home/FormHome'

const Home = () => {
  return (
    <article className='pokedex' >
      <img className='pokedex__img' src="./public/images/home/pokedex.png" alt="" />
    <h1 className='pokedex__tilte'> pokedex</h1>
    <h2 className='poquedex__subtitle'> hi trener</h2>
    <p className='pokedex__text'>parrrafo parrafo</p>
   <FormHome />
    </article>
  )
}

export default Home