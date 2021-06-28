<template>
  <div class="cartList-item" >
    <div class="item-button">
      <CartButton class="cartButton" :is-click="cartListItem.isClick" @click.native="checkClick"/>
    </div>
    <div class="item-img">
      <div class="item-image">
        <img :src="cartListItem.imgURL" alt="">
      </div>
    </div>

    <div class="item-info">
      <div class="item-title">
        <span>{{cartListItem.title}}</span>
      </div>
      <div class="item-desc">
        <span>{{cartListItem.desc}}</span>
      </div>
      <div class="item-bottom">
        <div  class="price">￥{{cartListItem.newPrice}}</div>
        <div class="count">x{{cartListItem.count}}</div>
      </div>
    </div>



  </div>
</template>

<script>


  import CartButton from "@/views/cart/childCart/CartButton";

  export default {
    name: "CartListItem",
    components: {CartButton},
    props:{
      cartListItem:{
        type:Object,
        default(){
          return {}
        }
      }
      },
      methods:{
        checkClick(){
          this.cartListItem.isClick = !this.cartListItem.isClick

        }
      }


  }
</script>



<style scoped>

  .cartList-item{
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }
  .cartButton{
    width: 30px;
    height: 100%;
    display: flex;

    align-items: center;
    text-align: center;

  }
.item-img{
    flex: 1;
  }
  .item-info{
    flex:3;
    font-size: 17px;
    color: #333;
    position: relative;
    padding: 5px 10px;
    overflow: hidden;
  }
  .item-desc,.item-title{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-desc{
    margin-top: 15px;
  }
  .item-bottom{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;

  }
  .cartList-item img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;

  }
  .price{
    color: orangered;
  }

</style>