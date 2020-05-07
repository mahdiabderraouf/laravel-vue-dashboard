import Vue from 'vue'
import App from './App.vue'
import FormError from './components/FormError.vue'
import router from './router'
import store from './store/index'

import './plugins'

Vue.component(FormError.name, FormError)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	components: {
		App
	},
	template: '<App />',
	el: '#app'
})
