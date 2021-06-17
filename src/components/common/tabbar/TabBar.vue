<template>
  <div id="TabBar">
    <slot></slot>
  </div>
</template>

<script>


  export default {
    name: "TabBar",
    components:{

    }
  }
</script>

<style scoped>
  #TabBar{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: -5px;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  }
</style>