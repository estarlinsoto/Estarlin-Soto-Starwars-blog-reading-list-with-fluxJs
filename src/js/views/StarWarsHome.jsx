import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/StarWarsHome.css";

export const StarWarsHome = () => {
  const [page, setPage] = useState()
  const { store, actions } = useContext(Context);
  const params = useParams();
  

  return (
    <div className="container-fluid">
      <h1>HomePage</h1>

      <Link to={`/starwarshome/characters/${1}`} >
      <img src="https://starwars-visualguide.com/assets/img/categories/character.jpg" alt="" />
      </Link>

      <Link to={"/characters"} >
      <img src="https://starwars-visualguide.com/assets/img/categories/character.jpg" alt="" />
      </Link>

      <Link to={"/characters"} >
      <img src="https://starwars-visualguide.com/assets/img/categories/character.jpg" alt="" />
      </Link>

      



    </div>

  )
}