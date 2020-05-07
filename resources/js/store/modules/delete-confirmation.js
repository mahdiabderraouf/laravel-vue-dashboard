export const namespaced = true

export const state = {
	isOpen: false,
	itemToDeleteId: null,
	confirmed: false
}

export const getters = {
	itemToDeleteId(state) {
		return state.itemToDeleteId
	},
	isOpen(state) {
		return state.isOpen
	},
	confirmed(state) {
		return state.confirmed
	}
}

export const mutations = {
	HIDE(state) {
		state.isOpen = false
		state.confirmed = false
	},
	SHOW(state) {
		state.isOpen = true
	},
	CONFIRM_DELETE(state) {
		state.confirmed = true
	},
	SET_ITEM_TO_DELETE_ID(state, id) {
		state.itemToDeleteId = id
	}
}
