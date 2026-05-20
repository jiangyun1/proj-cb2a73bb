<template>
  <div>
    <HomeHeader>
      <div slot="win-name">我的订单</div>
    </HomeHeader>
    <Navbar :tabs="tabs"></Navbar>
    <section id="empty" class="empty"></section>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import HomeHeader from "@/components/homeHeader.vue";
export default {
  name: "MyOrder",
  components: {
    HomeHeader,
    Navbar,
  },
  data() {
    return {
      tabs: [
        { name: "待付款", icon: "icon-qianbao" },
        { name: "代收款", icon: "icon-kuaidi" },
        { name: "已完成", icon: "icon-gou" },
      ],
    };
  },
};
</script>

<style   lang='less' scoped>
.empty {
  display: block;
  position: absolute;
  top: 99px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  background-image: url(/image/myorder_empty.png);
  background-repeat: no-repeat;
  background-size: auto 93px;
  background-position: center 50px;
}
</style>
