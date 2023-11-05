import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/Characters.css";

export const Characters = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
 

  return (
    <div className="container-fluid">

      <div className="row justify-content-center">
        {store.allData.length === 0 ?
          <div class="spinner-border  loadingSpinner d-flex justify-content-center text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div> : store.allData.map((ele, index) => ele.map((e, i) =>
            <div className="card m-2 " key={i} >
              <img src={`https://starwars-visualguide.com/assets/img/characters/${e.url.slice(-3, -1)}.jpg`} className="card-img-top" alt="..." />
              <div className="card-body text-white text-center">
                <h5 className="card-title">{e.name}</h5>
                <p className="card-text"><b>Gender: </b> {e.gender}</p>
                <p className="card-text"><b>Hair color: </b> {e.hair_color}</p>
                <p className="card-text"><b>Eye color: </b> {e.eye_color}</p>
                <Link to={`/people/${e.name}`} className="m-5">
                  <button className="btn btn-primary  " onClick={() => actions.selectedCharacter(i)}>Learn more!</button>

                </Link>
                <button className="btn btn-primary justify-content-between " onClick={() => actions.addFavChar(e.name)} >{store.favList.includes(e.name) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}</button>
              </div>

            </div>
          ))}
      </div>
    </div>

  )
}