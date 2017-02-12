<template>
  <div class="index-page">
    this is index-page
    <router-link to="/foo">foo</router-link>
    <router-link to="/bar">bar</router-link>
  </div>
</template>
<script>

  const COMPONENT_NAME = 'index-page';

  export default {
    name: COMPONENT_NAME
  }
</script>

<style>

</style>