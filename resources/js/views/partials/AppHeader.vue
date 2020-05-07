<template>
	<b-navbar class="fixed-top" toggleable="md" type="dark" variant="info">
		<div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
			<a class="navbar-brand brand-logo" href="/demo/star-admin-vue/">
				<img src="/images/logo.svg" alt="logo" />
			</a>
			<a class="navbar-brand brand-logo-mini" href="/demo/star-admin-vue/">
				<img src="/images/logo-mini.svg" alt="logo" />
			</a>
		</div>
		<div class="navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0">
			<!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto">
				<b-nav-item-dropdown right class="preview-list">
					<template slot="button-content">
						<div class="count-indicator">
							<span class="icon">
								<font-awesome-icon :icon="['fas', 'bell']"></font-awesome-icon>
							</span>
							<span class="count">7</span>
						</div>
					</template>
					<b-dropdown-item class="preview-item" href="#">
						<p class="mb-0 font-weight-normal float-left">You have 4 new notifications</p>
						<span class="badge badge-pill badge-warning">View all</span>
					</b-dropdown-item>
					<b-dropdown-item class="preview-item" href="#">
						<div class="preview-thumbnail">
							<div class="preview-icon bg-success">
								<i class="mdi mdi-alert-circle-outline mx-0"></i>
							</div>
						</div>
						<div class="preview-item-content">
							<h6 class="preview-subject font-weight-medium">Application Error</h6>
							<p class="font-weight-light small-text">Just now</p>
						</div>
					</b-dropdown-item>
					<b-dropdown-item class="preview-item" href="#">
						<div class="preview-thumbnail">
							<div class="preview-icon bg-warning">
								<i class="mdi mdi-comment-text-outline mx-0"></i>
							</div>
						</div>
						<div class="preview-item-content">
							<h6 class="preview-subject font-weight-medium">Settings</h6>
							<p class="font-weight-light small-text">Private message</p>
						</div>
					</b-dropdown-item>
					<b-dropdown-item class="preview-item" href="#">
						<div class="preview-thumbnail">
							<div class="preview-icon bg-info">
								<i class="mdi mdi-email-outline mx-0"></i>
							</div>
						</div>
						<div class="preview-item-content">
							<h6 class="preview-subject font-weight-medium">New user registration</h6>
							<p class="font-weight-light small-text">2 days ago</p>
						</div>
					</b-dropdown-item>
				</b-nav-item-dropdown>
				<b-nav-item-dropdown right class="preview-list">
					<template slot="button-content">
						<img :src="user.avatar" alt="profile image" class="img-xs rounded-circle" />
					</template>
					<b-dropdown-item
						class="preview-item flex-wrap"
						:to="{
									name: 'users.edit',
									params: { id: user.id }
								}"
					>Profile</b-dropdown-item>
					<b-dropdown-item href="#" class="preview-item flex-wrap" @click.prevent="logout">Signout</b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
			<button
				class="navbar-toggler navbar-toggler-right align-self-center"
				type="button"
				@click="collapedMobileSidebar"
			>
				<span>
					<font-awesome-icon :icon="['fas', 'bars']"></font-awesome-icon>
				</span>
			</button>
		</div>
	</b-navbar>
</template>

<script>
export default {
	name: 'app-header',
	computed: {
		user() {
			return this.$store.getters['auth/currentUser']
		}
	},
	methods: {
		collapedMobileSidebar() {
			this.$store.dispatch('toggleSideBar')
		},
		async logout() {
			await this.$store.dispatch('auth/logout')

			this.$router.push({ name: 'login' })
		}
	}
}
</script>
