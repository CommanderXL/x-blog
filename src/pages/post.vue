<template>
  <div class="post-page">
    <article-list 
      v-for="art in articleList">
    </article-list>
  </div>
</template>

<script>
  import ArticleList from 'components/article-list.vue';

  const COMPONENT_NAME = 'post-page';

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        articleList: [1, 2, 3]
      }
    },
    components: {
      ArticleList
    }
  }
</script>

<style lang="less">
  .post-page {

  }
</style>