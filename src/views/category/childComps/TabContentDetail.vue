<template>
  <GridView>
    <GoodsListItem v-for="(item, index) in categoryDetail" :key="index" :goodsItem="item">
    </GoodsListItem>

  </GridView>
</template>

<script>
  import GridView from "@/components/common/gridView/GridView";
  import GoodsListItem from "@/components/content/goods/GoodsListItem";
  import test from "@/components/content/goods/test";
  export default {
    name: "TabContentDetail",
    components: {
      GridView,
      GoodsListItem,
      test
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    },
    mounted(){

    }
  }
</script>

<style scoped>

</style>
