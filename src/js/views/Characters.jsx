import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/Characters.css";

export const Characters = () => {
  const params = useParams();

  const [page, setPage] = useState(Number(params.page))
  const { store, actions } = useContext(Context);


  


  useEffect(() => {
    actions.getAllData(params.page)

  }, []);
 

  //<div class="spinner-border  loadingSpinner d-flex justify-content-center text-warning" role="status"></div>
  console.log(params.page - 1)
  console.log(page)

  return (
    <div className="container-fluid">


      <div class="btn-group" role="group" aria-label="Basic example">
        <div className={page === 1 ? "hide" : "show"}>
          <Link to={`/starwarshome/characters/${page - 1}`} >
            <div onClick={() => setPage(page - 1)}>
              <button type="button" class="btn btn-warning" onClick={() => actions.prevPageFunc(page - 1)} >Prev</button>

            </div>
          </Link>
        </div>

        <div className={page === 9 ? "hide" : "show"}>
          <Link to={`/starwarshome/characters/${page + 1}`} >
            <div onClick={() => setPage(page + 1)}>
              <button type="button" class="btn btn-warning" onClick={() => actions.nextPageFunc(page + 1)} >next</button>
            </div>
          </Link>
        </div>

      </div>
      <div className="row justify-content-center">

        {store.allData.length === 0 ?
          <img src="https://media.tenor.com/fc47Cmt6yn4AAAAC/star-wars-disney.gif" width={"498px"} height={"498px"} />
          :  store.allData[0].results.map((e, i) =>
            <div className="card m-2 " key={i} >
              <img src={`https://starwars-visualguide.com/assets/img/characters/${e.url.slice(-3, -1)}.jpg`} className="card-img-top" alt="..." />
              <div className="card-body text-white text-center">
                <h5 className="card-title">{e.name}</h5>
                <p className="card-text"><b>Gender: </b> {e.gender}</p>
                <p className="card-text"><b>Hair color: </b> {e.hair_color}</p>
                <p className="card-text"><b>Eye color: </b> {e.eye_color}</p>
                <Link to={e.url.length > 31 ? `/starwarshome/characters/people/${e.url.slice(-3, -1)}` : `/starwarshome/characters/people/${e.url.slice(-2, -1)}`} className="m-5">
                  <button className="btn btn-primary  " onClick={() => actions.selectedCharacter(i)}>Learn more!</button>

                </Link>
                <button className="btn btn-primary justify-content-between " onClick={() => actions.addFavChar(e.name)} >{store.favList.includes(e.name) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}</button>
              </div>
            </div>
          )}

      </div>


    </div>

  )
}