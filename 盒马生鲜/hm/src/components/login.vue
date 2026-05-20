<template>
  <div id="login">
    <HomeHeader>
      <div slot="win-name">会员登录</div>
      <div slot="address-right">注册</div>
    </HomeHeader>
    <section>
      <div class="row">
        <input id="username" class="input" type="text" placeholder="用户名" />
      </div>
      <div class="row">
        <input id="password" class="input" type="password" placeholder="密码" />
      </div>
      <div class="btn">登录</div>
      <div class="btn-third-party">使用微信登录</div>
    </section>
  </div>
</template>

<script>
import HomeHeader from "@/components/homeHeader";
export default {
  name: "Login",
  components: {
    HomeHeader,
  },
};
</script>

<style lang="scss" scoped>
#login {
  margin-top: 50px;
}
#login .row {
  width: auto;
  height: 70px;
  box-sizing: border-box;
  margin-left: 32px;
  margin-right: 32px;
  padding-top: 40px;
  border-bottom: 1px solid #888;
}

#login .input {
  width: 100%;
  height: 20px;
  border: none;
  font-size: 16px;
  line-height: 20px;
}

#login .btn {
  width: auto;
  height: 50px;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 32px;
  background-color: #e3007f;
  line-height: 50px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  border-radius: 8px;
}

#login .btn-third-party {
  display: block;
  width: 166px;
  height: 50px;
  box-sizing: border-box;
  margin: 30px auto 0 auto;
  padding: 8px 8px 8px 36px;
  font-size: 20px;
  color: #888;
  line-height: 32px;
  text-align: left;
  border: 1px solid #aaa;
  background-image: url(../image/share_friend.png);
  background-repeat: no-repeat;
  background-size: auto 20px;
  background-position: 8px center;
  border-radius: 8px;
}

.highlight {
  opacity: 0.7;
}
</style>
