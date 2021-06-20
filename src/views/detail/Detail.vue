<template>
  <div>
    <detail-nav-bar />
    <DetailSwiper :swiper-image="swiperImage" />

  </div>

</template>

<script>

  import DetailNavBar from "@/views/detail/childDetail/DetailNavBar";
  import DetailSwiper from "@/views/detail/childDetail/DetailSwiper";

  import {getDetail} from "@/networks/detail";

  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper
    },
    data(){
      return {
        iid:null,
        swiperImage:[]
      }
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        this.swiperImage = res.result.itemInfo.topImages;
      })

      //console.log(this.$route.params);
    }
  }
</script>

<style scoped>

</style>