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
        scroll:null,
        pullupload:setTimeout(() => {
          this.scroll.finishPullUp()
        },1000)
      }
    },
    mounted(){
      this.scroll = new BScrool(this.$refs.wrapper,{
        probeType:this.probeType,
        click:true,
        pullUpLoad:this.pullUpLoad,

      });

      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll',(position) => {
          this.$emit('scroll',position)
        });
      }


      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })


    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        this.scroll && this.scroll.refresh();
        //console.log('refresh');
      },
      finishPullUp(){
        if(this.pullupload) clearTimeout(this.pullupload)
        this.pullupload = setTimeout(() => {
          this.scroll.finishPullUp()
        },1000)
        //this.scroll.finishPullUp()
      },
      scrollY(){
        return this.scroll ? this.scroll.y : 0
      }
    },

  }
</script>

<style scoped>

</style>