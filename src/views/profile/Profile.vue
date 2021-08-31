<template>
  <div class="profit">
    <nav-bar class="nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <user-info/>

    <div class="account">
      <div class="accout-item">
        <div><span>0.00</span>元</div>
        <div>我的余额</div>
      </div>
      <div class="accout-item">
        <div><span>0</span>个</div>
        <div>我的优惠</div>
      </div>
      <div class="accout-item">
        <div><span>0</span>分</div>
        <div>我的积分</div>
      </div>
    </div>

    <list-view :list="orderList" :imgList="orderImgList"/>
    <list-view :list="serviceList" :imgList="serviceList"/>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";

  import UserInfo from "@/views/profile/childProfile/UserInfo";
  import ListView from "@/views/profile/childProfile/ListView";

  export default {
    name: "Profit",
    components:{
      NavBar,
      UserInfo,
      ListView
    },
    data(){
      return {
        orderList: [
          {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
          {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
          {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
        ],
        serviceList: [
          {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
          {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
        ],
        orderImgList:['img/profile/message.svg','img/profile/pointer.svg','img/profile/vip.svg'],
        serviceImgList:['img/profile/cart.svg','img/profile/shopping.svg']
      }
    }
  }
</script>

<style scoped>
  .profit{
    background-color: #f2f2f2;
  }
.nav-bar{
  background-color: var(--color-high-text);
  color: white;
}
.account{
  display: flex;
  width: 100%;
 }
.account span{
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}
  .account .accout-item{
    flex: 1;
    text-align: center;
    border-right: 1px solid #eee;
    line-height: 25px;
    align-items: center;
    padding: 18px;
    background-color: #fff;
  }
</style>