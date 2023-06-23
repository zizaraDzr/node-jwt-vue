<template>
	<!-- <nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</nav> -->
	<router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthService from './services/AuthService/AuthService';
import { IAuthResponse } from '@/services/AuthService/AuthResponse';

export default defineComponent({
	props: {
		msg: String,
	},
	data() {
		return {};
	},
	methods: {
		async authUser(): Promise<IAuthResponse> {
			let res = await AuthService.login('asd', 'asdasd');
			return res.data;
		},
	},
});
</script>
<style>
body,
html {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	overflow: hidden;
	font-family: 'Lato', sans-serif;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
