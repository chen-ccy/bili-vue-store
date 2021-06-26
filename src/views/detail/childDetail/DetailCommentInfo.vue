<template>
  <div>
    <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
      <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{commentInfo.content}}</p>
        <div class="info-other">
          <span class="date">{{commentInfo.created | showDate }}</span>
          <span>{{commentInfo.style}}</span>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item, index) in commentInfo.images">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {formatDate} from "@/common/utils";

  export default {
    name: "DetailCommentInfo",
    props:{
      commentInfo:{
        type:Object,
        default(){
          return {}
        }
      },

    },
    filters:{
      showDate(value){
        const date = new Date(value * 1000)
        return formatDate('yyyy/MM/dd hh:mm:ss',date)
      }
    }
  }
</script>

<style scoped>
  .comment-info{
    font-size: 14px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-header{
    padding: 5px;
    height: 45px;
    border-bottom: 2px solid lightgrey;
    line-height: 40px;

  }
  .header-title{
    float: left;
  }
  .header-more{
    float: right;
  }
  .info-user{
    padding: 10px;
  }
  .info-user img{
    width: 30px;
    vertical-align: middle;
    margin-right: 15px;
    border-radius: 50%;
  }
  .info-detail{
    padding: 10px;
    color: #777;
  }
  .info-other{
    margin: 15px 0px 15px 0px;
    color: #999;
  }
  .date{
    margin-right: 15px;
  }
  .info-imgs img{
    width: 50px;
  }

</style>