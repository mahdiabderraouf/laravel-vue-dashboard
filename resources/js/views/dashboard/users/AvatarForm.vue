<template>
	<b-form @submit.prevent="updateAvatar" @keyup.prevent="form.errors.clear($event.target.name)">
		<b-form-group label="Choose a file" label-for="avatar">
			<b-form-file
				v-model="form.avatar"
				id="avatar"
				name="avatar"
				placeholder="Choose a file or drop it here..."
				drop-placeholder="Drop file here..."
			></b-form-file>
			<FormError :form="form" field="avatar"></FormError>
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
	name: 'AvatarForm',
	data() {
		return {
			form: new Form({
				avatar: null
			})
		}
	},
	props: {
		user: {
			required: true,
			type: Object
		}
	},
	methods: {
		updateAvatar() {
			this.form.busy = true

			let data = new FormData()
			data.append('avatar', this.form.avatar)
			data.append('_method', 'PATCH')

			axios
				.post('/api/users/avatar/' + this.user.id, data, {
					headers: {
						'content-type': 'multipart/form-data'
					}
				})
				.then(({ data }) => {
					this.$store.dispatch('users/updateUser', data)
					this.form.reset()
					this.form.busy = false
				})
				.catch(error => {
					this.form.busy = false
					this.form.onFail(error.response.data.errors)
				})
		}
	}
}
</script>
