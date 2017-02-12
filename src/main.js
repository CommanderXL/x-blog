import Vue from 'vue';
import Router from 'vue-router';
import App from './App';
import router from './route';


Vue.config.debug = true;

const app = new Vue({
  router,
  ...App
  //render: h => h(App)
}).$mount('#app');

//export default app;