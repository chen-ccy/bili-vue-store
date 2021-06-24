<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" ></detail-nav-bar>
    <Scroll class="content" ref="detailScroll">
      <DetailSwiper :swiper-image="swiperImage" @imageLoad="imageLoad"/>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <DetailParamInfo :param-info="GoodsParam"></DetailParamInfo>
    </Scroll>

  </div>

</template>

<script>

  import DetailNavBar from "@/views/detail/childDetail/DetailNavBar";
  import DetailSwiper from "@/views/detail/childDetail/DetailSwiper";
  import DetailBaseInfo from "@/views/detail/childDetail/DetailBaseInfo";
  import DetailShopInfo from "@/views/detail/childDetail/DetailShopInfo";
  import DetailParamInfo from "@/views/detail/childDetail/DetailParamInfo";

  import Scroll from "@/components/common/scroll/Scroll";

  import {getDetail} from "@/networks/detail";
  import {Goods,ShopInfo,GoodsParam} from "@/networks/detail";


  export default {
    name: "Detail",
    components:{
      DetailShopInfo,
      DetailBaseInfo,
      DetailNavBar,
      DetailSwiper,
      DetailParamInfo,
      Scroll
    },
    data(){
      return {
        iid:null,
        swiperImage:[],
        goods:{},
        shopInfo:{},
        GoodsParam:{}
      }
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        const  data = res.result
        this.swiperImage = data.itemInfo.topImages;
        //console.log(data);
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        this.shopInfo = new ShopInfo(data.shopInfo)
        this.GoodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        console.log(this.itemParam);
      })


      console.log(this.$route.params);
    },
    methods:{
      imageLoad(){
        this.$refs.detailScroll.refresh();
      }
    }
  }
</script>

<style scoped>
#detail{
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.detail-nav-bar{
  position: relative;
  z-index: 9;
  background-color: white;

}
.content{
  position: absolute;
  top: 44px;
  bottom: 60px;
  overflow: hidden;
}
</style>