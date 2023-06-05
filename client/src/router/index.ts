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

const routes = [
	{
		path: '/',
		name: 'main',
		component: Main,
		meta: { requiresAuth: true },
	},
	{
		path: '/login',
		name: 'login',
		component: LoginPage,
		meta: { requiresAuth: false },
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

router.beforeEach((to, from, next) => {
	const isAuthenticated = localStorage.getItem('tokenNode') !== null;

	if (to.meta.requiresAuth && !isAuthenticated) {
		// Если маршрут требует авторизации, но токен отсутствует, перенаправляем на страницу авторизации
		next('/login');
	} else if (!to.meta.requiresAuth && isAuthenticated) {
		// Если маршрут не требует авторизации, но токен присутствует, перенаправляем на главную страницу
		next('/');
	} else {
		// В остальных случаях просто продолжаем навигацию
		next();
	}
});

export default router;
