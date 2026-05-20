<template>
  <div>
    <RadioButton
      v-if="this.$route.path ==('/shopcar') "
      :food="food"
      v-on="$listeners"
      v-bind="$attrs"
    ></RadioButton>
    <div class="ware">
      <div class="content">
        <img class="thumbnail" :src="food.thumbnail.url" />
        <div class="info">
          <div class="name">{{food.name}}</div>
          <div class="description" v-if="$route.path==('/home')">{{food.description}}</div>
          <div class="price-tag">
            <span class="price">￥{{food.price}}</span>
            <span class="unit">/1盒</span>
          </div>
          <div class="origin-price" v-if="$route.path==('/home')">
            超市:
            <del>{{food.originPrice}}元</del>
          </div>
        </div>
        <CartControl :food="food"></CartControl>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/components/radioButton";
import CartControl from "@/components/cartControl";
export default {
  name: "Food",
  props: {
    food: {
      typed: Object,
      default: function () {
        return {};
      },
    },
  },
  components: {
    CartControl,
    RadioButton,
  },
};
</script>

<style lang="scss" scoped>
.ware {
  position: relative;
  width: 100%;
  height: 145px;
  box-sizing: border-box;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #d1d1d1;
}

.ware .content .thumbnail {
  position: absolute;
  top: 20px;
  left: 0px;
  height: 100px;
  width: 100px;
}

.ware .content .info {
  width: 100%;
  height: 114px;
  box-sizing: border-box;
  padding-left: 112px;
  padding-right: 28px;
}

.ware .content .info .name {
  width: 100%;
  height: 15px;
  color: #555555;
  margin-top: 14px;
  font-size: 15px;
}

.ware .content .info .description {
  margin-top: 10px;
  width: 100%;
  height: 13px;
  font-size: 13px;
  color: #9d9d9d;
}

.ware .content .info .price-tag {
  margin-top: 10px;
  width: 100%;
  height: 12px;
  font-size: 12px;
  vertical-align: top;
}

.ware .content .info .price-tag .price {
  color: #e3007f;
}

.ware .content .info .price-tag .unit {
  font-size: 8px;
  color: #cbcbcb;
}

.ware .content .info .origin-price {
  margin-top: 5px;
  width: 100%;
  height: 10px;
  font-size: 10px;
  color: #d3d3d3;
}

.ware .content .control {
  position: absolute;
  width: 110px;
  height: 23px;
  right: 8px;
  top: 90px;
}

.ware .control .panel {
  display: none;
  height: 23px;
}

.ware .control .minus {
  position: absolute;
  top: 0;
  left: 0;
  width: 23px;
  height: 23px;
}

.ware .control .count {
  position: relative;
  top: 0;
  margin-left: 31px;
  margin-right: 31px;
  width: auto;
  height: 23px;
  text-align: center;
  line-height: 23px;
  color: #444;
  font-size: 12px;
  background-image: url(../image/count.png);
  background-repeat: no-repeat;
  background-size: 48px 23px;
}

.ware .control .add {
  position: absolute;
  top: 0;
  right: 0;
  width: 23px;
  height: 23px;
}

.active {
  opacity: 0.7;
}
</style>
