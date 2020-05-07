<template>
	<section class="app-sidebar">
		<nav class="sidebar sidebar-offcanvas" :class="sidebar" id="sidebar">
			<ul class="nav">
				<li class="nav-item nav-profile">
					<router-link
						:to="{
									name: 'users.edit',
									params: { id: user.id }
								}"
						class="nav-link"
					>
						<div class="profile-image">
							<img :src="user.avatar" alt="image" />
						</div>
						<div class="profile-name">
							<p class="name">{{ normalizedName }}</p>
							<p class="designation">{{ user.email }}</p>
						</div>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" :to="{ name: 'dashboard' }" exact>
						<span class="menu-icon">
							<font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon>
						</span>
						<span class="menu-title">Dashboard</span>
					</router-link>
				</li>
				<li class="nav-item" v-if="user.is_admin">
					<span class="nav-link" v-b-toggle="'users-sub-menu'">
						<span class="menu-icon">
							<font-awesome-icon :icon="['fas', 'users']"></font-awesome-icon>
						</span>
						<span class="menu-title">Users</span>
						<div class="menu-arrow">
							<font-awesome-icon :icon="['fas', 'chevron-right']"></font-awesome-icon>
						</div>
					</span>
					<b-collapse id="users-sub-menu">
						<ul class="nav flex-column sub-menu">
							<li class="nav-item">
								<router-link class="nav-link" :to="{ name: 'users' }" exact>Users list</router-link>
							</li>
							<li class="nav-item">
								<router-link class="nav-link" :to="{ name: 'users.create' }">Add a user</router-link>
							</li>
						</ul>
					</b-collapse>
				</li>
			</ul>
		</nav>
	</section>
</template>

<script>
export default {
	name: 'app-sidebar',
	computed: {
		sidebar() {
			return this.$store.getters.sidebar
		},
		user() {
			return this.$store.getters['auth/currentUser']
		},
		normalizedName() {
			return this.user.civility
				? this.user.civility +
						' ' +
						this.user.lastname +
						' ' +
						this.user.firstname
				: this.user.lastname + ' ' + this.user.firstname
		}
	}
}
</script>
