
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
			//hago mi primer get para guardar el resultado en charsData el que se convuierte en mi storage principal	
			getAllCharsData: async () => {
				try {
					const store = getStore()
					await fetch(`https://swapi.dev/api/people`)
						.then(res => res.json())
						.then(data => {
							if (store.charsData.length == 0) {
								store.charsData.push(data.results)
								
							}
						})
					setStore({ store: store.allCharsData })
					setStore({ store: store.charsData })

				}
				catch (e) {
					console.log("getallCharsData ERROR ==", e)
				}
			},
			//Con esta funcion uso el metodo some para saber si el favorito existe en la lista y de esta forma no permitir que se repitan los nombres en la lista
			//en caso de que ya exista el nombrer procedo a llamar mi funcion que los borra de la lista
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
			//Creo una funcion con la que mediante un metodo filter devuelvo un array solo con todos los elementos menos el seleccionado que se pasa como parametro en la funcion
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
			//Esta funcion se encarga de recivir el numero de personaje que ocupa para luego hacer un get para luego guardarlo en un array de objetos para poder enseñar la pagina con la informacion
			//Cada ves que la funcion es llamada el array anterior es borrado para poder enseñar una pagina con la informacion llamada
			//adicional mente me aseguro de que cuando se busca el numero de personaje este dentro de los personajes disponibles de la api
			//en caso de que no lo este mando al usuario a una pagina de error
			getPeople: async (id) => {
				try {
					const store = getStore()


					setStore({ store: store.selectedCharacterData.shift() })
					await fetch(`https://swapi.dev/api/people/${id}`)
						.then(res => res.json())
						.then(data => {
							if (!data.detail) {
								store.selectedCharacterData.push(data)
								setStore({ store: store.selectedCharacter })
							} else {
								const errorObj = {
									name: "Sorry that Page Dont Exist :(",
									height: "Not exits",
									url: "Not exitsNot exits",
									gender: "Not exits",
									hair_color: "Not exits",
									skin_color: "Not exits",
									eye_color: "Not exits",
									birth_year: "Not exits",
									mass: "Not exist"
								}

								store.selectedCharacterData.push(errorObj)
								setStore({ store: store.selectedCharacter })


							}

						})

				}
				catch (e) {
					console.log("error getPeople function=", e)
				}
			},
			//Con esta funcion recive un string "next" luego de recivirlo llamo a un objeto con la pagina actual 
			//luego hago un get con el valor del objeto pagination para poder hacer un llamado a la pagina siguiente
			//luego hago un push para poder cargar los proximos 10 personajes debajo de los que ya existen

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
					console.log("moreChars function ERROR ==", e)
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
							if (!data.detail) {
								store.selectedVehiclesData.push(data)
								setStore({ store: store.selectedVehiclesData })
							} else {
								const errorObj = {
									name: "Sorry that Page Dont Exist :(",
									model: "Not exits",
									url: "Not exitsNot exits",
									cargo_capacity: "Not exits",
									manufacturer: "Not exits",
									cost_in_credits: "Not exits",
									max_atmosphering_speed: "Not exits",
									passengers: "Not exits",
									vehicle_class: "Not exist"

								}
								store.selectedVehiclesData.push(errorObj)
								setStore({ store: store.selectedVehiclesData })
							}
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
						store.planetsFavList.push(favObt)
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
							if (!data.detail) {
								store.selectedPlanetsData.push(data)
								setStore({ store: store.selectedPlanetsData })
							} else {
								const errorObj = {
									name: "Sorry that Page Dont Exist :(",
									rotation_period: "Not exits",
									orbital_period: "Not exits",
									diameter: "Not exits",
									climate: "Not exits",
									terrain: "Not exits",
									population: "Not exits",
									gravity: "Not exits",
									url: "Not exist"

								}
								store.selectedPlanetsData.push(errorObj)
								setStore({ store: store.selectedPlanetsData })
							}
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
