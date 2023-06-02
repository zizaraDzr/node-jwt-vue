import {
	createRouter,
	createWebHistory,
	NavigationGuardNext,
	RouteLocationNormalized,
} from 'vue-router';
import LoginPage from '../Page/LoginPage.vue';
import Main from '../Page/Main.vue';
// import about from '../views/AboutView.vue';

// const ifAuthenticated = (
// 	to: RouteLocationNormalized,
// 	from: RouteLocationNormalized,
// 	next: NavigationGuardNext,
// ) => {
// 	console.log(42);
// 	// if (localStorage.getItem('redirect_url')) {
// 	// 	next('/');
// 	// }
// 	return;
// };

const isAuthenticated = function () {
	console.log(localStorage.getItem('tokenNode'));
	if (localStorage.getItem('tokenNode')) {
		return true;
	}
	return false;
};

const routes = [
	{
		path: '/',
		name: 'main',
		component: Main,
	},
	{
		path: '/login',
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

// router.beforeEach((to, from, next) => {
// 	console.log(to);
// 	console.log(isAuthenticated());
// 	if (to.name !== 'main' && isAuthenticated()) {
// 		next({ name: 'main' });
// 	} else {
// 		next({ name: 'login' });
// 	}
// });

export default router;
