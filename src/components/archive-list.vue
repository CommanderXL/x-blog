<template>
  <article>
    <h2 class="archive-time">
      {{archiveItem.time}}
    </h2>
    <header class="post-header" v-for="post in archiveItem.post_list">
      <h1 class="post-title">
        {{post.title}}
      </h1>
      <p class="post-time">{{post.time}}</p>
    </header>
  </article>
</template>

<script>
  const COMPONENT_NAME = "archive-list";

  export default {
    name: COMPONENT_NAME,
    props: [
      "archiveItem"
    ]
  }
</script>

<style lang="less">
  .archive-time {
    position: relative;
    font-size: 24px;
    margin: 60px 0 15px 20px;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -24px;
      margin-top: -4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #bbb;
    }
  }
  
  .post-header {
    position: relative;
    margin: 30px 0;
    border-bottom: 1px dashed #ccc;
    line-height: 32px;
    transition: all .2s ease-in;
    cursor: pointer;
    .post-title {
      margin-left: 60px;
      font-size: 16px;
    }
    .post-time {
      position: absolute;
      font-size: 12px;
      left: 20px;
      top: 1px;
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      margin-top: -4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      left: -4px;
      background: #bbb;
      transition: all .2s ease-in;
    }
    &:hover {
      border-bottom-color: #333;
      &::before {
        background: #333;
      }
    }
  }
</style>