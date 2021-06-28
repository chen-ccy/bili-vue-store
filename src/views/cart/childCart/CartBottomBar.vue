<template>
  <div class="cart-bottomBar">
    <CartButton class="select-all" @click.native="checkAll" :is-click="isClick" />
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product" @click="buyClick">去计算({{cartCount}})</span>
  </div>
</template>

<script>
  import CartButton from "@/views/cart/childCart/CartButton";

  import {mapGetters} from 'vuex'
  import CartList from "@/views/cart/childCart/CartList";
  export default {
    name: "CartBottomBar",
    components: {
      CartButton
    },
    data() {
      return {
        //isClick: false
      }

    },
    computed: {
      ...mapGetters({
        length: 'getCount',
        cartList: 'getCartList'
      }),
      totalPrice() {
        return this.cartList.filter(item => {
          return item.isClick
        }).reduce((pre, item) => {
          return pre + item.newPrice * item.count
        }, 0).toFixed(2)
      },
      cartCount() {
        return this.cartList.filter(item => item.isClick).length
      },
      isClick() {
        if(this.cartList.length === 0) return false
        return !this.cartList.find( item => !item.isClick)
      }
    },
    methods: {
      checkAll() {
        if(this.isClick){
          this.cartList.forEach( item => item.isClick = false)
        }else {
          this.cartList.forEach( item => item.isClick = true)
        }
      },
      buyClick(){
        this.$emit('buyClick')
      }
    }
  }
</script>

<style scoped>
.cart-bottomBar{
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 46px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}
  .select-all{
    position:absolute ;
    left: 10px;
    top: 10px;
  }
  .total-price{
    margin-left: 50px;
  }
  .cart-bottomBar .buy-product{
    background-color: orangered;
    display: inline-block;
    color: #fff;
    width: 100px;
    float: right;
    text-align: center;
    line-height: 44px;

  }
  .clicked{
    background-color: red;
  }
</style>