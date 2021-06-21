<template>
  <div>
    <detail-nav-bar />
    <DetailSwiper :swiper-image="swiperImage" />
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shopInfo"></detail-shop-info>

  </div>

</template>

<script>

  import DetailNavBar from "@/views/detail/childDetail/DetailNavBar";
  import DetailSwiper from "@/views/detail/childDetail/DetailSwiper";
  import DetailBaseInfo from "@/views/detail/childDetail/DetailBaseInfo";
  import DetailShopInfo from "@/views/detail/childDetail/DetailShopInfo";

  import {getDetail} from "@/networks/detail";
  import {Goods,ShopInfo} from "@/networks/detail";

  export default {
    name: "Detail",
    components:{
      DetailShopInfo,
      DetailBaseInfo,
      DetailNavBar,
      DetailSwiper
    },
    data(){
      return {
        iid:null,
        swiperImage:[],
        goods:{},
        shopInfo:{}
      }
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        const  data = res.result
        this.swiperImage = data.itemInfo.topImages;

        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        this.shopInfo = new ShopInfo(data.shopInfo)
      })


      //console.log(this.$route.params);
    }
  }
</script>

<style scoped>

</style>