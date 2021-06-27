<template>
  <div class="cart">
    <nav-bar class="cart-navbar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <CartList/>
  </div>

</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import CartList from "@/views/cart/childCart/CartList";


  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList
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
  .cart{
    height: 100vh;
  }
.cart-navbar{
  color: white;
  background-color: var(--color-tint);
}

</style>