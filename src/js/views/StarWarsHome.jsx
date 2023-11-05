import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
//import "/Charapters.jsx"
import { Characters } from "./Characters.jsx";

import { Context } from "../store/appContext";

import "../../styles/StarWarsHome.css";

export const StarWarsHome = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();


  return (
    <div className="container-fluid">
      <h1>HomePage</h1>

      <div className="">

        <Characters />
      </div>
    </div>

  )
}