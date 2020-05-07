<template>
	<div class="row">
		<div class="col-12 grid-margin">
			<div class="card">
				<div class="card-body">
					<h5 class="card-title mb-4">Add a new user</h5>
					<b-form
						@submit.prevent="submit"
						@change.prevent="form.errors.clear($event.target.name)"
						@keyup.prevent="form.errors.clear($event.target.name)"
					>
						<b-form-group
							label-cols="2"
							label="Civiliy"
							label-for="civility"
						>
							<b-form-select
								v-model="form.civility"
								:options="civilities"
								class="form-control"
								name="civility"
								id="civility"
							></b-form-select>
							<FormError
								:form="form"
								field="civility"
							></FormError>
						</b-form-group>

						<div class="form-row">
							<div class="col-6">
								<b-form-group
									label="Firstname"
									label-for="firstname"
									label-cols="4"
								>
									<b-form-input
										id="firstname"
										type="text"
										name="firstname"
										class="form-control"
										v-model="form.firstname"
										placeholder="Enter firstname"
									></b-form-input>
									<FormError
										:form="form"
										field="firstname"
									></FormError>
								</b-form-group>
							</div>
							<div class="col-6">
								<b-form-group
									label="Lastname"
									label-for="lastname"
									label-cols="4"
								>
									<b-form-input
										id="lastname"
										type="text"
										name="lastname"
										class="form-control"
										v-model="form.lastname"
										placeholder="Enter lastname"
									></b-form-input>
									<FormError
										:form="form"
										field="lastname"
									></FormError>
								</b-form-group>
							</div>
						</div>

						<div class="form-row">
							<div class="col-6">
								<b-form-group
									label="Birthdate"
									label-for="birthdate"
									label-cols="4"
								>
									<date-pick
										v-model="form.birthdate"
										:format="'DD/MM/YYYY'"
										:input-attributes="{
											name: 'birthdate',
											class: 'form-control',
											id: 'birthdate',
											placeholder: 'Enter birthdate'
										}"
										:selectableYearRange="{
											from: 1890,
											to: currentYear
										}"
										:isDateDisabled="isFutureDate"
									></date-pick>
									<FormError
										:form="form"
										field="birthdate"
									></FormError>
								</b-form-group>
							</div>
							<div class="col-6">
								<b-form-group
									label="Gender"
									label-for="gender"
									label-cols="4"
								>
									<b-form-select
										v-model="form.gender"
										:options="['Male', 'Female']"
										name="gender"
										id="gender"
										class="form-control"
									></b-form-select>
									<FormError
										:form="form"
										field="gender"
									></FormError>
								</b-form-group>
							</div>
						</div>

						<b-form-group
							label="Email"
							label-for="email"
							label-cols="2"
						>
							<b-form-input
								id="email"
								type="email"
								name="email"
								class="form-control"
								v-model="form.email"
								placeholder="Enter email"
							></b-form-input>
							<FormError :form="form" field="email"></FormError>
						</b-form-group>

						<b-form-group
							label="Type"
							label-for="type"
							label-cols="2"
						>
							<b-form-radio-group
								id="type"
								v-model="form.is_admin"
								:options="userTypes"
								name="is_admin"
							></b-form-radio-group>
							<FormError
								:form="form"
								field="is_admin"
							></FormError>
						</b-form-group>

						<b-form-group
							label="Password"
							label-for="password"
							label-cols="2"
						>
							<b-form-input
								id="password"
								type="password"
								class="form-control"
								placeholder="Password"
								name="password"
								v-model="form.password"
							></b-form-input>
							<FormError
								:form="form"
								field="password"
							></FormError>
						</b-form-group>

						<b-form-group
							label="Confirm password"
							label-for="password_confirmation"
							label-cols="2"
						>
							<b-form-input
								id="password_confirmation"
								type="password"
								class="form-control"
								placeholder="Confirm password"
								name="password_confirmation"
								v-model="form.password_confirmation"
							></b-form-input>
							<FormError
								:form="form"
								field="password_confirmation"
							></FormError>
						</b-form-group>

						<b-form-group>
							<b-form-checkbox
								id="notify_per_mail"
								v-model="form.notify_per_mail"
								name="notify_per_mail"
								value="1"
								unchecked-value="0"
								>Notify the user per email</b-form-checkbox
							>
						</b-form-group>

						<div class="row justify-content-end">
							<button type="submit" class="btn btn-success">
								<span v-if="!form.busy">Submit</span>
								<b-spinner small v-if="form.busy"></b-spinner>
							</button>
						</div>
					</b-form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Form from '@/classes/Form.js'
import DatePick from 'vue-date-pick'
import 'vue-date-pick/dist/vueDatePick.css'
export default {
	name: 'createUser',
	components: {
		DatePick
	},
	data() {
		return {
			form: new Form({
				email: '',
				civility: '',
				firstname: '',
				lastname: '',
				birthdate: '',
				gender: '',
				is_admin: '0',
				password: '',
				password_confirmation: '',
				notify_per_mail: '0'
			}),
			civilities: ['', 'Mr.', 'Mrs.', 'Dr.', 'Prof.', 'Miss.'],
			currentYear: new Date().getFullYear(),
			userTypes: [
				{ text: 'User', value: '0' },
				{ text: 'Administrator', value: '1' }
			]
		}
	},
	methods: {
		submit() {
			this.form
				.submit('post', '/api/users')
				.then(({ data }) => {
					this.$store.dispatch('users/addUser', data)
					this.$store.dispatch(
						'feedbacks/addFeedback',
						{
							message: 'User added successfully.',
							type: 'success'
						},
						{ root: true }
					)
					this.form.busy = false
					this.form.reset()
				})
				.catch(error => {
					console.log(error)
					this.form.busy = false
				})
		},
		isFutureDate(date) {
			const currentDate = new Date()
			return date > currentDate
		}
	}
}
</script>

<style>
.vdpComponent {
	display: block;
}
</style>
