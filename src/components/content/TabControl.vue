<template>
  <div id="TabControl">
    <div v-for="(item,index) in title" class="tab-control-item"
         :class="{active:index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      title:[]
    },
    data(){
      return {
        currentIndex : 0
      }
    },
    methods:{
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  #TabControl{
    display: flex;
    height: 40px;
    /*position: sticky;*/
    line-height: 40px;
    margin-bottom: 10px;
    background-color: white;

  }

  .tab-control-item{
    flex: 1;
    text-align: center;

  }
  #TabControl span{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 4px solid var(--color-tint);
  }
</style>