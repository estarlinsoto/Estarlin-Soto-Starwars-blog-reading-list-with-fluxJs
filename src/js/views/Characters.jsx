import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/Characters.css";

export const Characters = () => {

  const params = useParams()

  const [page, setPage] = useState(1)
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAllData()



  }, []);

  //if(store.allData[0].next[store.allData[0].next.length - 1] === 1){setPage(1)}
  //<div class="spinner-border  loadingSpinner d-flex justify-content-center text-warning" role="status"></div>

  return (
    <div className="container">
      <h1 className="text-center">characters</h1>
      <h3 className="text-center">Page {page}{store.charsData.length}/9</h3>
      <div className=" row ">

        <div className={store.charsPagination === 10 ? "hide" : store.allData.length === 0 ? "hide" : " col text-end"} onClick={() => setPage(page + 1)} >
          <button type="button" class="btn btn-warning" onClick={() => actions.nextPageFunc("next")} >next</button>
        </div>

      </div>

      <div className="scrollBox" style={{
        overflowX: 'auto',
        overflowY: "hidden",
        whiteSpace: 'nowrap',
        display: "inline-block",
        width: "100%",

      }}>

        {store.charsData.length === 0 ?
          <div class="spinner-border  loadingSpinner d-flex justify-content-center text-warning" role="status">

            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea196117-0b64-49b7-b13f-79f43cf77e53/ddls31c-9247bae6-b63b-4209-b3d3-df61ddb1bf67.png/v1/fill/w_894,h_894/_baby_yoda___the_child_asset___1____png_by_captain_kingsman16_ddls31c-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcxMSIsInBhdGgiOiJcL2ZcL2VhMTk2MTE3LTBiNjQtNDliNy1iMTNmLTc5ZjQzY2Y3N2U1M1wvZGRsczMxYy05MjQ3YmFlNi1iNjNiLTQyMDktYjNkMy1kZjYxZGRiMWJmNjcucG5nIiwid2lkdGgiOiI8PTE3MTEifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wRYMxozbDjG7DJvfQomX0_e1EpX3DGgJXJcRE9usK8A" />
          </div>
          : store.charsData.map((ele,index) => ele.map((e, i) =>
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

                <button className="btn btn-primary justify-content-between " onClick={() => actions.addFavChar(e.name, e.url)} >
                  {store.favList[i] ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i> }
                  {console.log(store.favList[i])}
                  </button>
              </div>
            </div>


          ))}

      </div>
    </div>

  )
}