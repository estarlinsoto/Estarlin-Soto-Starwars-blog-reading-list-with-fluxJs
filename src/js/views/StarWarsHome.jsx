import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Characters } from "./Characters.jsx";

import { Context } from "../store/appContext";

import "../../styles/StarWarsHome.css";


export const StarWarsHome = () => {
  const [page, setPage] = useState()
  const { store, actions } = useContext(Context);
  const params = useParams();


  return (
    <div className="container-fluid">
      <div className="charactersContainer">
        <Characters />
      </div>

    </div>

  )
}