export const namespaced = true

let feedbackId = 0

export const state = {
	feedbacks: []
}

export const getters = {
	feedbacks(state) {
		return state.feedbacks
	}
}

export const mutations = {
	ADD_FEEDBACK(state, feedback) {
		state.feedbacks.push({
			...feedback,
			id: feedbackId++
		})
		setTimeout(() => {
			let index = state.feedbacks.findIndex(
				item => item.id == feedback.id
			)
			state.feedbacks.splice(index, 1)
		}, 3000)
	}
}

export const actions = {
	addFeedback({ commit }, feedback) {
		commit('ADD_FEEDBACK', feedback)
	}
}
