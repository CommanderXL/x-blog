<template>
  <article class="about-page">
    <section class="about-box">
      <div class="about-header-container">
        <div class="avatar-container">
          <div class="avatar-box"></div>
          <div class="avatar-tips">Hello, 大家好。我是XRene</div>
        </div>
        
        <!--<div class="avatar-tips">
          Hello, 大家好。我是XRene。
        </div>-->
      </div>
      <div class="about-info-container">
        <div class="info-box">
          <div class="about-info-box">
            <div class="about-box-title">
              工作经历
            </div>
            <div class="about-timeline-box work-timeline">
              <p class="line-item">
                xxx soft engineer (xxxx.xx-xxxx.xx)
              </p>
              <p class="line-item">
                滴滴出行 FE (2016.7-至今)
              </p>
              <p class="line-item">
                百度 intership FE (2015.8-2016.3)
              </p>
            </div>
          </div>
          <div class="about-info-box">
            <div class="about-box-title">
              教育经历
            </div>
            <div class="about-timeline-box edu-timeline">
              <p class="line-item">
                北京林业大学 机械工程 硕士 (2014.9-2016.7)
              </p>
              <p class="line-item">
                太原理工大学 水利水电工程 学士 (2010.9-2014.7)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>
<script>
  const COMPONENT_NAME = 'about-page';

  export default {
    name: COMPONENT_NAME
  }
</script>
<style lang="less">
  .about-box {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 46%;
    left: 50%;
    width: 600px;
    height: 600px;
    transform: translate(-50%, -50%);
    //border: 1px solid red;
  }
  
  .about-header-container {
    position: relative;
    width: 100%;
    padding: 20px 0;
    .avatar-container {
      width: 200px;
      text-align: center;
    }
    .avatar-tips {
      position: absolute;
      padding: 10px;
      top: 50%;
      left: 190px;
      right: 70px;
      margin-top: -15px;
      border: 1px solid #333;
      border-radius: 4px;
      text-aligin: center;
      z-index: 10;
      &::before {
        content: "";
        position: absolute;
        left: -6px;
        top: 50%;
        width: 10px;
        height: 10px;
        margin-top: -5px;
        border: 1px solid #333;
        border-bottom: none;
        border-right: none;
        transform: rotate(-45deg);
        background: #fff;
        z-index: 20;
      }
    }
  }
  
  .about-info-container {
    flex: 1;
    width: 100%;
    .info-box {
      position: relative;
      height: 100%;
      /*&::before {
        content: "";
        position: absolute;
        top: 70px;
        bottom: 40px;
        left: 50%;
        width: 2px;
        background: #333;
      }*/
    }
  }
  
  .about-info-box {
    display: flex;
    height: 50%;
  }
  
  .about-box-title {
    box-sizing: border-box;
    width: 200px;
    text-align: center;
    padding: 20px;
    &::before {
      content: "";
      display: inline-block;
      width: 0;
      height: 100%;
      vertical-align: middle;
    }
  }
  
  .about-timeline-box {
    position: relative;
    flex: 1;
    &::before {
      content: "";
      position: absolute;
      top: 20px;
      left: 0;
      bottom: 20px;
      width: 2px;
      background: #333;
    }
    .line-item {
      position: absolute;
      padding: 2px 15px;
      height: 20px;
      line-height: 20px;
      margin-top: -10px;
      
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -5px;
        width: 12px;
        height: 12px;
        margin-top: -7px;
        border-radius: 50%;
        background: #333;
      }
    }
  }

  .work-timeline {
    .line-item {
      &:first-child {
        top: 25%;
      }
      &:nth-child(2) {
        top: 50%;
      }
      &:nth-child(3) {
        top: 75%;
      }
    }
  }
  .edu-timeline {
    .line-item {
      &:first-child {
        top: 33.33%;
      }
      &:nth-child(2) {
        top: 66.66%;
      }
    }
  }
</style>