<template>
	<section class="login dashboard">
		<div class="wrapper d-flex align-items-center auth login-full-bg">
			<div class="row w-100">
				<div class="col-lg-6 mx-auto">
					<div class="auth-form-dark text-left p-5">
						<h2>Login</h2>
						<h4 class="font-weight-light">Login to your account</h4>
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
									placeholder="Enter your email"
									v-model="form.email"
									required=""
								></b-form-input>
								<FormError
									:form="form"
									field="email"
								></FormError>
							</b-form-group>
							<b-form-group label="Password" label-for="password">
								<b-form-input
									id="password"
									type="password"
									class="form-control"
									name="password"
									v-model="form.password"
								></b-form-input>
								<FormError
									:form="form"
									field="password"
								></FormError>
							</b-form-group>
							<b-form-group label="">
								<b-form-checkbox
									id="remember"
									name="remember"
									v-model="form.remember"
									value="true"
									unchecked-value
									>Remember me</b-form-checkbox
								>
							</b-form-group>
							<div class="mt-5">
								<button
									class="btn btn-block btn-warning btn-lg font-weight-medium"
									type="submit"
									:disabled="form.errors.any()"
								>
									<span v-if="!form.busy">Login</span>
									<b-spinner
										small
										v-if="form.busy"
									></b-spinner>
								</button>
							</div>
							<div class="mt-3 text-center">
								<router-link
									:to="{ name: 'password.request' }"
									class="auth-link text-white"
								>
									Forgot password ?
								</router-link>
							</div>
						</b-form>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Form from '../../classes/Form.js'
export default {
	name: 'login',
	data() {
		return {
			form: new Form({
				email: '',
				password: '',
				remember: ''
			})
		}
	},
	methods: {
		submit() {
			this.form.busy = true
			axios.get('/sanctum/csrf-cookie').then(() => {
				this.form
					.submit('post', '/api/login')
					.then(response => {
						this.$store.dispatch('auth/login')
						this.$router.push({ name: 'dashboard' })
					})
					.catch(error => {
						console.log(error)
					})
					.finally(() => {
						this.form.busy = false
					})
			})
		}
	}
}
</script>
