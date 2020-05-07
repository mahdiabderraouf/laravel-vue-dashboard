<template>
	<b-form
		@submit.prevent="submit"
		@change.prevent="form.errors.clear($event.target.name)"
		@keyup.prevent="form.errors.clear($event.target.name)"
	>
		<b-form-group label-cols="3" label="Civiliy" label-for="civility">
			<b-form-select
				v-model="form.civility"
				:options="civilities"
				class="form-control"
				name="civility"
				id="civility"
			></b-form-select>
			<FormError :form="form" field="civility"></FormError>
		</b-form-group>

		<b-form-group label-cols="3" label="Firstname" label-for="firstname">
			<b-form-input
				type="text"
				name="firstname"
				class="form-control"
				id="firstname"
				v-model="form.firstname"
				placeholder="Enter firstname"
			></b-form-input>
			<FormError :form="form" field="firstname"></FormError>
		</b-form-group>

		<b-form-group label-cols="3" label="Lastname" label-for="lastname">
			<b-form-input
				type="text"
				name="lastname"
				class="form-control"
				id="lastname"
				v-model="form.lastname"
				placeholder="Enter lastname"
			></b-form-input>
			<FormError :form="form" field="lastname"></FormError>
		</b-form-group>

		<b-form-group label-cols="3" label="Email" label-for="email">
			<b-form-input
				type="email"
				name="email"
				class="form-control"
				id="email"
				v-model="form.email"
				placeholder="Enter email"
			></b-form-input>
			<FormError :form="form" field="email"></FormError>
		</b-form-group>

		<b-form-group label-cols="3" label="Birthdate" label-for="birthdate">
			<date-pick
				v-model="form.birthdate"
				:format="'DD/MM/YYYY'"
				:input-attributes="{
					name: 'birthdate',
					class: 'form-control',
					id: 'birthdate',
					placeholder: 'Enter birthdate'
				}"
				:selectableYearRange="{ from: 1890, to: currentYear }"
				:isDateDisabled="isFutureDate"
			></date-pick>
			<FormError :form="form" field="birthdate"></FormError>
		</b-form-group>

		<b-form-group label-cols="3" label="Gender" label-for="gender">
			<b-form-select
				v-model="form.gender"
				:options="['Male', 'Female']"
				name="gender"
				id="gender"
				class="form-control"
			></b-form-select>
			<FormError :form="form" field="gender"></FormError>
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
import DatePick from 'vue-date-pick'
import 'vue-date-pick/dist/vueDatePick.css'

export default {
	name: 'GeneralInfosForm',
	components: {
		DatePick
	},
	props: {
		user: {
			required: true,
			type: Object
		}
	},
	computed: {
		form() {
			return new Form({
				email: this.user.email,
				civility: this.user.civility,
				firstname: this.user.firstname,
				lastname: this.user.lastname,
				birthdate: this.user.birthdate,
				gender: this.user.gender
			})
		}
	},
	data() {
		return {
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
				.submit('patch', '/api/users/' + this.user.id)
				.then(({ data }) => {
					this.$store.dispatch('users/updateUser', data)
				})
				.catch(error => {})
				.finally(() => {
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
