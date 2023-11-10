import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import error404IMG from "../../img/error404IMG.jpg"

import { Context } from "../store/appContext";
import "../../styles/PlanetsDetails.css";


export const PlanetsDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getPlanet(params.id)

    }, [params.id]);

    return (
        <div className="container my-3">

            {store.selectedPlanetsData.length === 0 ?
                <div class="spinner-border  loadingSpinner d-flex justify-content-center text-warning" role="status">
                </div>
                : store.selectedPlanetsData.map((ele, index) =>
                    <div className="row">
                        <div className=" col-lg-6 col-md-12 col-sm-12 justify-content-center d-flex">
                        <img src={ele.url.slice(-3, -1) > 21 || ele.name == "Tatooine" || ele.name == "Stewjon"? error404IMG : `https://starwars-visualguide.com/assets/img/planets/${ele.url.slice(-3, -1)}.jpg `} className="rounded-circle planetsDetailsImg img-fluid" alt="Not Found :(" />
                            
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 infoContainer rounded p-5">

                            <h1 className="text-center" key={index}>{ele.name}</h1>

                            <p className="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti dolore facilis quas tempora cupiditate
                                accusantium nulla ratione repellendus, et blanditiis error! Aut quam eius provident velit deserunt inventore laborum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quisquam nobis soluta consequuntur, enim qui nesciunt
                                quae, iusto, esse ab fugit natus. Odio modi possimus quos natus commodi nihil eum?</p>
                        </div>

                        <div className="row border-top my-3">
                            <div className="col text-white text-center my-4">
                                <h4>Rotation</h4>
                                <h4>Period</h4>
                                <p key={index}>{ele.rotation_period}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Orbital</h4>
                                <h4>Period</h4>
                                <p key={index}>{ele.orbital_period}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Diameter</h4>
                                <p key={index}>{ele.diameter}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Climate</h4>
                                <p key={index}>{ele.climate}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Terrain</h4>
                                <p key={index}>{ele.terrain}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Population</h4>
                                <p key={index}>{ele.population}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Gravity</h4>    
                                <p key={index}>{ele.gravity}</p>
                            </div>
                        </div>

                    </div>


                )}
                <div className="stars"></div>

        </div>

    );
};
