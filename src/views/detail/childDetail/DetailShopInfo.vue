<template>
    <div class="shop-info">

      <div class="shop-top">
        <img :src="shop.logo">
        <span class="title">{{shop.name}}</span>
      </div>

      <div class="shop-middle">

        <div class="shop-middle-item shop-middle-left">

          <div class="info-sells">

            <div class="sells-count">
              {{shop.sells | sellCountFilter}}
            </div>

            <div class="sells-text">总销量</div>

          </div>
          <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
          </div>
        </div>

      <div class="shop-middle-item shop-middle-right">
      <table>
        <tr v-for="(item,index) in shop.score" :key="index">
          <td>{{item.name}}</td>
          <td class="score" :class="{ 'score-better': item.isBetter}">{{item.score}}</td>
          <td class="better" :class="{ 'better-more': item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span></td>
        </tr>
      </table>
    </div>
    </div>
      <div class="shop-bottom">
        <div class="enter-shop">进店逛逛</div>
      </div>
    </div>





</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shop:{
        type:Object,
        default (){
          return {}
        }
      }
    },
    filters:{
      sellCountFilter(value) {
        if(value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style scoped>
  .shop-info{
    border-bottom: 5px solid #f2f5f8;
  }
  .shop-top{
    height: 90px;
    line-height: 90px;
  }
  .shop-top img{
    width: 40px;
    height: 40px;
    border-radius: 40px;
    vertical-align: middle;
    margin: 0px 10px 0px 5px;
  }
  .shop-middle{
    margin-top: 15px;
    display: flex;
    align-items: center;

  }
  .shop-middle .shop-middle-item{
    flex: 1;
    text-align: center;
  }

  .shop-middle-left{
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);

  }
  .shop-middle-left>div{
    flex: 1;
    height: 60px;
    line-height: 30px;



  }
  .info-goods{

    border-right: 1px solid lightgrey;
  }
  .shop-middle-right{

    height: 100px;
    line-height: 30px;

  }
  .shop-middle-right .score{
    display: inline-block;
    width: 40px;
    color: green;
    text-align: left;
    margin-left: 10px;
  }
  .shop-middle-right .score-better {
    color: red;
  }
  .shop-middle-right table{
    margin: 0px auto;
  }

  .shop-middle-right .better span{
    color:white;

    background-color: green;
    text-align: center;

  }
  .shop-middle-right .better-more span{
    background-color: red;
  }
  .shop-bottom{
    height: 30px;
    margin-bottom: 30px;


  }
  .shop-bottom .enter-shop{
    margin: 0px auto;
    width: 120px;
    background-color: rgb(244,244,252);
    border-radius: 15px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 1px solid;
  }
</style>