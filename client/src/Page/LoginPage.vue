<template>
	<div class="home">
		<div class="modal">
			<div class="modal_content">
				<label for="login">login</label>
				<input type="text" name="login" id="login" />
				<label for="password">password</label>
				<input type="text" name="password" id="password" />
				<button>Войти</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'login-page',
});
</script>

<style scoped>
.modal {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(31, 30, 28, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
}
.modal_content {
	width: 350px;
	min-height: 20vh;
	background-color: rgb(196, 209, 209);
	border-radius: 10px;
}
</style>
