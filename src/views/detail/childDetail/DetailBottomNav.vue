<template>
  <div class="bottom-nav">

  <div class="left">
    <div >
      <i class="icon service"></i>
      <span class="text">客服</span>
    </div>
    <div>
      <i class="icon shop"></i>
      <span class="text">店铺</span>
    </div>
    <div>
      <i class="icon select"></i>
      <span class="text">收藏</span>
    </div>
  </div>

    <div class="bar-item right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailBottomNav",
   methods:{
      addToCart(){
        this.$emit('addToCart')
      }
   }
  }
</script>

<style scoped>
  .bottom-nav{
    height: 58px;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 90;
  }
  .left{
    flex: 1;
    display: flex;
  }
  .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .left .service {
    background-position:0 -54px;
  }
  .shop{
    background-position: 0px -98px;
  }
  .left div{

    text-align: center;
    flex: 1;
  }
  .right{
    line-height: 58px;
    display: flex;
    flex: 1;
  }
  .right div{
    text-align: center;
    flex: 1;
  }
  .cart{
    background-color: #ffe817;
    color: #333;
  }
  .buy{
    background-color: #f69;
    color: white;
  }
</style>