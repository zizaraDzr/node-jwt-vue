<template>
	<div class="home">
		<div class="modal">
			<div class="modal_content">
				<form>
					<div>
						<input type="text" name="login" id="login" />
						<label for="login">Логин</label>
					</div>
					<div>
						<input type="text" name="password" id="password" />
						<label for="password">Пароль</label>
					</div>
				</form>
				<div class="center">
					<button class="btn">
						<svg width="120px" height="40px" viewBox="0 0 120 40" class="border">
							<polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
							<polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
						</svg>
						<span>Войти</span>
					</button>
				</div>
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
	background: #5ca4ea;
	display: flex;
	align-items: center;
	justify-content: center;
}
.modal_content {
	width: 350px;
	min-height: 26vh;
	background-color: rgba(196, 209, 209, 0.2);
	border-radius: 10px;
	padding: 15px;
}
.modal_content div {
	display: flex;
	flex-direction: column-reverse;
	max-width: 20rem;
	margin: 0 auto;
}

input {
	border: none;
	padding: 0.6rem;
	margin-top: 2rem;
	font-size: 1rem;
	outline: none;
	border-radius: 10px;
}

label {
	color: #555454;
	transform: translateY(60px);
	transform-origin: left top;
	cursor: text;
	transition: all 0.7s;
}

input:focus {
	outline: 0.1rem solid #4a25ce;
}

input:focus ~ label {
	padding: 0;
	color: #181d1a;
	transform: scale(1.1) translateY(13px) translateX(-42%);
}

.modal_content .center {
	width: 100%;
	height: 40px;
	display: inline-block;
	text-align: right;
	margin-top: 28px;
}

.btn {
	width: 120px;
	height: 40px;
	cursor: pointer;
	background: transparent;
	border: 1px solid #91c9ff;
	outline: none;
	position: relative;

	transition: 1s ease-in-out;
}

svg {
	position: absolute;
	left: 0;
	top: 0;
	fill: none;
	stroke: #fff;
	stroke-dasharray: 150 480;
	stroke-dashoffset: 150;
	transition: 1s ease-in-out;
}

.btn:hover {
	transition: 1s ease-in-out;
	background: #4f95da;
}

.btn:hover svg {
	stroke-dashoffset: -480;
}

.btn span {
	color: white;
	font-size: 18px;
	font-weight: 100;
}
</style>
