<template>
	<div>
		<b-modal id="confirm-delete" centered title="Confirm deletion" v-model="isOpen">
			<template v-slot:modal-header>
				<h5 class="modal-tite">Confirm deletion</h5>
				<button class="close" type="button" @click="onCancel">
					<font-awesome-icon :icon="['fas', 'times']" size="xs"></font-awesome-icon>
				</button>
			</template>
			<p class="my-2">
				<slot name="message">Do you really want to delete this item?</slot>
			</p>
			<template v-slot:modal-footer>
				<button class="btn btn-secondary" @click="onCancel">Cancel</button>

				<button class="btn btn-danger" @click="onConfirm">
					<span class="btn-icon">
						<font-awesome-icon :icon="['far', 'trash-alt']"></font-awesome-icon>
					</span>
					Delete
				</button>
			</template>
		</b-modal>
	</div>
</template>

<script>
export default {
	name: 'confirm-delete-modal',
	computed: {
		isOpen() {
			return this.$store.getters['DeleteConfirmation/isOpen']
		}
	},
	methods: {
		onCancel() {
			this.$store.commit('DeleteConfirmation/HIDE')
		},
		onConfirm() {
			this.$store.commit('DeleteConfirmation/CONFIRM_DELETE')
		}
	}
}
</script>