<template>
  <div class="home">
    <nav-bar class="home-nav"> <div slot="center">购物街</div> </nav-bar>
    <TabControl class="tab-control" :title="['流行','新款','精选']" @tabClick="tabClick" v-show="isTabFixed" ref="tabControl1"></TabControl>
    <Scroll class="content"
            ref="scroll"
            :probe-type=3
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore">
        <home-swiper :banners="banners" class="home-swiper" @swiperImgLoad="swiperImageLoad"></home-swiper>
        <RecommentView :recommend="recommend"></RecommentView>
        <FeatureView ></FeatureView>

        <TabControl :title="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></TabControl>

        <GoodsList :goods="goods[currentType].list" ref="goodList"></GoodsList>
    </Scroll>

    <BackTop @click.native="backtopClick" v-show="isBackTopShow"></BackTop>

    <div style="height: 44px;width: 100%"></div>
  </div>
</template>

<script>

  import NavBar from "@/components/common/navbar/NavBar";
  import TabControl from "@/components/content/TabControl";
  import GoodsList from "@/components/content/goods/GoodsList";
  import Scroll from "@/components/common/scroll/Scroll";
  import BackTop from "@/components/content/backTop/BackTop";

  import homeSwiper from "@/views/home/childComps/homeSwiper";
  import RecommentView from "@/views/home/childComps/RecommendView";
  import FeatureView from "@/views/home/childComps/FeatureView";


  import {getHomeMultidata,getHomeGoods} from "@/networks/home";
  //import {debounce} from "@/common/utils";
  import {itemListenerMixin} from "@/common/mixin";

  export default {
    name: "home.vue",
    components:{
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
      homeSwiper,
      RecommentView,
      FeatureView,

    },
    mixins:[itemListenerMixin],
    data(){
      return {
        banners:[],
        recommend:[],
        goods:{
          'pop':{ page:0,list:[],scrollY:-550 },
          'new':{ page:0,list:[],scrollY:-540 },
          'sell':{ page:0,list:[],scrollY:-550 },

        },
        currentType: 'pop',
        isBackTopShow:false,
        isTabFixed:false,
        TabControlOffserTop:0,
        saveY:0
      }
    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,100)
      this.$refs.scroll.refresh()
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY = this.$refs.scroll.scrollY()
    },
    created(){
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');


    },
    mounted(){

    },

    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res =>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++;

          this.$refs.scroll.finishPullUp()
        })


      },
      backtopClick(){
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        this.isBackTopShow = -(position.y) > 1000;
        this.isTabFixed = (-position.y) > this.TabControlOffserTop
      },
      loadMore(){
        this.getHomeGoods(this.currentType)

      },
      tabClick(index){

        this.goods[this.currentType].scrollY = this.$refs.scroll.scrollY()
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        this.$refs.scroll.scrollTo(0,this.goods[this.currentType].scrollY,0)
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      swiperImageLoad(){

        this.TabControlOffserTop = this.$refs.tabControl2.$el.offsetTop;
      }

    }

  }
</script>

<style scoped>

  .home{

    height: 100vh;
    position: relative;
  }

  .home-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    color: white;
    background-color: var(--color-high-text);
  }

  .home-swiper{

  }
  .content{
    position: absolute;
    bottom: 44px;
    left: 0;
    top: 44px;
    overflow: hidden;

  }

  .tab-control{
    position: relative;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 9;
  }
</style>