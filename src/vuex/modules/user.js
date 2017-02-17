const state = {
	info: null,
	login: {
		email: null,
		password: null,
	},
};

const getters = {
	isAuth: state => !!state.info
};

const action = {
};

const mutations = {

};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};