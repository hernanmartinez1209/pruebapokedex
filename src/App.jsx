
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexById from './pages/PokedexById'


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
