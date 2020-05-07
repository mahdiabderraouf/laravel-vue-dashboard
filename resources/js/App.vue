<template>
	<div>
		<router-view></router-view>

		<b-alert
			v-for="feedback in feedbacks"
			show
			dismissible
			class="feedback"
			:variant="feedback.type"
			v-bind:key="feedback.id"
		>{{ feedback.message }}</b-alert>
	</div>
</template>

<script>
export default {
	name: 'app',
	computed: {
		feedbacks() {
			return this.$store.getters['feedbacks/feedbacks']
		}
	}
}
</script>
