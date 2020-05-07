<template>
	<div>
		<div class="row justify-content-between mb-3">
			<div class="col-2">
				<b-form-group label="Per page" label-cols="auto" label-for="perPageSelect" class="mb-0">
					<b-form-select
						class="form-control"
						v-model="perPage"
						id="perPageSelect"
						:options="perPageOptions"
					></b-form-select>
				</b-form-group>
			</div>
			<div class="col-4">
				<b-form-group label="Search :" label-cols="auto" label-for="filterInput" class="mb-0">
					<b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
				</b-form-group>
			</div>
		</div>
		<b-table
			class="mb-3"
			responsive
			striped
			hover
			show-empty
			:items="items"
			:fields="fields"
			:current-page="currentPage"
			:per-page="perPage"
			:filter="filter"
			:sort-by="sortBy"
			@filtered="onFiltered"
		>
			<template v-for="slotName in Object.keys($scopedSlots)" v-slot:[slotName]="slotScope">
				<slot :name="slotName" v-bind="slotScope"></slot>
			</template>
		</b-table>
		<div class="row justify-content-between align-items-center">
			<div class="col-5">
				Showing {{ from }} to {{ to }} of
				{{ totalRows }} entries
			</div>
			<div class="col-5">
				<b-pagination
					v-model="currentPage"
					:total-rows="totalRows"
					:per-page="perPage"
					align="fill"
					class="my-0 flat"
				></b-pagination>
			</div>
			<div class="col-2">
				<b-form-group label="Jump to " label-cols="auto" label-for="jumpTo" class="mb-0">
					<b-form-input
						@keyup.enter="currentPage = $event.target.value"
						type="number"
						min="1"
						id="jumpTo"
					></b-form-input>
				</b-form-group>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'data-table',
	props: {
		items: {
			type: Array,
			required: true
		},
		fields: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			totalRows: 1,
			currentPage: 1,
			perPage: 10,
			perPageOptions: [5, 10, 15],
			filter: null,
			sortBy: 'name'
		}
	},
	computed: {
		from() {
			return this.to - this.perPage + 1
		},
		to() {
			return this.currentPage * this.perPage > this.totalRows
				? this.totalRows
				: this.currentPage * this.perPage
		}
	},
	methods: {
		onFiltered(filteredItems) {
			// Trigger pagination to update the number of buttons/pages due to filtering
			this.totalRows = filteredItems.length
			this.currentPage = 1
		}
	},
	mounted() {
		this.totalRows = this.items.length
	}
}
</script>