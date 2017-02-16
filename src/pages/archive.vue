<template>
  <article class="archive-page">
    this is archive page
  </article>
</template>
<script>
  const COMPONENT_NAME = 'archiver-page';

  export default {
    name: COMPONENT_NAME,
    data() {
      return {

      }
    },
    mounted() {
      this.http.get('/api/posts')
        .then((res) => {
          console.log(res);
        })
    }
  }
</script>
<style lang="less">

</style>