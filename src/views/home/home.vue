<template>
  <div id="home">
    <nav-bar> <div slot="center">购物车</div> </nav-bar>
    <home-swiper :banners="banners" ></home-swiper>

  </div>
</template>

<script>

  import NavBar from "@/components/common/navbar/NavBar";
  import homeSwiper from "@/views/home/childComps/homeSwiper";
  import {getHomeMultidata} from "@/networks/home";

  export default {
    name: "home.vue",
    components:{
      homeSwiper,
      NavBar
    },
    data(){
      return {
        banners:[]
      }
    },
    created(){
      getHomeMultidata().then(res =>{
        this.banners = res.data.banner.list
      })
    }
  }
</script>

<style scoped>

</style>