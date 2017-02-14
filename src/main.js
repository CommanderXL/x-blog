import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import router from './route';
import './less/index';


Vue.config.debug = true;

const app = new Vue({
  router,
  ...App
}).$mount('#app');
