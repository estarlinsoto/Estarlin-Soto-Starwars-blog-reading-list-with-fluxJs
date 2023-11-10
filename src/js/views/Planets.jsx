import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import planetsIMG from "../../img/planetsIMG.png"
import error404IMG from "../../img/error404IMG.jpg"

import { Context } from "../store/appContext";

import "../../styles/Planets.css"

export const Planets = () => {
  const { store, actions } = useContext(Context);
  let planetsFavListArr = []

  const [page, setPage] = useState(store.planetsData.length)


  store.planetsFavList.map(el => planetsFavListArr.push(el.name))



  useEffect(() => {
    actions.getAllPlanetsData()
    setPage(store.planetsData.length)

  }, [store.planetsData.length]);


  return (
    <div className="container">
      <h1 className="text-center">Planets</h1>

      <div className=" text-center" >

        {store.planetsData.length === 0 ?
          <div className="spinner-grow  loadingSpinner d-flex justify-content-center " role="status">

            <img src={planetsIMG} />
          </div>
          : store.planetsData.map((ele, index) => ele.map((e, i) =>
            <div className="charsCard card m-2 " key={i} >
              <img src={e.url.slice(-3, -1) > 21 || e.name == "Tatooine" || e.name == "Stewjon" ? error404IMG : `https://starwars-visualguide.com/assets/img/planets/${e.url.slice(-3, -1)}.jpg `} className="card-img-top" alt="..." />
              <div className="card-body text-white text-center" key={i}>
                <h5 className="card-title">{e.name}</h5>
                <Link to={e.url.length > 32 ? `/planets/planetsdetails/${e.url.slice(-3, -1)}` : `/planets/planetsdetails/${e.url.slice(-2, -1)}`} className="mx-4">
                  <button className="btn btn-warning ">Learn more!</button>
                </Link>

                <button className="btn btn-outline-danger  mx-4" onClick={() => actions.addFavPlanet(e.name, e.url)} >

                  {planetsFavListArr.includes(e.name) ? <i class="fa-solid fa-heart" ></i> : <i class="fa-regular fa-heart"></i>}

                </button>
              </div>
            </div>

          ))}
        <div className=" row ">
          <div className=" col text-center my-3" >
            <button type="button" className={store.planetsPagination === 7 || store.planetsData.length === 0 ? "hide" : store.planetsData.length != page ? "hide" : " btn btn-warning w-50 p-2"}
              onClick={() => actions.morePlanetsFunc("next", setPage(page + 1))} ><b>More Planets!</b></button>

            <div className={store.planetsData.length === 0 ? "hide" : store.planetsData.length == page ? "hide" : "spinner-grow text-warning"} role="status">
            </div>

          </div>



        </div>
      </div>

    </div>

  )
}