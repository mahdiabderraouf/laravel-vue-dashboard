import axios from 'axios'
import store from '../store/index.js'
import router from '../router/index.js'

window.axios = axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Accept'] = 'Application/json'
axios.defaults.withCredentials = true

axios.interceptors.response.use(
	response => response,
	async error => {
		const { status } = error.response

		if (status >= 500) {
			store.dispatch('feedbacks/addFeedback', {
				message: 'Something went wrong, please try again.',
				type: 'danger'
			})
		}

		if (status === 403) {
			store.dispatch('feedbacks/addFeedback', {
				message: 'Unauthorized.',
				type: 'danger'
			})
		}

		if (status === 401) {
			await store.dispatch('auth/logout')

			router.push({ name: 'login' })
		}

		return Promise.reject(error)
	}
)
