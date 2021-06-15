<template>
  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
      <img :src="item.image" alt="">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>

  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "homeSwiper",
    props:{
      banners:[],
      default(){
        return []
      }
    },
    components:{
      SwiperItem,
      Swiper
    },


  }
</script>

<style scoped>

</style>