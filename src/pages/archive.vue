<template>
  <article class="archive-page">
    <div class="archive-container">
      <div class="archive-box">
        <archive-list v-for="archive in archiveList"
          :archive-item="archive"
        >
        </archive-list>
      </div>
    </div>
  </article>
</template>
<script>
  import ArchiveList from 'components/archive-list.vue';

  const COMPONENT_NAME = 'archiver-page';

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        archiveList: []
      }
    },
    mounted() {
      this.http.get('/api/archive')
        .then(res => {
          this.archiveList = res.data.data;
        })
    },
    components: {
      ArchiveList
    }
  }
</script>
<style lang="less">
  .archive-container {
    width: 700px;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
  }
  .archive-box {
    position: relative;
    height: 500px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: -10px;
      left: -2px;
      width: 4px;
      background: #f5f5f5;
    }
  }
</style>