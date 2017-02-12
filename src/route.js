import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from './pages/index.vue';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: IndexPage
    },
    {
      path: '/foo',
      name: 'foo',
      component: {
        template: '<div>Foo</div>'
      }
    },
    {
      path: '/bar',
      name: 'bar',
      component: {
        template: '<div>Bar</div>'
      }
    }
  ]
});