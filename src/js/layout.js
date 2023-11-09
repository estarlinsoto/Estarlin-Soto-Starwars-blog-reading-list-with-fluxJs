import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { StarWarsHome } from "./views/StarWarsHome.jsx";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Characters } from "./views/Characters.jsx";
import { People } from "./views/People.jsx";
import { Vehicles } from "./views/Vehicles.jsx";
import { VehiclesDetails } from "./views/VehiclesDetails.jsx";
import { Planets } from "./views/Planets.jsx";
import { PlanetsDetails } from "./views/PlanetsDetails.jsx";




//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<StarWarsHome />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/vehicles/vehiclesdetails/:id" element={<VehiclesDetails />} />
						<Route path="/characters/people/:id" element={<People />} />
						<Route path="/planets/planetsdetails/:id" element={<PlanetsDetails />} />
						<Route path="*" element={<h1>Not found! :(</h1>} />
					</Routes>

				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
