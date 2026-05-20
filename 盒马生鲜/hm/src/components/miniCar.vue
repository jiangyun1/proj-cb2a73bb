<template>
  <div id="minicar" @click="togglToShopCar()">
    <span class="prefix">￥</span>
    <span id="amount" class="amount">{{$store.state.totalPrice}}</span>
    <span id="count" class="count"></span>
  </div>
</template>

<script>
export default {
  name: "MinishopCar",
  methods: {
    togglToShopCar() {
      this.$router.push("/shopcar");
    },
  },
};
</script>

<style scoped>
#minicar {
  position: fixed;
  left: 0;
  top: 588px;
  display: inline-block;
  box-sizing: border-box;
  padding: 4px;
  width: auto;
  height: 33px;
  min-width: 35px;
  line-height: 25px;
  color: #fff;
  font-size: 12px;
  background-image: url(/image/minicart.png);
  background-repeat: no-repeat;
  background-size: auto 33px;
  background-position: right center;
}

.count {
  display: none;
  box-sizing: border-box;
  padding-left: 4px;
  padding-right: 4px;
  width: auto;
  min-width: 25px;
  height: 25px;
  border-radius: 13px;
  background-color: #fff;
  text-align: center;
  color: #e3007f;
}
</style>
