import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../Page/LoginPage.vue';
// import about from '../views/AboutView.vue';

const routes = [
	{
		path: '/',
		name: 'login',
		component: LoginPage,
	},
	{
		path: '/about',
		name: 'about',
		// component: about,
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../Page/AboutView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
