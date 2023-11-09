import React, { useState , useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/StarWarsHome.css";


export const StarWarsHome = () => {
  const [page, setPage] = useState()
  const { store, actions } = useContext(Context);
  const params = useParams();
 

  return (
    <div className="container-fluid">

      <div className="viewnsContainer"></div>
      <Link to={"/characters"}>
        <img src="https://starwars-visualguide.com/assets/img/categories/character.jpg" alt="CharsIMG" />
      </Link>


    </div>

  )
}