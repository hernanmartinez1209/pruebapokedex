
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Pokedex from './components/Pokedex'
import PokedexById from './components/PokedexById'

function App() {


  return (
    <div className="App">
 
     <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/pokedex' element={<Pokedex />} />
      <Route path='/pokedex/:id' element={<PokedexById /> } />
     </Routes>
    </div>
  )
}

export default App
