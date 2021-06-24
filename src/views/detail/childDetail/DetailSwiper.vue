<template>

    <Swiper class="detail-swiper">
      <SwiperItem v-for="item in swiperImage" >
        <img :src="item" alt="" @load="imageLoad">
      </SwiperItem>
    </Swiper>

</template>

<script>

  import {Swiper,SwiperItem} from 'components/common/swiper'

  export default {
    name: "DetailSwiper",
    props:{
      swiperImage:{
        type: Array,
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
      Swiper,
      SwiperItem
    },
    methods:{
      imageLoad(){
        if(!this.isLoad){
          this.$emit('imageLoad');
          this.isLoad  = true;
        }

      }
    }
  }
</script>

<style scoped>
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>