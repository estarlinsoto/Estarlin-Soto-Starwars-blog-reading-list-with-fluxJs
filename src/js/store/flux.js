import { Link } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			allData: [

			],
			selectedCharacterData: [

			],
			favList: [

			]
		},
		actions: {
			getAllData: async () => {
				try {
					const store = getStore()
					await fetch("https://swapi.dev/api/people")
						.then(res => res.json())
						.then(data => {
							store.allData.push(data.results)
							//console.log(data.results)

						})
					setStore({ store: store.allData })

				}
				catch (e) {
					console.log("getAllData ERROR ==", e)
				}
			},
			selectedCharacter: (index) => {
				try {
					const store = getStore()
					setStore({ store: store.selectedCharacterData.shift() })
					store.selectedCharacterData.push(store.allData[0][index])
					setStore({ store: store.selectedCharacterData })

				}
				catch (e) {
					console.log("getAllData ERROR ==", e)

				}
			},
			addFavChar: (name) => {
				try {

					const store = getStore()
					const actions = getActions()
					if (!store.favList.includes(name)) {
						store.favList.push(name)
						setStore({ store: store.favList })
					}
					else if (store.favList.includes(name)) {
						actions.deleteFavChar(name)
					}
				}
				catch (e) {
					console.log("addFavChar funtion ERROR=== ", e)
				}
			},
			deleteFavChar: (name) => {
				try {
					const store = getStore()
					const newFavList = store.favList.filter((ele, i) => ele !== name)
					store.favList = newFavList

					setStore({ store: store.newFavList })

				}
				catch (e) {
					console.log("addFavChar funtion ERROR=== ", e)
				}
			},
			getPeople: async (id) => {
				try {

					console.log(id)
					const store = getStore()
					setStore({ store: store.selectedCharacterData.shift() })

					await fetch(`https://swapi.dev/api/people/${id}`)
						.then(res => res.json())
						.then(data => {
							
							store.selectedCharacterData.push(data)
							console.log(data)
							setStore({ store: store.selectedCharacter })
						})


				}
				catch (e) {
					console.log("error prueba=", e)
				}
			},
			nextPageFunc: async (page) => {
				try {
					
					const store = getStore()
					await fetch("https://swapi.dev/api/people")
						.then(res => res.json())
						.then(data => {
							store.allData.push(data.results)
							//console.log(data.results)

						})
					setStore({ store: store.allData })

				}
				catch (e) {
					console.log("getAllData ERROR ==", e)
				}
			},
		}
	};
};

export default getState;
