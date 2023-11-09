import { Link } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			/////////////////// Storage de personas			
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

			selectedPlanetData: [
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

			selectedCharacter: (index) => {
				try {
					const store = getStore()
					store.selectedCharacterData.push(store.allCharsData.results[0][index])
					setStore({ store: store.selectedCharacterData })
					console.log(store.selectedCharacterData)

				}
				catch (e) {
					console.log("getAllData ERROR ==", e)

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
					console.log("addFavChar function ERROR=== ", e)
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

			nextPageFunc: async (page) => {
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

		}
	};
};

export default getState;
