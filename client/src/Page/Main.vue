<template>
	<div class="about">
		<h1>Авторизован</h1>
		<button @click="getListUsers">Получить пользователей</button>
		<div v-for="user in users" :key="user._id">
			{{ user.email }}
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserService from '@/services/userService/user.service';
import userLoginDto from '@/services/userService/user.dto';

export default defineComponent({
	name: 'main-page',
	data() {
		return {
			users: [] as userLoginDto[],
		};
	},
	methods: {
		async getListUsers(): Promise<void> {
			let res = await UserService.getAllUsers();
			this.users = res.data;
		},
	},
});
</script>
