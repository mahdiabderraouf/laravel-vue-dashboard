<template>
	<b-form @submit.prevent="submit" @keyup.prevent="form.errors.clear()">
		<b-form-group label="Your current password" label-for="current_password" label-cols="3">
			<b-form-input
				id="current_password"
				type="password"
				class="form-control"
				name="current_password"
				v-model="form.current_password"
			></b-form-input>
			<FormError :form="form" field="current_password"></FormError>
		</b-form-group>

		<b-form-group label="New Password" label-for="password" label-cols="3">
			<b-form-input
				type="password"
				class="form-control"
				id="password"
				name="password"
				v-model="form.password"
			></b-form-input>
			<FormError :form="form" field="password"></FormError>
		</b-form-group>

		<b-form-group label="Confirm New Password" label-for="password_confirmation" label-cols="3">
			<b-form-input
				type="password"
				class="form-control"
				id="password_confirmation"
				name="password_confirmation"
				v-model="form.password_confirmation"
			></b-form-input>
			<FormError :form="form" field="password_confirmation"></FormError>
		</b-form-group>

		<div class="row justify-content-end">
			<button type="submit" class="btn btn-success">
				<span v-if="!form.busy">Submit</span>
				<b-spinner small v-if="form.busy"></b-spinner>
			</button>
		</div>
	</b-form>
</template>

<script>
import Form from '../../../classes/Form'

export default {
	name: 'PasswordForm',
	props: {
		user: {
			required: true,
			type: Object
		}
	},
	data() {
		return {
			form: new Form({
				current_password: '',
				password: '',
				password_confirmation: ''
			})
		}
	},
	methods: {
		submit() {
			this.form
				.submit('patch', '/api/users/password/' + this.user.id)
				.then(({ data }) => {
					this.$store.dispatch('users/updateUser', data)
				})
				.catch(error => {})
				.finally(() => {
					this.form.busy = false
				})
		}
	}
}
</script>
