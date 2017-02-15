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
    components: {}
  }
</script>
<style lang="less">
  html,
  body {
    height: 100%;
    font-family: pingfang;
  }
  #app {
    height: 100%;
  }
  .app-view {
    height: 100%;
  }
</style>