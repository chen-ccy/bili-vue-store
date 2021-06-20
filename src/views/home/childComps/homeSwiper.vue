<template>
  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
      <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>

  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "homeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        isLoad:false
      }
    },
    components:{
      SwiperItem,
      Swiper
    },
    methods:{
      imageLoad() {

        if(!this.isLoad){
          this.$emit('swiperImgLoad');
          this.isLoad=true;
        }

      }
    }

  }
</script>

<style scoped>

</style>