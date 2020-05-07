export const namespaced = true

export const state = {
	users: [],
	usersLoaded: false
}

export const getters = {
	users(state) {
		return state.users
	},
	getUserById(state) {
		return id => {
			return state.users.find(user => user.id == id)
		}
	}
}

export const mutations = {
	SET_USERS(state, users) {
		state.users = users
		state.usersLoaded = true
	},
	DELETE_USER(state, id) {
		let index = state.users.findIndex(user => user.id == id)
		state.users.splice(index, 1)
	},
	UPDATE_USER(state, data) {
		let index = state.users.findIndex(user => user.id == data.id)
		state.users.splice(index, 1, data)
	},
	ADD_USER(state, user) {
		state.users.push(user)
	}
}

export const actions = {
	async fetchUsers({ commit, state }) {
		if (!state.usersLoaded) {
			const { data } = await axios.get('/api/users')
			commit('SET_USERS', data)
		}
	},
	deleteUser({ commit, dispatch }, id) {
		return new Promise((resolve, reject) => {
			axios
				.delete('/api/users/' + id)
				.then(response => {
					commit('DELETE_USER', id)

					dispatch(
						'feedbacks/addFeedback',
						{
							message: 'User deleted successfully.',
							type: 'success'
						},
						{ root: true }
					)
					resolve(response)
				})
				.catch(error => {
					dispatch(
						'feedbacks/addFeedback',
						{
							message: error.message,
							type: 'danger'
						},
						{ root: true }
					)
					reject(error)
				})
		})
	},
	updateUser({ commit, dispatch }, data) {
		commit('UPDATE_USER', data)

		dispatch(
			'feedbacks/addFeedback',
			{
				message: 'User updated successfully.',
				type: 'success'
			},
			{ root: true }
		)
	},
	addUser({ commit }, user) {
		commit('ADD_USER', user)
	}
}
