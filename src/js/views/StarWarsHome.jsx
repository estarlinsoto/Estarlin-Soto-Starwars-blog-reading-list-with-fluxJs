import React, { useState , useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/StarWarsHome.css";


export const StarWarsHome = () => {
  const { store, actions } = useContext(Context);
  
 

  return (
    <div className="container-fluid">
     
    
      <div className="row mt-5">

        <div className=" col-sm-12 col-md-8 col-lg-2 text-center">
      <Link to={"/characters"}>
        <img src="https://starwars-visualguide.com/assets/img/categories/character.jpg" alt="CharsIMG" />
      </Link>
      </div>

      <div className="col-sm-12 col-md-8 col-lg-2 text-center">
      <Link to={"/Vehicles"}>
        <img src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" alt="VehiclesIMG" />
      </Link>
      </div>
      
      <div className="col-sm-12 col-md-8 col-lg-2 text-center">
      <Link to={"/planets"}>
        <img src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" alt="PlanetsIMG" />
      </Link>
     
    </div>
    
    </div>
    <div className="stars"></div>
    </div>
    

  )
}