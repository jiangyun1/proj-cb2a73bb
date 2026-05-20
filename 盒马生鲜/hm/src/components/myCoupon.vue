<template>
  <div id="mycoupon">
    <HomeHeader>
      <div slot="win-name">我的优惠券</div>
    </HomeHeader>
    <section>
      <div class="input">
        <input id="searchText" type="search" placeholder="请输入优惠码" />
      </div>
      <div class="button">兑换</div>
    </section>
    <MyCouponList></MyCouponList>
  </div>
</template>

<script>
import HomeHeader from "@/components/homeHeader";
import MyCouponList from "@/components/myCouponList";
export default {
  name: "MyCoupon",
  components: {
    HomeHeader,
    MyCouponList,
  },
};
</script>

<style scoped>
#mycoupon {
  margin-top: 50px;
}
#mycoupon section {
  position: relative;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-flex-flow: row;
  flex-flow: row;
  padding: 16px;
  height: 60px;
  margin-bottom: 2px;
  background-color: #fff;
}

#mycoupon section .input {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  box-sizing: border-box;
  padding: 6px;
  height: 28px;
  background-color: #eee;
  border-radius: 14px;
}

#mycoupon section .input input {
  width: 100%;
  height: 16px;
  line-height: 16px;
}

#mycoupon section .button {
  box-sizing: border-box;
  padding: 4px 16px;
  margin-left: 8px;
  width: 80px;
  height: 28px;
  text-align: center;
  font-size: 16px;
  color: #444;
  line-height: 18px;
  border-radius: 14px;
  border: 1px solid #aaa;
}
</style>
