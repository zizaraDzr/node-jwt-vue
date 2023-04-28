<template>
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</nav>
	<router-view />
	<button @click="getListUsers">Получить пользователей</button>
	<div v-for="user in users" :key="user._id">
		{{ user.email }}
	</div>
</template>

<script>
import axios from 'axios';
export default {
	props: {
		msg: String,
	},
	data() {
		return {
			users: [],
		};
	},
	methods: {
		getListUsers() {
			axios.get('http://localhost:5000/api/users').then((val) => {
				this.users.push(...val.data);
			});
		},
	},
};
</script>
<style>
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
