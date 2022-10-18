import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CardPoke = ({ url }) => {
  
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);
 
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`);
  };
  return (
       
    <article className={`card__principal ${pokemon?.types[0].type.name}`}   onClick={handleClick}>
      <header className="card__poke-img">
        <img
          className="img__carpoke"
          src={pokemon?.sprites.other["official-artwork"].front_default}
        />
      </header>
      <section>
        <h3>{pokemon?.name}</h3>
          <p>type</p>
        <ul className="card__poke_type">
          {pokemon?.types.map((type) => (
            <li key={type.slot}>{type.type.name}</li>
            ))}
        </ul>
      </section>
      <ul className="card__list_skllis">
        {pokemon?.stats.map((stat) => (
          <li className="list__stat" key={stat.stat.name}>
            <span>{stat.stat.name} : </span>
            <span> {stat.base_stat}</span>
          </li>
        ))}
      </ul>
    </article>
  
  );
};

export default CardPoke;
