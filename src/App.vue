<template>
  <div id="app">
    This is xrene route
    <ul>
      <li><router-link to="/foo">foo</router-link></li>
      <li><router-link to="/bar">bar</router-link></li>
    </ul>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'hello world'
      }
    }
  }
</script>
<style>
  #app {
    color: red;
  }
</style>