<template>
  <footer id="footer">
    <div
      class="control"
      v-if="$route.path==(`/fooddetail/${this.$route.params.type}/${this.$route.params.index}`) || this.$route.path==('/shopcar')"
    >
      <slot name="control"></slot>
    </div>
    <div class="panel">
      <div class="info">
        <div class="top">
          总金额:
          <span id="amount" class="amount">￥{{price}}</span>
        </div>
        <div class="bottom">不含运费</div>
      </div>
    </div>
    <div class="buy">
      <img class="buy-button" src="/image/buy.png" />
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ShopAccount",
  props: {
    food: {
      typed: Object,
      default: function () {
        return {};
      },
    },
  },
  computed: {
    ...mapState(["totalPrice"]),
    price: function () {
      return this.$route.path == "/shopcar"
        ? this.$store.state.selectedFoodsPrice
        : this.food.totalPrice || 0;
    },
  },
};
</script>

<style lang='less' scoped>
footer {
  width: 100%;
  height: 50px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-flex-flow: row;
  flex-flow: row;
  background-color: #fff;
  border-top: 1px solid #d1d1d1;
  position: fixed;
  bottom: 0;
}

.control {
  position: relative;
  width: 100px;
  height: 50px;
}

.control .select {
  position: absolute;
  top: 17px;
  left: 8px;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-image: url(../image/select_on.png);
  background-size: 100% 100%;
  background-position: center center;
}

.control .select-off {
  background-image: url(../image/select_off.png);
}

.control .info {
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding-left: 32px;
  padding-top: 8px;
  padding-bottom: 8px;
}

.control .info .top {
  height: 20px;
  font-size: 14px;
  color: #444;
  text-align: left;
  line-height: 20px;
}

.control .info .bottom {
  height: 14px;
  font-size: 10px;
  color: #888;
  text-align: left;
  line-height: 14px;
}

.panel {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  height: 50px;
}

.panel .info {
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding-top: 8px;
  padding-right: 8px;
}

.panel .info .top {
  position: relative;
  width: 100%;
  height: 20px;
  text-align: right;
  font-size: 16px;
  color: #444;
  line-height: 20px;
}

.panel .info .top .amount {
  font-weight: bold;
  color: #e3007f;
}

.panel .info .bottom {
  position: relative;
  height: 14px;
  font-size: 10px;
  color: #888;
  text-align: right;
  line-height: 14px;
}

.buy {
  width: 112px;
  height: 50px;
}

.buy .buy-button {
  width: 112px;
  height: 40px;
  margin-top: 5px;
}

.highlight {
  opacity: 0.7;
}
</style>