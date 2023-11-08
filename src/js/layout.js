import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { StarWarsHome } from "./views/StarWarsHome.jsx";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Characters } from "./views/Characters.jsx";
import { People } from "./views/People.jsx";




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
						<Route path="/starwarshome/characters/people/:id" element={<People/>} />
						<Route path="*" element={<h1>Not found! :(</h1>} />
					</Routes>

				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
