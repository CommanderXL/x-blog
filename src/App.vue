<template>
  <div id="app">
    <router-view class="app-view"></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'hello world'
      }
    },
    components: {
    }
  }
</script>
<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
  }

  ul,ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  #app {
    height: 100%;
  }
</style>