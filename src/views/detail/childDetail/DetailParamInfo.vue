<template>
  <div class="param-info" v-if="ParamInfo">
    <table v-for="(table,index) in ParamInfo.sizes"
        class="info-size" :key="index">
      <tr v-for="(tr,index) in table" :key="index">
        <td v-for="(td,index) in tr">{{td}}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(info,index) in ParamInfo.infos">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>

    </div>


</template>

<script>
  export default {
    name: "DetailParamInfo",
    props:{
      ParamInfo:{
        type:Object,
        default(){
          return {}
          }
      }
    }
  }
</script>

<style scoped>
  .param-info{
    padding: 20px 15px;
    border-top: 4px solid lightgrey;
    border-bottom: 5px solid #f2f5f8;
  }
.info-size {
  padding-left: 5px;

  border-collapse: collapse;
  width: 100%;
}
.info-size tr{
  height: 50px;

}
.info-size tr td{
  order-bottom: 1px solid rgba(100,100,100,.1);
}
  .info-param{

    width: 100%;
  }
  .info-param tr{
    height: 40px;
  }
  .info-param tr td{
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .param-value{
    color: var(--color-tint);
  }
  .info-param-key{
    width: 100px;
  }
</style>