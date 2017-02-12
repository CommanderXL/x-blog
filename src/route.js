import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
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