<template>
  <div>
    <nav-bar class="detail-navBar">
      <div slot="left" class="left" @click="leftClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in title"
              @click="itemClick(index)"
              :class="{active:currentIndex === index}">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from "@/components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    data(){
      return {
        title:['商品','参数','评论','推荐'],
        currentIndex:0,
      }
    },
    components:{
      NavBar
    },

    methods:{
      itemClick(index){
        this.currentIndex = index;
        this.$emit('navTabClick',index)
      },
      leftClick(){
        this.$router.push('/home')
      },

    }
  }
</script>

<style scoped>
  .detail-navBar{
    background-color: white;
  }
  .left{
    margin-top: 7px;
  }
  .title{
    display: flex;
  }
  .title div{
    flex: 1;
    text-align: center;
  }
  .active{
    color: var(--color-high-text);
  }
</style>