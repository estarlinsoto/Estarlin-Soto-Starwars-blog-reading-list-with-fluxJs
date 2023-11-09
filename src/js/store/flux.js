import { Link } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
///////////////////////// Storage de personas			
			allCharsData: [
			],

			selectedCharacterData: [
			],

			favList: [
			],
			
			charsData: [
			],

			charsPagination: 2,
//////////////////////// Storage de vehicles
			allVehiclesData: [
			],

			selectedVehiclesData: [
			],

			vehiclesFavList: [
			],

			vehiclesData: [
			],

			vehiclesPagination: 2,
			//////////////////////// Storage de planetas

			allPlanetsData: [
			],

			selectedPlanetsData: [
			],

			planetsFavList: [
			],

			planetsData: [
			],

			planetsPagination: 2


		},
		actions: {
			getAllCharsData: async () => {
				try {
					const store = getStore()
					await fetch(`https://swapi.dev/api/people`)
						.then(res => res.json())
						.then(data => {
							if (store.charsData.length == 0) {
								store.charsData.push(data.results)
								console.log(data)
							}
						})
					setStore({ store: store.allCharsData })
					setStore({ store: store.charsData })

				}
				catch (e) {
					console.log("getallCharsData ERROR ==", e)
				}
			},

			addFavChar: (name, url) => {
				try {
					const favObt = {
						name: name,
						url: url,
					}
					const store = getStore()
					const actions = getActions()
					const exists = store.favList.some(obj => obj.name === name);
					if (!exists) {
						store.favList.push(favObt)
						setStore({ store: store.favList })
					} else {
						actions.deleteFavChar(name)
					}

				}
				catch (e) {
					console.log("addFavChar function ERROR=== ", e)
				}
			},

			deleteFavChar: (name) => {
				try {
					const store = getStore()
					const newFavList = store.favList.filter((ele, i) => ele.name !== name)
					store.favList = newFavList

					setStore({ store: store.newFavList })

				}
				catch (e) {
					console.log("deleteFavChar function ERROR=== ", e)
				}
			},

			getPeople: async (id) => {
				try {

					const store = getStore()
					setStore({ store: store.selectedCharacterData.shift() })

					await fetch(`https://swapi.dev/api/people/${id}`)
						.then(res => res.json())
						.then(data => {
							store.selectedCharacterData.push(data)
							setStore({ store: store.selectedCharacter })
						})


				}
				catch (e) {
					console.log("error getPeople function=", e)
				}
			},

			moreCharsFunc: async (page) => {
				try {
					const store = getStore()
					if (page === "next") {
						let pag = store.charsPagination

						await fetch(`https://swapi.dev/api/people/?page=${pag}`)
							.then(res => res.json())
							.then(data => {
								pag++
								setStore({ store: store.charsPagination = pag })
								store.charsData.push(data.results)
							})
					}
				}
				catch (e) {
					console.log("getAllData ERROR ==", e)
				}
			},

			///// seccion donde hago get vehiculos
			getAllVehiclesData: async () => {
				try {
					const store = getStore()
					await fetch(`https://swapi.dev/api/vehicles`)
						.then(res => res.json())
						.then(data => {
							if (store.vehiclesData.length == 0) {
								store.vehiclesData.push(data.results)
								console.log(data)
							}
						})
					setStore({ store: store.allVehiclesData })
					setStore({ store: store.vehiclesData })

				}
				catch (e) {
					console.log("getallVehiclesData ERROR ==", e)
				}
			},

			addFavVehicle: (name, url) => {
				try {
					const favObt = {
						name: name,
						url: url,
					}
					const store = getStore()
					const actions = getActions()
					const exists = store.vehiclesFavList.some(obj => obj.name === name);
					if (!exists) {
						store.vehiclesFavList.push(favObt)
						setStore({ store: store.vehiclesFavList })
					} else {
						actions.deleteFavVehicle(name)
					}

				}
				catch (e) {
					console.log("addFavVehicle function ERROR=== ", e)
				}
			},

			deleteFavVehicle: (name) => {
				try {
					const store = getStore()
					const newFavList = store.vehiclesFavList.filter((ele, i) => ele.name !== name)
					store.vehiclesFavList = newFavList

					setStore({ store: store.newFavList })

				}
				catch (e) {
					console.log("deleteFavVehicle function ERROR=== ", e)
				}
			},

			getVehicles: async (id) => {
				try {

					const store = getStore()
					setStore({ store: store.selectedVehiclesData.shift() })

					await fetch(`https://swapi.dev/api/vehicles/${id}`)
						.then(res => res.json())
						.then(data => {
							store.selectedVehiclesData.push(data)
							setStore({ store: store.selectedVehiclesData })
							console.log(data)
						})


				}
				catch (e) {
					console.log("error getVehicles function=", e)
				}
			},

			moreVehiclesFunc: async (page) => {
				try {
					const store = getStore()
					if (page === "next") {
						let pag = store.vehiclesPagination

						await fetch(`https://swapi.dev/api/vehicles/?page=${pag}`)
							.then(res => res.json())
							.then(data => {
								pag++
								setStore({ store: store.vehiclesPagination = pag })
								store.vehiclesData.push(data.results)
							})
					}
				}
				catch (e) {
					console.log("moreVehicles function ERROR ==", e)
				}
			},

			///// seccion donde hago get Planetas

			getAllPlanetsData: async () => {
				try {
					const store = getStore()
					await fetch(`https://swapi.dev/api/planets`)
						.then(res => res.json())
						.then(data => {
							if (store.planetsData.length == 0) {
								store.planetsData.push(data.results)
								console.log(data)
							}
						})
					setStore({ store: store.allPlanetsData })
					setStore({ store: store.planetsData })

				}
				catch (e) {
					console.log("getallPlanetData ERROR ==", e)
				}
			},

			addFavPlanet: (name, url) => {
				try {
					const favObt = {
						name: name,
						url: url,
					}
					const store = getStore()
					const actions = getActions()
					const exists = store.planetsFavList.some(obj => obj.name === name);
					if (!exists) {
						store.planetsData.push(favObt)
						setStore({ store: store.planetsFavList })
					} else {
						actions.deleteFavPlanet(name)
					}

				}
				catch (e) {
					console.log("addFavPlanet function ERROR=== ", e)
				}
			},

			deleteFavPlanet: (name) => {
				try {
					const store = getStore()
					const newFavList = store.planetsFavList.filter((ele, i) => ele.name !== name)
					store.planetsFavList = newFavList

					setStore({ store: store.newFavList })

				}
				catch (e) {
					console.log("deleteFavplanet function ERROR=== ", e)
				}
			},

			getPlanet: async (id) => {
				try {

					const store = getStore()
					setStore({ store: store.selectedPlanetsData.shift() })

					await fetch(`https://swapi.dev/api/planets/${id}`)
						.then(res => res.json())
						.then(data => {
							store.selectedPlanetsData.push(data)
							setStore({ store: store.selectedPlanetsData })
							console.log(data)
						})


				}
				catch (e) {
					console.log("error getPlanets function=", e)
				}
			},

			morePlanetsFunc: async (page) => {
				try {
					const store = getStore()
					if (page === "next") {
						let pag = store.planetsPagination

						await fetch(`https://swapi.dev/api/planets/?page=${pag}`)
							.then(res => res.json())
							.then(data => {
								pag++
								setStore({ store: store.planetsPagination = pag })
								store.planetsData.push(data.results)
							})
					}
				}
				catch (e) {
					console.log("morePlanets function ERROR ==", e)
				}
			},

		}
	};
};

export default getState;
