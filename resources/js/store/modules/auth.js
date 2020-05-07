export const namespaced = true

export const state = {
	isLoggedIn: Boolean(localStorage.getItem('isLoggedIn')) || false,
	authId: null
}

export const getters = {
	isLoggedIn(state) {
		return state.isLoggedIn
	},
	authId(state) {
		return state.authId
	},
	currentUser(state, getters, rootState, rootGetters) {
		return rootGetters['users/users'].find(user => user.id == state.authId)
	}
}

export const mutations = {
	LOGGED_IN(state) {
		state.isLoggedIn = true
		localStorage.setItem('isLoggedIn', 'true')
	},
	LOGGED_OUT(state) {
		state.isLoggedIn = false
		state.authId = null
		localStorage.removeItem('isLoggedIn')
	},
	FETCH_USER_SUCCESS(state, user) {
		state.authId = user.id
	},
	FETCH_USER_FAILURE(state) {
		state.isLoggedIn = false
		localStorage.removeItem('isLoggedIn')
	}
}

export const actions = {
	login({ commit, dispatch }, message = 'Welcome back!') {
		commit('LOGGED_IN')

		dispatch(
			'feedbacks/addFeedback',
			{
				message,
				type: 'success'
			},
			{ root: true }
		)
	},
	fetchUser({ commit, dispatch }) {
		return new Promise((resolve, reject) => {
			axios
				.get('/api/user')
				.then(({ data }) => {
					dispatch('users/addUser', data, { root: true })
					commit('FETCH_USER_SUCCESS', data)
					resolve(data)
				})
				.catch(error => {
					commit('FETCH_USER_FAILURE')
					reject(error)
				})
		})
	},
	async logout({ commit }) {
		await axios.post('/api/logout')

		commit('LOGGED_OUT')

		window.location.reload() // To clear the store
	}
}
