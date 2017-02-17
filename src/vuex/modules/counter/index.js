import { INCREMENT, DECREMENT } from './type';

const state = {
  count: 0,
};

const getters = {
  // isAuth: state => !!state.info,
  count: state => state.count,
};

const actions = {
  [INCREMENT]({ state, commit, rootState }) {
    console.log('actions:', rootState.route);
    commit(INCREMENT);
  },
  [DECREMENT]({ state, commit, rootState }) {
    console.log('actions:', rootState.route);
    commit(DECREMENT);
  },

};

const mutations = {
  [INCREMENT](state) {
    // console.log('mutations:', state.route.params.id);
    state.count += 1;
  },
  [DECREMENT](state) {
    // console.log('mutations:', state.route.params.id);
    state.count -= 1;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
