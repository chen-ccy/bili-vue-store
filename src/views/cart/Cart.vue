<template>
  <div class="cart">
    <nav-bar class="cart-navbar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <CartList :cartItem="cartList"/>
    <CartBottomBar class="bottom-bar" @buyClick="buyClick"/>

    <Toast class="cart-toast" :message="message" v-show="toastShow"/>
  </div>

</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import CartList from "@/views/cart/childCart/CartList";
  import CartBottomBar from "@/views/cart/childCart/CartBottomBar";

  import Toast from "@/components/common/toast/Toast";
  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      CartBottomBar,
      Toast
    },
    data(){
      return {
        toastShow:false,
        message:''
      }
    },
    computed:{
      ...mapGetters({
        length: 'getCount',
        cartList: 'getCartList'
      })
    },
    activated(){

    },
    methods:{
      buyClick() {
        if(this.cartList.length === 0){
          this.message = '购物车为空，请添加商品'
          this.toastShow = true
          setTimeout(() => {

            this.toastShow = false
          },1500)
        }
      }
    }

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

  .cart-toast{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,0.5);
    color: white;
    padding: 10px;
  }

</style>