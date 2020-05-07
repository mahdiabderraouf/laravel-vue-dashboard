import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from './modules/auth'
import * as users from './modules/users'
import * as feedbacks from './modules/feedbacks'
import * as DeleteConfirmation from './modules/delete-confirmation'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		auth,
		users,
		feedbacks,
		DeleteConfirmation
	},
	state: {
		sidebar: ''
	},
	getters: {
		sidebar(state) {
			return state.sidebar
		}
	},
	mutations: {
		TOGGLE_SIDEBAR(state) {
			state.sidebar = state.sidebar == 'active' ? '' : 'active'
		}
	},
	actions: {
		toggleSideBar({ commit }) {
			commit('TOGGLE_SIDEBAR')
		}
	}
})
