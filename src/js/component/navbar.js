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
						<button className=" btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

							Favorites
							<span className=" m-1 badge pill bg-secondary p-2">
								{store.favList.length}
							</span>

						</button>
						<ul className="dropdown-menu">
							{store.favList.length === 0 ? <li className="dropdown-item d-flex">(Add your favorites characters)</li> :

								store.favList.map((ele, index) => <div className="dropdown-item d-flex justify-content-between" >

									<Link  to={ele.url.length > 31 ? `/starwarshome/characters/people/${ele.url.slice(-3, -1)}` : `/starwarshome/characters/people/${ele.url.slice(-2, -1)}`} >
										<li key={index} onClick={() => actions.selectedCharacter(index)} >{ele.name}</li>
									</Link>
									<i class="fa-solid fa-trash-can d-flex justify-content-between m-2" onClick={() => actions.deleteFavChar(ele.name)} ></i>
								</div>)}


						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
