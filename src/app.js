import Vue from 'vue';
import { sync } from 'vuex-router-sync';
// import VueValidator from 'vue-validator';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import store from './vuex/store';
import router from './router';

// Vue.use(VueValidator);
Vue.use(VeeValidate);

sync(store, router);

const app = new Vue({
  router,
  store,
  ...App,
});

export { app, router, store };
