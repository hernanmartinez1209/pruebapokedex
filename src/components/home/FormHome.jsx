import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserNameGlobal } from "../store/slices/username.slice";

const FormHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = e => {
    e.preventDefault();
    dispatch(setUserNameGlobal(e.target.firstChild.value.trim()));
    navigate("/pokedex");
  };
  return (
    <form onSubmit={submit} className="pokedex__form" id="form__poke">
      <input
        className="pokedex__input"
        type="text"
        placeholder="insert your name"
      />
      <button className="pokedex__btn">Catch them</button>
    </form>
  );
};

export default FormHome;
