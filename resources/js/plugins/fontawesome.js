import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faTimes,
	faPencilAlt,
	faBell,
	faEnvelope,
	faBars,
	faHome,
	faUsers,
	faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
	faTimes,
	farTrashAlt,
	faPencilAlt,
	faBell,
	faEnvelope,
	faBars,
	faHome,
	faUsers,
	faChevronRight
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
