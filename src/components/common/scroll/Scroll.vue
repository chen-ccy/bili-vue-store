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
      probeType: Number,
      pullUpLoad: Boolean
    },
    data(){
      return {
        scroll:null
      }
    },
    mounted(){
      this.scroll = new BScrool(this.$refs.wrapper,{
        probeType:this.probeType,
        click:true,
        pullUpLoad:this.pullUpLoad,

      });

      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position.y)
      });

      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
        //console.log('上拉加载更多')
        //setTimeout(() => this.scroll.finishPullUp(),2000)

      })


    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        this.scroll.refresh()
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      }
    },

  }
</script>

<style scoped>

</style>