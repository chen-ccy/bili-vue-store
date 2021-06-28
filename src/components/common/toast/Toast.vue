<template>
  <div class="toast">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props:{
      message:{
        type:String,
        default(){
          return ''
        }
      }
    }
  }
</script>

<style scoped>

</style>