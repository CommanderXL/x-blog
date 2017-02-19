<template>
  <article class="tags-page">
    <section class="tags-box">
      <p class="tags-title">目前共计有 {{tagList.length}} 个标签</p>
      <ul class="tags-ul">
        <li class="tags-li" v-for="tag in tagList">
          <router-link class="tag-href" :to='{name: "tagDetail", params: {tag: tag.text}}'>{{tag.text}}</router-link>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
  const COMPONENT_NAME = 'tags-page';

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        tagList: []
      }
    },
    mounted() {
      this.http.get('/api/tags')
        .then(res => {
          this.tagList = res.data.data;
        })
    }
  }
</script>

<style lang="less">
  .tags-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
  }
  .tags-title {
    padding: 10px 0;
    text-align: center;
    font-size: 18px;
  }
  .tags-ul {

  }
  .tags-li {
    display: inline-block;
    margin: 15px;
    text-align: center;
  }
  .tag-href {
    display: inline-block;
    font-size: 21px;
    border-bottom: 1px solid #e3e3e3;
    &:hover {
      border-bottom: 1px solid #000;
    }
  }
</style>