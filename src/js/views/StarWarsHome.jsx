import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/StarWarsHome.css";

export const StarWarsHome = () => {
  const { store, actions } = useContext(Context);



  return (
    <div className="container">


      <div className="row mt-5">


        <div className=" col-sm-12 col-md-8 col-lg-4 my-5 d-flex justify-content-center  imgContainer">

          <Link to={"/characters"} className="text-decoration-none">
            <h6 className="imgText text-warning ">
              <img src="https://starwars-visualguide.com/assets/img/categories/character.jpg " className="img-fluid" alt="CharsIMG" />
              Characters</h6>
          </Link>


        </div>

        <div className=" col-sm-12 col-md-8 col-lg-4 my-5 d-flex justify-content-center  imgContainer">
          <Link to={"/Vehicles"} className="text-decoration-none">
            <h6 className="imgText text-warning ">
              <img src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" className="img-fluid" alt="VehiclesIMG" />
              Vehicles</h6>
          </Link>
        </div>

        <div className="col-sm-12 col-md-8 col-lg-4 my-5 d-flex justify-content-center  imgContainer">
          <Link to={"/planets"} className="text-decoration-none">
            <h6 className="imgText text-warning ">
              <img src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" className="img-fluid" alt="PlanetsIMG" />
              Planets</h6>
          </Link>

        </div>

      </div>
      <div className="stars"></div>
    </div>


  )
}