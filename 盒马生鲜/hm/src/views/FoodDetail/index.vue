<template>
  <div>
    <HomeHeader>
      <div slot="win-name">商品详情</div>
    </HomeHeader>
    <FoodDeatailBody :food="food"></FoodDeatailBody>
    <ShopAccount :food="food">
      <template slot="control">
        <CartControl :food="food"></CartControl>
      </template>
    </ShopAccount>
  </div>
</template>

<script>
import HomeHeader from "@/components/homeHeader";
import ShopAccount from "@/components/shopAccount";
import FoodDeatailBody from "@/components/fooddetailBody";
import CartControl from "@/components/cartControl";
export default {
  name: "FoodDetail",
  data() {
    return {
      food: [],
      foodIndex: 0,
    };
  },
  components: {
    HomeHeader,
    ShopAccount,
    FoodDeatailBody,
    CartControl,
  },
  mounted() {
    this.$nextTick(() => {
      this.food = this.$store.state[this.$route.params.type];
      this.foodIndex = this.$route.params.index;
      // 从this.food中获取对应food
      this.food = this.food[this.foodIndex];
    });
  },
};
</script>

<style scoped>
</style>