<template>
  <div class="recomment-view">
    <div v-for="item in recommend" class="recomment-view-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div >{{item.title}}</div>
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommentView",
    props:{
      recommend:[]
    }
  }
</script>

<style scoped>
  .recomment-view{
    display: flex;
  }
  .recomment-view-item{
    padding: 10px;
    flex: 1;
    text-align: center;
  }
  .recomment-view-item img{
    width: 75%;
    margin-bottom: 5px;
  }
</style>