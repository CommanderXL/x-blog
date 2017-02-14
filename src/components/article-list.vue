<template>
  <article class="article-list">
    <div class="article-content-box">
      <p class="publish-time">
        2017-2-13 发布
      </p>
      <div class="article-content">
        <h3 class="article-title">Webpack2异步加载及分包套路</h3>
        <p class="article-des">
          大家快来围观啊
        </p>
      </div>
      <div class="article-tags">
        <ul class="tag-ul">
          <li class="tag-li">JS</li>
          <li class="tag-li">Html</li>
        </ul>
      </div>
    </div>
    <div class="article-img-box">
      <div class="article-img">
        <img src="../images/article.jpeg" alt="">
      </div>
    </div>
  </article>
</template>
<script>
  const COMPONENT_NAME = 'article-list';

  export default {
    name: COMPONENT_NAME
  }
</script>
<style lang="less">
  @import '../less/variable.less'; 

  .article-list {
    display: flex;
    max-width: 660px;
    min-height: 250px;
    padding: 10px 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border: 1px solid #e3e3e3;
  }
  
  .article-content-box {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  
  .publish-time {
    font-size: 12px;
    line-height: 35px;
    color: #333;
  }
  
  .article-content {
    flex: 1;
  }
  .article-title {
    font-size: 18px;
    font-weight: normal;
    color: #333;
    line-height: 1.4;
    margin-bottom: 11px;
  }

  .article-des {
    font-size: 16px;
    color: #333;
    line-height: 1.8;
    opacity: .8;
  }
    
  .article-img-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    .article-img {
      width: 100%;
    }
    img {
      width: 100%;
      max-height: 150px;
    }
  }

  .tag-ul {
    display: flex;
    .tag-li {
      width: 40px;
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      text-align: center;
      margin-right: 8px;
      background: @html-tag;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
      opacity: .7;
      transition: opacity .5s ease-in;
      &:hover {
        opacity: 1;
      }
    }
  }
  </style>