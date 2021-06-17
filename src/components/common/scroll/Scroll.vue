<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  import BScrool from 'better-scroll'



  export default {
    name: "Scroll",
    props:{

    },
    data(){
      return {
        scroll:null
      }
    },
    mounted(){
      this.scroll = new BScrool(this.$refs.wrapper,{
        probeType:3,
        click:true,
        pullUpLoad:true,

      });

      // this.scroll.on('scroll',(position) => {
      //   console.log(position)
      // });

      // this.scroll.on('pullingUp',() => {
      //
      //   console.log('上拉加载更多')
      //   //setTimeout(() => this.scroll.finishPullUp(),2000)
      //
      // })


    }
  }
</script>

<style scoped>

</style>