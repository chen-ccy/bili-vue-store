<template>
  <div class="cartList-item" >
    {{cartListItem}}
  </div>
</template>

<script>
  export default {
    name: "CartListItem",
    props:{
      cartListItem:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>

</style>