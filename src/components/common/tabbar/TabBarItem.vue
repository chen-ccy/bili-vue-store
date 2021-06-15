<template>
  <div id="TabBarItem" @click="itemClick">

    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>

    <div :style="activeStyle" >
      <slot name="item-text"></slot>
    </div>

  </div>

</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String
    }
  ,
    data(){
      return {

      }
    },
    methods:{
      itemClick(){

        this.$router.replace(this.path)

      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: 'red'} : {}
      }
    }
  }
</script>

<style scoped>
  #TabBarItem{
    flex: 1;
    height: 49px;
    text-align: center;
    cursor: pointer;

  }

  #TabBarItem img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
    /*vertical-align: middle;*/
  }
  .active{
    color: red;
  }
</style>