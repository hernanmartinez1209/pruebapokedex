import React from 'react'
import FormHome from '../components/home/FormHome'


const Home = () => {
  return (
    <article className='pokedex' >
      <img className='pokedex__img' src="./public/images/home/pokedex.png" alt="" />
      <h2 className='poquedex__subtitle'>Hi trainer</h2>
      <p className='pokedex__text'>Give me your name to see the pokedex</p>
      <FormHome />
    </article>
  )
}

export default Home