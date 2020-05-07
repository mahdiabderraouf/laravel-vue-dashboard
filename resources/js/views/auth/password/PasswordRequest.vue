<template>
	<section class="login dashboard">
		<div class="wrapper d-flex align-items-center auth login-full-bg">
			<div class="row w-100">
				<div class="col-lg-6 mx-auto">
					<div class="auth-form-dark text-left p-5">
						<h2>Reset password</h2>
						<h4 class="font-weight-light">Enter your email</h4>
						<b-form
							class="pt-5"
							@submit.prevent="submit"
							@keyup.prevent="
								form.errors.clear($event.target.name)
							"
						>
							<b-form-group label="Email" label-for="email">
								<b-form-input
									id="email"
									type="email"
									name="email"
									class="form-control"
									placeholder="Email"
									v-model="form.email"
								></b-form-input>
								<FormError
									:form="form"
									field="email"
								></FormError>
							</b-form-group>
							<div class="mt-5">
								<button
									class="btn btn-block btn-warning btn-lg font-weight-medium"
									type="submit"
									:disabled="form.errors.any()"
								>
									<span v-if="!form.busy"
										>Send Password Reset Link</span
									>
									<b-spinner
										small
										v-if="form.busy"
									></b-spinner>
								</button>
							</div>
						</b-form>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Form from '../../../classes/Form'
export default {
	name: 'password-request',
	data() {
		return {
			form: new Form({
				email: ''
			})
		}
	},
	methods: {
		submit() {
			this.form
				.submit('post', '/api/password/email')
				.then(response => {
					this.$store.dispatch('feedbacks/addFeedback', {
						message: response.data.message,
						type: 'success'
					})
				})
				.catch(error => {})
				.finally(() => (this.form.busy = false))
		}
	}
}
</script>
