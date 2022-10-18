import React from "react";
import FormHome from "./FormHome";
import styleHome from "../styles/stylesHome.css";

const Home = () => {
  return (
    <div className="home__pokedex">
      
      <div className="cart_inicio">
        <img className="img__pokedex" src="/img/pokedexlogo.png" alt="" />
        <h2 className="poquedex__subtitle"> Hi trener</h2>
        <p className="pokedex__text">hello trainer ready to catch all the pokemons</p>
        <FormHome />
      </div>
      </div>
   
  );
};

export default Home;
