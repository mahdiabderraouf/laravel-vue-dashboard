<template>
	<div class="row">
		<div class="col-12 grid-margin">
			<div class="card">
				<div class="card-body">
					<h5 class="card-title mb-4">Users</h5>
					<DataTable :items="users" :fields="fields">
						<template v-slot:cell(name)="row">{{
							normalizedName(row)
						}}</template>

						<template v-slot:cell(is_admin)="row">
							{{ row.item.is_admin ? 'Admin' : 'User' }}
						</template>

						<template v-slot:cell(actions)="row">
							<router-link
								:to="{
									name: 'users.edit',
									params: { id: row.item.id }
								}"
								class="text-primary mr-2"
								v-if="!row.item.is_admin"
							>
								<font-awesome-icon
									:icon="['fas', 'pencil-alt']"
								></font-awesome-icon>
							</router-link>
							<a
								class="text-danger"
								href="#"
								v-b-modal="'confirm-delete'"
								@click="showConfirmModal(row.item.id)"
								v-if="!row.item.is_admin"
							>
								<font-awesome-icon
									:icon="['far', 'trash-alt']"
								></font-awesome-icon>
							</a>
						</template>
					</DataTable>

					<ConfirmDeleteModal>
						<template v-slot:message>
							Do you really want to delete this user?
						</template>
					</ConfirmDeleteModal>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ConfirmDeleteModal from '../../../components/ConfirmDeleteModal.vue'
import DataTable from '../../../components/DataTable.vue'
import store from '../../../store/index'
export default {
	name: 'UsersList',
	components: {
		DataTable,
		ConfirmDeleteModal
	},
	async beforeRouteEnter(to, from, next) {
		await store.dispatch('users/fetchUsers')

		next()
	},
	data() {
		return {
			fields: [
				{ key: 'name', label: 'Fullname', sortable: true },
				{ key: 'email', sortable: true },
				{ key: 'birthdate', sortable: true },
				{ key: 'gender', sortable: true },
				{ key: 'is_admin', label: 'Type', sortable: true },
				{ key: 'updated_at', label: 'Last update', sortable: true },
				{ key: 'actions', label: '', class: 'actions' }
			]
		}
	},
	computed: {
		authId() {
			return this.$store.getters['auth/authId']
		},
		users() {
			return this.$store.getters['users/users'].filter(
				user => user.id != this.authId
			)
		},
		confirmed() {
			return this.$store.getters['DeleteConfirmation/confirmed']
		},
		itemToDeleteId() {
			return this.$store.getters['DeleteConfirmation/itemToDeleteId']
		}
	},
	methods: {
		deleteUser() {
			if (this.itemToDeleteId)
				this.$store
					.dispatch('users/deleteUser', this.itemToDeleteId)
					.then(response => {
						this.$store.commit('DeleteConfirmation/HIDE')
					})
		},
		showConfirmModal(id) {
			this.$store.commit('DeleteConfirmation/SET_ITEM_TO_DELETE_ID', id)
			this.$store.commit('DeleteConfirmation/SHOW')
		},
		normalizedName(row) {
			return row.item.civility
				? row.item.civility +
						' ' +
						row.item.lastname +
						' ' +
						row.item.firstname
				: row.item.lastname + ' ' + row.item.firstname
		}
	},
	watch: {
		confirmed() {
			if (this.confirmed) {
				this.deleteUser()
			}
		}
	}
}
</script>
