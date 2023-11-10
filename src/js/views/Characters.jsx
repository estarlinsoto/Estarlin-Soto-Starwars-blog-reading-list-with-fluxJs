import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/Characters.css"

export const Characters = () => {
  const { store, actions } = useContext(Context);
  let favListArr = []

  const [page, setPage] = useState(store.charsData.length)


  store.favList.map(el => favListArr.push(el.name))



  useEffect(() => {
    actions.getAllCharsData()
    setPage(store.charsData.length)

  }, [store.charsData.length]);


  return (
    <div className="container">
      <h1 className="text-center">characters</h1>
      

      <div className=" text-center" >

        {store.charsData.length === 0 ?
          <div className="spinner-border text-warning   loadingSpinner d-flex justify-content-center text-warning" role="status">

            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea196117-0b64-49b7-b13f-79f43cf77e53/ddls31c-9247bae6-b63b-4209-b3d3-df61ddb1bf67.png/v1/fill/w_894,h_894/_baby_yoda___the_child_asset___1____png_by_captain_kingsman16_ddls31c-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcxMSIsInBhdGgiOiJcL2ZcL2VhMTk2MTE3LTBiNjQtNDliNy1iMTNmLTc5ZjQzY2Y3N2U1M1wvZGRsczMxYy05MjQ3YmFlNi1iNjNiLTQyMDktYjNkMy1kZjYxZGRiMWJmNjcucG5nIiwid2lkdGgiOiI8PTE3MTEifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wRYMxozbDjG7DJvfQomX0_e1EpX3DGgJXJcRE9usK8A" />
          </div>
          : store.charsData.map((ele, index) => ele.map((e, i) =>
            <div className="charsCard card m-2 " key={i} >
              <img src={`https://starwars-visualguide.com/assets/img/characters/${e.url.slice(-3, -1)}.jpg`} className="card-img-top" alt="..." />
              <div className="card-body text-white text-center" key={i}>
                <h5 className="card-title">{e.name}</h5>
                <p className="card-text"><b>Gender: </b> {e.gender}</p>
                <p className="card-text"><b>Hair color: </b> {e.hair_color}</p>
                <p className="card-text"><b>Eye color: </b> {e.eye_color}</p>
                <Link to={e.url.length > 31 ? `/characters/people/${e.url.slice(-3, -1)}` : `/characters/people/${e.url.slice(-2, -1)}`} className="mx-4">
                  <button className="btn btn-warning ">Learn more!</button>
                </Link>

                <button className="btn btn-outline-danger  mx-4" onClick={() => actions.addFavChar(e.name, e.url)} >

                  {favListArr.includes(e.name) ? <i class="fa-solid fa-heart" ></i> : <i class="fa-regular fa-heart"></i>}

                </button>
              </div>
            </div>

          ))}
        <div className=" row ">
          <div className=" col text-center my-3" >
            <button type="button" className={store.charsPagination === 10 || store.charsData.length === 0 ? "hide" : store.charsData.length != page ? "hide" : " btn btn-warning w-50 p-2"}
              onClick={() => actions.moreCharsFunc("next", setPage(page + 1))} ><b>More Characters!</b></button>

            <div className={store.charsData.length === 0 ? "hide" : store.charsData.length == page ? "hide" : "spinner-grow text-warning"} role="status">
            </div>

          </div>
         


        </div>
      </div>
     
    </div>

  )
}