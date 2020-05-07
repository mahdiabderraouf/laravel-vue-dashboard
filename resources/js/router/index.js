import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	linkActiveClass: 'active',
	routes: [
		{
			path: '/dashboard',
			component: () => import('@/views/layouts/Dashboard.vue'),
			meta: {
				auth: true
			},
			children: [
				{
					path: '',
					name: 'dashboard',
					component: () => import('@/views/dashboard/Home.vue')
				},
				{
					path: 'users',
					name: 'users',
					component: () =>
						import('@/views/dashboard/users/UsersList.vue'),
					meta: {
						isAdmin: true
					}
				},
				{
					path: 'users/create',
					name: 'users.create',
					component: () =>
						import('@/views/dashboard/users/CreateUser.vue'),
					meta: {
						isAdmin: true
					}
				},
				{
					path: 'users/:id',
					name: 'users.edit',
					component: () =>
						import('@/views/dashboard/users/Profile.vue'),
					meta: {
						isAdminOrSelf: true
					}
				}
			]
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/auth/Login.vue'),
			meta: {
				guest: true
			}
		},
		{
			path: '/password/reset',
			name: 'password.request',
			component: () =>
				import('@/views/auth/password/PasswordRequest.vue'),
			meta: {
				guest: true
			}
		},
		{
			path: '/password/reset/:token',
			name: 'password.reset',
			component: () => import('@/views/auth/Login.vue'),
			meta: {
				guest: true
			}
		}
	]
})

router.beforeEach(async (to, from, next) => {
	NProgress.start()
	if (to.matched.some(record => record.meta.auth)) {
		if (!store.getters['auth/isLoggedIn']) {
			next({
				name: 'login'
			})
		} else {
			if (store.getters['auth/authId'] == null) {
				await store
					.dispatch('auth/fetchUser')
					.then(() => {})
					.catch(error => {
						next({
							name: 'login'
						})
					})
			}
		}
	}
	if (to.matched.some(record => record.meta.guest)) {
		// this route requires guest, check if logged in
		// if true, redirect to home page.
		if (store.getters['auth/isLoggedIn']) {
			next({
				name: 'dashboard'
			})
		}
	}

	let currentUser = store.getters['auth/currentUser']

	if (to.matched.some(record => record.meta.isAdmin)) {
		if (currentUser.is_admin == 0) {
			NProgress.done()
			next({
				name: 'dashboard'
			})
		}
	}

	if (to.matched.some(record => record.meta.isAdminOrSelf)) {
		if (!currentUser.is_admin && to.params.id != currentUser.id) {
			NProgress.done()
			next({
				name: 'dashboard'
			})
		} else next()
	} else next()
})

router.afterEach((to, from, next) => {
	NProgress.done()
})

export default router
