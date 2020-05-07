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
							<input type="hidden" name="token" v-model="form.token" />
							<b-form-group label="Email" label-for="email">
								<b-form-input
									type="email"
									name="email"
									class="form-control"
									id="email"
									placeholder="Email"
									v-model="form.email"
								></b-form-input>
								<FormError :form="form" field="email"></FormError>
							</b-form-group>

							<b-form-group label="Password" label-for="password">
								<b-form-input
									type="password"
									class="form-control"
									id="password"
									placeholder="Password"
									name="password"
									v-model="form.password"
								></b-form-input>
								<FormError :form="form" field="password"></FormError>
							</b-form-group>

							<b-form-group label="Confirm password" label-for="password">
								<b-form-input
									type="password"
									class="form-control"
									id="password_confirmation"
									placeholder="Password"
									name="password_confirmation"
									v-model="form.password_confirmation"
								></b-form-input>
								<FormError :form="form" field="password_confirmation"></FormError>
							</b-form-group>
							<div class="mt-5">
								<button
									class="btn btn-block btn-warning btn-lg font-weight-medium"
									type="submit"
									:disabled="form.errors.any()"
								>
									<span v-if="!form.busy">Reset Password</span>
									<b-spinner small v-if="form.busy"></b-spinner>
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
	name: 'password-reset',
	data() {
		return {
			form: new Form({
				email: this.$route.query.email,
				password: '',
				password_confirmation: '',
				token: this.$route.params.token
			})
		}
	},
	methods: {
		submit() {
			this.form
				.submit('post', '/api/password/reset')
				.then(response => {
					this.$store.dispatch('auth/login', response.data.message)
					this.$router.push({ name: 'dashboard' })
				})
				.catch(error => {})
				.finally(() => {
					this.form.busy = false
				})
		}
	}
}
</script>
