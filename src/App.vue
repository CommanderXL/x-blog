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
<style>
  #app {
    color: red;
  }
</style>