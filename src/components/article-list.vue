<template>
  <article class="article-list">
    <div class="article-content-box">
      <p class="publish-time">
        {{article.time}} 发布
      </p>
      <div class="article-content">
        <h3 class="article-title">{{article.title}}</h3>
        <p class="article-des">
          {{article.des}}
        </p>
      </div>
      <div class="article-tags">
        <ul class="tag-ul">
          <li class="tag-li" v-for="item in article.tags">
            <router-link :to="{name: 'tagDetail', params: {tag: item}}">{{item}}</router-link>
          </li>
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
    name: COMPONENT_NAME,
    props: [
      "article"
    ]
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
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #fff;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
  </style>