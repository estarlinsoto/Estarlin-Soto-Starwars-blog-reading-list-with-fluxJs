import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import error from "../../img/404.jpg"

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
      <h1 className="text-center">Vehicles</h1>
      <h3 className="text-center">Pagegination {store.vehiclesPagination} charsdata {store.vehiclesData.length} page{page}</h3>

      <div className=" text-center" >

        {store.vehiclesData.length === 0 ?
          <div className="spinner-grow text-warning  loadingSpinner d-flex justify-content-center text-warning" role="status">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea196117-0b64-49b7-b13f-79f43cf77e53/ddls31c-9247bae6-b63b-4209-b3d3-df61ddb1bf67.png/v1/fill/w_894,h_894/_baby_yoda___the_child_asset___1____png_by_captain_kingsman16_ddls31c-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcxMSIsInBhdGgiOiJcL2ZcL2VhMTk2MTE3LTBiNjQtNDliNy1iMTNmLTc5ZjQzY2Y3N2U1M1wvZGRsczMxYy05MjQ3YmFlNi1iNjNiLTQyMDktYjNkMy1kZjYxZGRiMWJmNjcucG5nIiwid2lkdGgiOiI8PTE3MTEifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wRYMxozbDjG7DJvfQomX0_e1EpX3DGgJXJcRE9usK8A" />
          </div>
          : store.vehiclesData.map((ele, index) => ele.map((e, i) =>
            <div className="vehiclesCard m-2  card" key={i} >
              <img src={e.url.slice(-3, -1) > 43 ? "https://i.pinimg.com/564x/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg" : `https://starwars-visualguide.com/assets/img/vehicles/${e.url.slice(-3, -1)}.jpg `} className="card-img-top " alt="Not Found :(" />
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
              onClick={() => actions.moreVehiclesFunc("next", setPage(page + 1))} ><b>More Chars!</b></button>

            <div className={store.vehiclesData.length === 0 ? "hide" : store.vehiclesData.length == page ? "hide" : "spinner-grow text-warning"} role="status">
            </div>

          </div>



        </div>
      </div>
      
    </div>

  )
}