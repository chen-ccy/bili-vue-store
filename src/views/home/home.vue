<template>
  <div class="home">
    <nav-bar class="home-nav"> <div slot="center">购物街</div> </nav-bar>

    <Scroll class="content">
        <home-swiper :banners="banners" class="home-swiper"></home-swiper>
        <RecommentView :recommend="recommend"></RecommentView>
        <FeatureView ></FeatureView>

        <TabControl :title="['流行','新款','精选']"></TabControl>

        <GoodsList :goods="goods.pop.list"></GoodsList>
    </Scroll>


    <div style="height: 44px;width: 100%"></div>
  </div>
</template>

<script>

  import NavBar from "@/components/common/navbar/NavBar";
  import TabControl from "@/components/content/TabControl";
  import GoodsList from "@/components/content/goods/GoodsList";
  import Scroll from "@/components/common/scroll/Scroll";

  import homeSwiper from "@/views/home/childComps/homeSwiper";
  import RecommentView from "@/views/home/childComps/RecommendView";
  import FeatureView from "@/views/home/childComps/FeatureView";


  import {getHomeMultidata,getHomeGoods} from "@/networks/home";

  export default {
    name: "home.vue",
    components:{
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      homeSwiper,
      RecommentView,
      FeatureView,

    },
    data(){
      return {
        banners:[],
        recommend:[],
        goods:{
          pop:{ page:0,list:[] },
          new:{ page:0,list:[] },
          sell:{ page:0,list:[] },

        }
      }
    },
    created(){
      this.getHomeMultidata();
      this.getHomeGoods('pop')
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        this.goods[type].page++;
        const page = this.goods.pop.page++;
        getHomeGoods(type,page).then(res =>{
          this.goods[type].list.push(...res.data.list)

        })
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
</style>