import { createStore } from 'vuex';

export default createStore({
	state: {
		baseUrl: 'http://localhost:5000/api',
	},
	getters: {
		getBaseUrl(state) {
			return state.baseUrl;
		},
	},
	mutations: {},
	actions: {},
	modules: {},
});
