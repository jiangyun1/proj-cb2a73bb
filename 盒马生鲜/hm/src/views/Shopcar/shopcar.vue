<template>
  <div>
    <header id="header">
      <div class="back" @click="backToFoodList"></div>
      <h1>购物车</h1>
    </header>

    <section>
      <Food v-for="(food,index) in cartFoods" :key="index" v-show="food.count" :food="food"></Food>
    </section>
    <ShopAccount>
      <template slot="control">
        <input
          v-model="$store.state.isAllCheck"
          type="checkbox"
          :class="[$store.state.isAllCheck ? 'select' :'selectOff']"
          @click="allCheck()"
        />
        <div class="info">
          <div class="top">全选</div>
          <div class="bottom">
            已选
            <span id="count" class="count">{{$store.state.selectedCount}}</span>件
          </div>
        </div>
      </template>
    </ShopAccount>
  </div>
</template>

<script>
import Food from "@/components/food.vue";
import ShopAccount from "@/components/shopAccount";
import RadioButton from "@/components/radioButton";
import { mapState } from "vuex";
export default {
  name: "Shopcar",
  /*  data() {
    return {
      seletedCount: 0,
    };
  }, */
  components: {
    Food,
    ShopAccount,
    RadioButton,
  },
  updated() {},
  methods: {
    backToFoodList() {
      this.$router.back();
    },
    allCheck() {
      this.cartFoods.forEach((item) => {
        if (!this.$store.state.isAllCheck) {
          item.statue = true;
        } else {
          item.statue = false;
        }
      });
      this.$store.commit("getGoodsSumAndTotal");
    },
  },
  computed: {
    ...mapState(["cartFoods", "totalCount"]),
  },
  /*   watch: {
    seletedCount(newVal) {
      this.calFoodsCount();
    },
  }, */
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 50px;
  background-color: #e3007f;
}

#header .back {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background: url(/image/back.png);
  background-position: 12px 16px;
  background-size: 11px 18px;
  background-repeat: no-repeat;
}

#header h1 {
  width: 100%;
  height: 50px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  line-height: 50px;
}

#section {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}

#footer {
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
  position: absolute;
  bottom: 0;
  left: 0;
}

#footer .control {
  position: relative;
  width: 100px;
  height: 50px;
}

.control .select {
  position: absolute;
  top: 10px;
  left: 5px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-image: url(/image/select_on.png);
  background-size: 100% 100%;
  background-position: center center;
}

.control .selectOff {
  background-image: url(/image/select_off.png);
  position: absolute;
  top: 10px;
  left: 5px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-image: url(/image/select_off.png);
  background-size: 100% 100%;
  background-position: center center;
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
