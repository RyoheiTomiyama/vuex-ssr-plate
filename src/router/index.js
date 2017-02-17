import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import About from '../components/About';
import Counter from '../components/Counter';
import Topics from '../components/Topics';
import Login from '../components/Login';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'index', component: Home },
    { path: '/Topics', name: 'topic', component: Topics },
    { path: '/Counter', name: 'counter', component: Counter },
    { path: '/About', name: 'about', component: About },
    { path: '/login', name: 'login', component: Login },
  ],
});

export default router;
