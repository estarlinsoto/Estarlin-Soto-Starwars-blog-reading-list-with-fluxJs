import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<nav className="navbar ">
				<div className="container-fluid">
					<div>
						<Link to={"/"}>
							<img src="https://www.freepnglogos.com/uploads/star-wars-logo-3.png" className="navbar-brand w-25 h-25" />
						</Link>
					</div>
					<div className="dropdown-center">
						<button className=" btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
							<span className=" m-1 badge pill bg-danger p-2">
								{store.favList.length + store.planetsFavList.length + store.vehiclesFavList.length}
							</span>

						</button>
						<ul className="dropdown-menu">
							{store.favList.length > 0 ? <p className="text-center text-secondary mb-0"><b>Characters</b></p> : ''}
							{store.favList.length === 0 ? <li className="dropdown-item justify-content-between text-center text-secondary">(Add your favorites characters)</li> :
								store.favList.map((ele, index) => <div className="dropdown-item d-flex justify-content-between" >
									<Link to={ele.url.length > 31 ? `/characters/people/${ele.url.slice(-3, -1)}` : `/characters/people/${ele.url.slice(-2, -1)}`} className="text-decoration-none text-black">
										<li key={index}  >{ele.name}</li>
									</Link>
									<i class="fa-solid fa-trash-can d-flex justify-content-between m-2" onClick={() => actions.deleteFavChar(ele.name)} ></i>
								</div>)}


							{store.vehiclesFavList.length > 0 ? <p className="text-center text-secondary mt-4 mb-0"><b>Vehicles</b></p> : ''}
							{store.vehiclesFavList.length === 0 ? <li className="dropdown-item text-center text-secondary">(Add your favorites vehicles)</li> :
								store.vehiclesFavList.map((ele, index) => <div className="dropdown-item d-flex justify-content-between" >
									<Link to={ele.url.length > 33 ? `/vehicles/vehiclesdetails/${ele.url.slice(-3, -1)}` : `/vehicles/vehiclesdetails/${ele.url.slice(-2, -1)}`} className="text-decoration-none text-black">
										<li key={index}  >{ele.name}</li>
									</Link>
									<i class="fa-solid fa-trash-can d-flex justify-content-between m-2" onClick={() => actions.deleteFavVehicle(ele.name)} ></i>
								</div>)}


							{store.planetsFavList.length > 0 ? <p className="text-center text-secondary mt-4 mb-0"><b>Planets</b></p> : ''}
							{store.planetsFavList.length === 0 ? <li className="dropdown-item  text-center text-secondary">(Add your favorites planets)</li> :
								store.planetsFavList.map((ele, index) => <div className="dropdown-item d-flex justify-content-between" >
									<Link to={ele.url.length > 32 ? `/planets/planetsdetails/${ele.url.slice(-3, -1)}` : `/planets/planetsdetails/${ele.url.slice(-2, -1)}`} className="text-decoration-none text-black">
										<li key={index} >{ele.name}</li>
									</Link>
									<i class="fa-solid fa-trash-can d-flex justify-content-between m-2" onClick={() => actions.deleteFavPlanet(ele.name)} ></i>
								</div>)}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
