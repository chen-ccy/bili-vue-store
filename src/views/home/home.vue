<template>
  <div id="home">
    <nav-bar> <div slot="center">购物街</div> </nav-bar>
    <home-swiper :banners="banners" ></home-swiper>
    <RecommentView :recommend="recommend"></RecommentView>
    <FeatureView ></FeatureView>

    <TabControl :title="['流行','新款','精选']"></TabControl>




    <div style="height: 44px;width: 100%"></div>
  </div>
</template>

<script>

  import NavBar from "@/components/common/navbar/NavBar";
  import TabControl from "@/components/content/TabControl";

  import homeSwiper from "@/views/home/childComps/homeSwiper";
  import RecommentView from "@/views/home/childComps/RecommentView";
  import FeatureView from "@/views/home/childComps/FeatureView";


  import {getHomeMultidata,getHomeGoods} from "@/networks/home";

  export default {
    name: "home.vue",
    components:{
      NavBar,
      TabControl,
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
          //this.goods[type].push(...res.data.list)
          console.log(res.data.list);

        })
      }

    }

  }
</script>

<style scoped>

</style>