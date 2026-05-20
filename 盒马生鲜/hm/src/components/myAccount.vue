<template>
  <div>
    <HomeHeader :rightIcon="rightIcon"></HomeHeader>
    <div id="mayAccout">
      <div class="top">优鲜余额</div>
      <div class="bottom">￥0</div>
    </div>
    <!-- <Navbar :tabs="tabs"></Navbar> -->
    <Navbar :tabs="tabs" :top="top"></Navbar>
  </div>
</template>

<script>
import HomeHeader from "@/components/homeHeader.vue";
import Navbar from "@/components/navbar.vue";
export default {
  name: "MyAccount",
  data() {
    return {
      rightIcon: require("../image/accounthelp.png"),
      tabs: [
        { name: "充值有礼", icon: "icon-qianbao" },
        { name: "卡劵兑换", icon: "icon-kaquan" },
        { name: "账单记录", icon: "icon-zhangdan" },
      ],
      top: true,
    };
  },
  components: {
    HomeHeader,
    Navbar,
  },
};
</script>

<style scoped>
#mayAccout {
  height: 100px;
  width: 100%;
  position: relative;
  top: 49px;
  background-color: #0695fb;
}
#mayAccout .top {
  position: relative;
  top: 0;
  width: 100%;
  height: 40px;
  color: #fff;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
}

#mayAccout .bottom {
  position: relative;
  top: 0;
  width: 100%;
  height: 40px;
  color: #fff;
  line-height: 40px;
  font-size: 24px;
  font-weight: bolder;
  text-align: center;
}

#myAccount-nav {
  position: relative;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-flex-flow: row;
  flex-flow: row;
  width: 100%;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #f0f0f0;
}

#myAccount-nav .menu {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  box-sizing: border-box;
  padding-left: 30px;
  height: 40px;
  color: #444;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  border-bottom: 2px solid #f0f0f0;
  background-repeat: no-repeat;
  background-size: auto 14px;
  background-position: 16px 13px;
}

#myAccount-nav .menu:nth-child(1) {
  background-image: url(/image/account_0.png);
}

#myAccount-nav .menu:nth-child(1).selected {
  background-image: url(/image/account_0_select.png);
}

#myAccount-nav .menu:nth-child(2) {
  background-image: url(/image/account_1.png);
}

#myAccount-nav .menu:nth-child(2).selected {
  background-image: url(/image/account_1_select.png);
}

#myAccount-nav .menu:nth-child(3) {
  background-image: url(/image/account_2.png);
}

#myAccount-nav .menu:nth-child(3).selected {
  background-image: url(/image/account_2_select.png);
}

#myAccount-nav .menu:nth-child(4) {
  background-image: url(/image/account_3.png);
}

#myAccount-nav .menu:nth-child(4).selected {
  background-image: url(/image/account_3_select.png);
}

#myAccount-nav .selected {
  font-weight: bolder;
  color: #e3007f;
  border-bottom: 2px solid #e3007f;
}
</style>
