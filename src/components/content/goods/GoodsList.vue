<template>
  <div class="goods-list">
    <GoodsListItem class="goods-list-item" v-for="item in goods" :goods-item="item"></GoodsListItem>
  </div>

</template>

<script>

  import GoodsListItem from "@/components/content/goods/GoodsListItem";

  export default {
    name: "GoodsList",
    components:{
      GoodsListItem
    },
    props:{
      goods:[],
      default() {
        return [];
      }
    }
  }
</script>

<style scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>