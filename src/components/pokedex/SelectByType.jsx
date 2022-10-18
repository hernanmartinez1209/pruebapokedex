import axios from "axios";
import React, { useEffect, useState } from "react";
import CardPoke from "./CardPoke";

const SelectByType = ({ setTypeSelected }) => {
  const [types, setTypes] = useState();
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/type`;
    axios
      .get(url)
      .then((res) => setTypes(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  // console.log(types);

  const handleChange = (e) => {
    e.preventDefault;
    setTypeSelected(e.target.value);
  };
  return (
    <div className="select__pokedex">
    <select onChange={handleChange}>
      <option value="All Pokemons"> all pokemons</option>
      {types?.map((type) => (
        <option key={type.url} value={type.url}>
          {type.name}
        </option>
      ))}
      <CardPoke types={types} />
    </select>
    </div>
  );
};

export default SelectByType;
