<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" ></detail-nav-bar>
    <Scroll class="content" ref="scroll" >
      <DetailSwiper :swiper-image="swiperImage" @imageLoad="imageLoad"/>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-image-info :detail-info="detailInfo" @detail-imageLoad="imageLoad"></detail-image-info>
      <DetailParamInfo :param-info="GoodsParam"></DetailParamInfo>
      <DetailCommentInfo :comment-info="commentInfo"/>
      <GoodsList :goods="recommend" @itemImageLoad="imageLoad"/>
    </Scroll>

  </div>

</template>

<script>

  import DetailNavBar from "@/views/detail/childDetail/DetailNavBar";
  import DetailSwiper from "@/views/detail/childDetail/DetailSwiper";
  import DetailBaseInfo from "@/views/detail/childDetail/DetailBaseInfo";
  import DetailShopInfo from "@/views/detail/childDetail/DetailShopInfo";
  import DetailImageInfo from "@/views/detail/childDetail/DetaiImageInfo";
  import DetailParamInfo from "@/views/detail/childDetail/DetailParamInfo";
  import DetailCommentInfo from "@/views/detail/childDetail/DetailCommentInfo";


  import Scroll from "@/components/common/scroll/Scroll";
  import GoodsList from "@/components/content/goods/GoodsList";


  import {getDetail} from "@/networks/detail";
  import {Goods,ShopInfo,GoodsParam,getRecommend} from "@/networks/detail";
  import {itemListenerMixin} from "@/common/mixin";


  export default {
    name: "Detail",
    components:{
      DetailShopInfo,
      DetailBaseInfo,
      DetailNavBar,
      DetailSwiper,
      DetailImageInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      Scroll
    },
    mixins:[itemListenerMixin],
    data(){
      return {
        iid:null,
        swiperImage:[],
        goods:{},
        shopInfo:{},
        GoodsParam:{},
        detailInfo:{},
        commentInfo:{},
        recommend:{}
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
        this.GoodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule);
        this.detailInfo = data.detailInfo;
        this.commentInfo = data.rate.list[0]
         getRecommend().then(res => {
           this.recommend = res.data.list
         })
        //console.log(this.recommend);
      })


    },
    methods:{
      imageLoad(){
        this.newRefresh()
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