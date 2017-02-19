<template>
  <article class="post-page">
    <article-list 
      v-for="art in articleList"
      :article="art"
      >
    </article-list>
  </article>
</template>

<script>
  import ArticleList from 'components/article-list.vue';

  const COMPONENT_NAME = 'post-page';

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        articleList: []
      }
    },
    mounted() {
      this.http.get('/api/post')
        .then(res => {
          this.articleList = res.data.data;
        })
    },
    components: {
      ArticleList
    }
  }
</script>

<style lang="less">
  .post-page {
    padding: 30px;
  }
</style>