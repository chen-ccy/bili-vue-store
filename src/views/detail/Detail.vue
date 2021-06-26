<template>
  <div id="detail">

    <detail-nav-bar class="detail-nav-bar" @navTabClick="navTabClick" ref="navBar"/>
    <Scroll class="content" ref="scroll"
      :probe-type="3" @scroll="contentScroll">
      {{this.$store.state.cartLisat}}
      <DetailSwiper :swiper-image="swiperImage" @imageLoad="imageLoad"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shopInfo"/>
      <detail-image-info :detail-info="detailInfo" @detailImage="detailImageLoad" />
      <DetailParamInfo :param-info="GoodsParam" ref="params"/>
      <DetailCommentInfo :comment-info="commentInfo" ref="comment"/>
      <GoodsList :goods="recommend" @itemImageLoad="imageLoad" ref="recommend"/>

    </Scroll>
    <DetailBottomNav @addToCart="addToCart"/>
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
  import DetailBottomNav from "@/views/detail/childDetail/DetailBottomNav";


  import Scroll from "@/components/common/scroll/Scroll";
  import GoodsList from "@/components/content/goods/GoodsList";


  import {getDetail} from "@/networks/detail";
  import {Goods,ShopInfo,GoodsParam,getRecommend} from "@/networks/detail";
  import {itemListenerMixin} from "@/common/mixin";
  import {debounce} from "@/common/utils";


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
      DetailBottomNav,
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
        recommend:{},
        getThemeTopY:null,
        themeTopY:[],
        currentIndex:null
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

      this.getThemeTopY = debounce(() =>{
        this.themeTopY = [];
        this.themeTopY.push(0)
        this.themeTopY.push(this.$refs.params.$el.offsetTop)
        this.themeTopY.push(this.$refs.comment.$el.offsetTop)
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopY.push(Number.MAX_VALUE)
        //console.log(this.themeTopY);
      },50)

    },
    methods:{
      imageLoad(){
        this.newRefresh()

      },
      detailImageLoad(){
        this.getThemeTopY();
      },
      navTabClick(index){

        this.$refs.scroll.scrollTo(0,-this.themeTopY[index],0)
      },
      contentScroll(position) {
        for(let i = 0; i < this.themeTopY.length - 1; i++)
        if( this.currentIndex !== i && (-position.y > this.themeTopY[i] && -position.y < this.themeTopY[i+1])){
          this.$refs.navBar.currentIndex = i;
          this.currentIndex = i;
        }
      },
      addToCart() {
        const obj = {}
        // 2.对象信息
        obj.iid = this.iid;
        obj.imgURL = this.swiperImage[0]
        obj.title = this.goods.title
        obj.desc = this.goods.desc;
        obj.newPrice = this.goods.realPrice;


        this.$store.dispatch('addCart',obj)
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
  bottom: 58px;
  overflow: hidden;
}
</style>