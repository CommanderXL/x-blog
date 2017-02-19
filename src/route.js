import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from './pages/index.vue';
import PostPage from './pages/post.vue';
import TagsPage from './pages/tags.vue';
import AboutPage from './pages/about.vue';
import ArchivePage from './pages/archive.vue';
import TagPage from './pages/tag-detail.vue';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: IndexPage
    },
    {
      path: '/post',
      name: 'post',
      component: PostPage
    },
    {
      path: '/tags',
      name: 'tags',
      component: TagsPage
    },
    // 动态路由匹配, 以下的路由规则可以匹配 /tags/webpack | /tags/html 等路由
    // 然后用TagPage组件去进行页面的渲染
    {
      path: '/tags/:tag',
      name: 'tagDetail',
      component: TagPage
    },
    {
      path: '/archive',
      name: 'archive',
      component: ArchivePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    }
  ]
});