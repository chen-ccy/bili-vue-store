<template>
  <div>
    <GoodsList :goods="recommend.data.list">
        
    </GoodsList>
  </div>
</template>

<script>
  import GoodsList from "@/components/content/goods/GoodsList";
  import GoodsListItem from "@/components/content/goods/GoodsListItem";
  export default {
    name: "DetailGoodsList",
    components: {GoodsList},
    props:{
      recommend:{
        type:Object,
        default(){
          return {}
        }
      },
      components:{
        GoodsList,
        GoodsListItem
      }
    }
  }
</script>

<style scoped>
img{
  width: 100%;
}
</style>