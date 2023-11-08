import { Link } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			allData: [

			],
			selectedCharacterData: [

			],
			favList: [

			],
			moreDataChars: [

			],
			charsData: [

			],
			charsPagination: 2

		},
		actions: {
			getAllData: async () => {
				try {
					const store = getStore()
					await fetch(`https://swapi.dev/api/people`)
						.then(res => res.json())
						.then(data => {
							store.allData.push(data)
							if (store.charsData.length == 0) {
								store.charsData.push(data.results)
								console.log(data)
							}
						})
					setStore({ store: store.allData })
					setStore({ store: store.charsData })


				}
				catch (e) {
					console.log("getAllData ERROR ==", e)
				}
			},
			selectedCharacter: (index) => {
				try {
					const store = getStore()
					setStore({ store: store.selectedCharacterData.shift() })
					store.selectedCharacterData.push(store.allData.results[0][index])
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
						mark : true
					}
					const store = getStore()
					const actions = getActions()
					const exists = store.favList.some(obj => obj.name === name);

					if (!exists) {
						store.favList.push(favObt)
						setStore({store : store.favList})
						
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
					if (page === "next" && store.allData[store.allData.length - 1].next !== null) {
						let pag = store.charsPagination
						console.log("soy la funcion next page", pag)
						//setStore({ store: store.allData.shift() })
						await fetch(`https://swapi.dev/api/people/?page=${pag}`)
							.then(res => res.json())
							.then(data => {
								pag++
								setStore({ store: store.charsPagination = pag })
								store.charsData.push(data.results)

								//store.allData.push(data)
								//console.log("store. alldataaaaa Chars", store.allData)
								//console.log("soy data.results", data.results)
								console.log("chars Dataaaa", store.charsData)



							})
						//setStore({ store: store.allData })
						//console.log("soy data.results", data.results)
						//setStore({store : store.charsData = Data})

					}
				}
				catch (e) {
					console.log("getAllData ERROR ==", e)
				}
			},
			prevPageFunc: async (page) => {
				try {
					const store = getStore()
					if (store.allData[0].previous != null) {
						setStore({ store: store.allData.shift() })
						await fetch(`https://swapi.dev/api/people/?page=${page}`)
							.then(res => res.json())
							.then(data => {
								store.allData.push(data)
								//console.log(data.results)

							})
						setStore({ store: store.allData })

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
