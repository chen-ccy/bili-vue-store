<template>
  <div class="userInfo">
    <div class="user-icon">
      <slot name="user-icon">
        <img class="image" src="~assets/img/profile/avatar.svg" alt="">
      </slot>
    </div>
    <div class="login-info">
      <div class="user-name">
        <slot name="user-name">
          <div> 登录/注册</div>
        </slot>
      </div>
      <div class="user-phone">
      <span>
        <img class="image" src="~assets/img/profile/phone.svg" alt="">
         </span>
        <slot name="user-phone">
          <span>暂无绑定手机号</span>
        </slot>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "UserInfo"
  }
</script>

<style scoped>
  .userInfo{
    width: 100%;
    height: 80px;
    background-color: var(--color-tint);
    display: flex;
    color: white;

  }
  .user-icon{
    width: 80px;
    text-align: center;

  }
  .user-icon .image{
    margin-top: 10px;
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;

  }
  .login-info{

    text-align: left;

  }
  .user-name{
    margin-top: 20px;
    margin-left: 5px;
  }
  .user-phone{
    margin-top: 5px;
    font-size: 13px;
  }
  .user-phone .image{
    width: 20px;
    vertical-align: middle;
  }

</style>