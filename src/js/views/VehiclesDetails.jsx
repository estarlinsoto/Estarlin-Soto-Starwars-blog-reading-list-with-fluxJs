import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/VehiclesDetails.css";


export const VehiclesDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getVehicles(params.id)

    }, [params.id]);

    return (
        <div className="container my-3">

            {store.selectedVehiclesData.length === 0 ?
                <div class="spinner-border  loadingSpinner d-flex justify-content-center text-warning" role="status">
                </div>
                : store.selectedVehiclesData.map((ele, index) =>
                    <div className="row">
                        <div className=" col-lg-6 col-md-12 col-sm-12 justify-content-center d-flex">
                        <img src={ele.url.slice(-3, -1) > 43 ? "https://i.pinimg.com/564x/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg" : `https://starwars-visualguide.com/assets/img/vehicles/${ele.url.slice(-3, -1)}.jpg `} className="rounded-circle " alt="Not Found :(" />

                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 infoContainer rounded p-5">

                            <h1 className="text-center">{ele.name}</h1>
                            <p className="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti dolore facilis quas tempora cupiditate
                                accusantium nulla ratione repellendus, et blanditiis error! Aut quam eius provident velit deserunt inventore laborum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quisquam nobis soluta consequuntur, enim qui nesciunt
                                quae, iusto, esse ab fugit natus. Odio modi possimus quos natus commodi nihil eum?</p>
                        </div>

                        <div className="row border-top my-3">
                            <div className="col text-white text-center my-4">
                                <h4>Model</h4>
                                <p>{ele.model}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Cargo_capacity</h4>
                                <p>{ele.cargo_capacity}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Manufacturer</h4>
                                <p>{ele.manufacturer}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Cost</h4>
                                <h4>in ᖬ</h4>
                                <p>{ele.cost_in_credits}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Max</h4>
                                <h4>Speed</h4>
                                <p>{ele.max_atmosphering_speed}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>passengers</h4>
                                <p>{ele.passengers}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Vehicle</h4>
                                <h4>Class</h4>
                                <p>{ele.vehicle_class}</p>
                            </div>
                        </div>

                    </div>


                )}
                <div className="stars"></div>

        </div>

    );
};
