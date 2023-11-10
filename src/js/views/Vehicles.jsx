import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import vehiclesIMG from "../../img/vehicleIMG.png"
import error404IMG from "../../img/error404IMG.jpg"


import { Context } from "../store/appContext";

import "../../styles/Vehicles.css"

export const Vehicles = () => {
  const { store, actions } = useContext(Context);
  let vehiclesFavListArr = []

  const [page, setPage] = useState(store.vehiclesData.length)

  store.vehiclesFavList.map(el => vehiclesFavListArr.push(el.name))


  useEffect(() => {
    actions.getAllVehiclesData()
    setPage(store.vehiclesData.length)

  }, [store.vehiclesData.length]);

  return (
    <div className="container">
      <h1 className={store.vehiclesData.length === 0 ? "hide" : "text-center"} >Vehicles</h1>


      <div className=" text-center" >

        {store.vehiclesData.length === 0 ?
          <div className="spinner-grow  loadingSpinner d-flex justify-content-center " role="status">
            <img src={vehiclesIMG} />
          </div>
          : store.vehiclesData.map((ele, index) => ele.map((e, i) =>
            <div className="vehiclesCard m-2  card" key={i} >
              <img src={e.url.slice(-3, -1) > 43 ? error404IMG : `https://starwars-visualguide.com/assets/img/vehicles/${e.url.slice(-3, -1)}.jpg `} className="card-img-top " alt="Not Found :(" />
              <div className="card-body text-white text-center" key={i}>
                <h5 className="card-title">{e.name}</h5>
                <b>Model</b>
                <p className="card-text">{e.model}</p>

                <Link to={e.url.length > 33 ? `/vehicles/vehiclesdetails/${e.url.slice(-3, -1)}` : `/vehicles/vehiclesdetails/${e.url.slice(-2, -1)}`} className="mx-4">
                  <button className="btn btn-warning ">Learn more!</button>
                </Link>

                <button className="btn btn-outline-danger  mx-4" onClick={() => actions.addFavVehicle(e.name, e.url)} >

                  {vehiclesFavListArr.includes(e.name) ? <i class="fa-solid fa-heart" ></i> : <i class="fa-regular fa-heart"></i>}

                </button>
              </div>
            </div>

          ))}
        <div className=" row ">
          <div className=" col text-center my-3" >
            <button type="button" className={store.vehiclesPagination === 5 || store.vehiclesData.length === 0 ? "hide" : store.vehiclesData.length != page ? "hide" : " btn btn-warning w-50 p-2 "}
              onClick={() => actions.moreVehiclesFunc("next", setPage(page + 1))} ><b>More Vehicles!</b></button>

            <div className={store.vehiclesData.length === 0 ? "hide" : store.vehiclesData.length == page ? "hide" : "spinner-grow text-warning"} role="status">
            </div>

          </div>



        </div>
      </div>

    </div>

  )
}