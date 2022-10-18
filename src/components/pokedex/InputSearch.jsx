import React from 'react'
import { useNavigate } from 'react-router-dom'

const InputSearch = () => {
   const navigate = useNavigate()
 const submit = e =>{
    e.prevendefaul
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
 }
 
    return (
    <form className='form__pokedex' onSubmit={submit} >
        <input  className='input__pokedex-ini' id='search' type="text" placeholder='busca tu pokemon' />
        <button className='btn__input'>buscar</button>
        </form>
  )
}

export default InputSearch