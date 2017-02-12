<template>
  <div class="index-page">
    <div class="info-container">
      <div class="avatar-box">

      </div>
      <div class="nav-box">
        <p class="nav-list">
          <router-link class="nav-item" to="/post">文章</router-link>
          <router-link class="nav-item" to="/tags">标签</router-link>
          <router-link class="nav-item" to="/archive">归档</router-link>
          <router-link class="nav-item" to="/about">关于</router-link>
        </p>
      </div>
    </div>
    <!--this is index-page
    <router-link to="/foo">foo</router-link>
    <router-link to="/bar">bar</router-link>-->
  </div>
</template>
<script>
  const COMPONENT_NAME = 'index-page';

  export default {
    name: COMPONENT_NAME
  }
</script>
<style lang="less">
  .index-page {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('../images/Shapes.jpg') no-repeat;
    background-size: cover;
  }

  .info-container {
    position: absolute;
    top: 35%;
    left: 50%;
    width: 300px;
    height: 150px;
    transform: translate(-50%, -30%);
    text-align: center;
  }

  .avatar-box {
    display: inline-block;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    border: 1px solid #e3e3e3;
    background: url('../images/avatar.png') no-repeat;
    background-size: cover;
    margin-bottom: 20px;
  }

  .nav-list {
    display: flex;
    .nav-item {
      flex: 1;
      cursor: pointer;
      color: #fff;
    }
  }

</style>