import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";



export const People1 = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container my-3">

			{ store.selectedCharacterData.map((ele, index) =>
					<div className="row">
						<div className="col-6 justify-content-center d-flex">
							<img src={`https://starwars-visualguide.com/assets/img/characters/${ele.url.slice(-3, -1)}.jpg`} className="rounded-circle" alt="..." />


						</div>
						<div className="col-6 infoContainer rounded p-5">


							<h1 className="text-center">{ele.name}</h1>
							<p className="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti dolore facilis quas tempora cupiditate
								accusantium nulla ratione repellendus, et blanditiis error! Aut quam eius provident velit deserunt inventore laborum.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quisquam nobis soluta consequuntur, enim qui nesciunt
								quae, iusto, esse ab fugit natus. Odio modi possimus quos natus commodi nihil eum?</p>
						</div>

						<div className="row border-top my-3">
							<div className="col text-white text-center my-4">
								<h4>Height</h4>
								<p>{ele.height}</p>
							</div>
							<div className="col text-white text-center my-4">
								<h4>Gender</h4>
								<p>{ele.gender}</p>
							</div>
							<div className="col text-white text-center my-4">
								<h4>Hair</h4>
								<h4>Color</h4>
								<p>{ele.hair_color}</p>
							</div>
							<div className="col text-white text-center my-4">
								<h4>Skin</h4>
								<h4>Color</h4>
								<p>{ele.skin_color}</p>
							</div>
							<div className="col text-white text-center my-4">
								<h4>Eye</h4>
								<h4>Color</h4>
								<p>{ele.eye_color}</p>
							</div>
							<div className="col text-white text-center my-4">
								<h4>Birth</h4>
								<h4>Year</h4>
								<p>{ele.birth_year}</p>
							</div>
							<div className="col text-white text-center my-4">
								<h4>Mass</h4>
								<p>{ele.mass} KG</p>
							</div>
						</div>

					</div>


				)}

		</div>

	);
};
