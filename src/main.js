import Vue from 'vue';
import App from './App';
import router from './route';
import axios from 'axios';
import './less/index';


Vue.config.debug = true;
Vue.prototype.http = axios;

const app = new Vue({
  router,
  ...App
}).$mount('#app');
