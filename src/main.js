import Vue from 'vue';
import App from './App';
import router from './route';
import axios from 'axios';
import './less/index';
const VueI18n = require('vue-i18n');


Vue.config.debug = true;
Vue.prototype.http = axios;

var locales = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

Vue.use(VueI18n, {
  lang: 'ja',
  locales: locales
});


Vue.config.lang = 'ja';
Object.keys(locales).forEach(lang => Vue.locale(lang, locales[lang]))


const app = new Vue({
  router,
  ...App
}).$mount('#app');
