<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info" >
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="info-other" v-if="goods.columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.info-title{
  color: black;
  margin-top: 10px;
  margin-left: 5px;
}
.info-price{
  margin-top: 15px;
  margin-bottom: 15px;
}
  .n-price{
    margin-left: 10px;
    color: var(--color-tint);
    font-size: 25px;

  }
  .o-price{
    text-decoration:line-through;
    margin-left: 5px;
  }
  .discount{
    display: inline-block;
    color: white;
    background-color: var(--color-tint);
    width: 50px;
    height: 20px;
    border-radius: 15px;
    text-align: center;
    font-size: 10px;
    line-height: 20px;
    vertical-align: top;
    margin-left: 5px;


  }

  .info-other{
    display: flex;
    justify-content:space-between;
    margin: 5px;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 5px;

    color: darkgrey;
  }
  .info-other span{
    display: inline-block;
  }

  .info-service{
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    border-bottom: 4px solid gainsboro;
  }
.info-service-item span {
  font-size: 13px;
  color: #333;
}
  .info-service span img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;

  }
</style>