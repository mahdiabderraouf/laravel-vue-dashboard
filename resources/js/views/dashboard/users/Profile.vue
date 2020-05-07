<template>
	<div class="row grid-margin">
		<div class="col-md-3">
			<div class="card">
				<div class="card-body">
					<div class="profile-image">
						<img :src="user.avatar" alt="image" />
					</div>
					<div class="profile-name">
						<p class="name">{{ normalizedName }}</p>
						<p class="designation">{{ user.email }}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-9">
			<div class="card">
				<div class="card-body">
					<b-tabs>
						<b-tab title="General infos" active>
							<GeneralInfosForm :user="user"></GeneralInfosForm>
						</b-tab>
						<b-tab title="Update password">
							<PasswordForm :user="user"></PasswordForm>
						</b-tab>
						<b-tab title="Update profile picture">
							<AvatarForm :user="user"></AvatarForm>
						</b-tab>
					</b-tabs>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import store from '../../../store/index'
import GeneralInfosForm from './GeneralInfosForm.vue'
import PasswordForm from './PasswordForm.vue'
import AvatarForm from './AvatarForm.vue'

export default {
	name: 'profile',
	components: {
		PasswordForm,
		GeneralInfosForm,
		AvatarForm
	},
	async beforeRouteEnter(to, from, next) {
		await store.dispatch('users/fetchUsers')

		let user = store.getters['users/getUserById'](to.params.id)
		let auth = store.getters['auth/currentUser']

		if (auth.id != user.id && user.is_admin) {
			next({
				name: 'dashboard'
			})
		} else next()
	},
	computed: {
		user() {
			return this.$store.getters['users/getUserById'](
				this.$route.params.id
			)
		},
		normalizedName() {
			return this.user.civility
				? this.user.civility +
						' ' +
						this.user.lastname +
						' ' +
						this.user.firstname
				: this.user.lastname + ' ' + this.user.firstname
		}
	}
}
</script>