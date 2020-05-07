<template>
	<small
		class="form-help"
		:class="color"
		v-if="form.errors.has(field)"
		v-text="form.errors.get(field)"
	></small>
</template>

<script>
import Form from '../classes/Form'
export default {
	name: 'FormError',
	props: {
		form: {
			required: true,
			type: Form
		},
		field: {
			required: true,
			type: String
		},
		variant: {
			required: false,
			type: String,
			default: 'danger'
		}
	},
	computed: {
		color() {
			return 'text-' + this.variant
		}
	}
}
</script>
