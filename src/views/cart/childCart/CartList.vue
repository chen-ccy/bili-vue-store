<template>
  <div class="cartList">
    <Scroll class="content" ref="scroll">
      <div class="cartList-item" v-for="(item,index) in cartList">
        <CartListItem :cart-list-item="item"/>
      </div>
    </Scroll>
  </div>

</template>

<script>

  import Scroll from "@/components/common/scroll/Scroll";
  import CartListItem from "@/views/cart/childCart/CartListItem";

  import {mapGetters} from 'vuex'

  export default {
    name: "CartList",
    components:{
      Scroll,
      CartListItem
    },
    mounted(){
      setTimeout(() =>{
        this.$refs.scroll.refresh()
      },1000)
    },
    computed:{
      ...mapGetters({
        length: 'getCount',
        cartList: 'getCartList'
      })
    },
  }
</script>

<style scoped>
  .cartList{
    height: calc(100% - 44px - 46px);
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>