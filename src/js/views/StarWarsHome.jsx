import React, { useState , useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/StarWarsHome.css";


export const StarWarsHome = () => {
  const { store, actions } = useContext(Context);
  
 

  return (
    <div className="container-fluid">
     
    
      <div className="viewnsContainer">
      <Link to={"/characters"}>
        <img src="https://starwars-visualguide.com/assets/img/categories/character.jpg" alt="CharsIMG" />
      </Link>

      <Link to={"/Vehicles"}>
        <img src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" alt="VehiclesIMG" />
      </Link>

      
      <Link to={"/planets"}>
        <img src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" alt="PlanetsIMG" />
      </Link>
     
    </div>
    <div className="stars"></div>
    </div>

    

  )
}