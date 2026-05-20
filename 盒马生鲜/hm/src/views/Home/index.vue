<template>
  <div id="home">
    <HomeHeader @showCitySelecter="switchCity()" :rightIcon="rightIcon"></HomeHeader>
    <Navbar :tabs="tabs" ref="nav" :navStyleObj="navStyleObj" :itemSyleObj="itemSyleObj"></Navbar>
    <Foodlist @v-onSwipeLeft="onSwipeLeft" @v-onSwipeRight="onSwipeRight"></Foodlist>
    <!-- 选择城市模拟框 -->
    <div
      class="v-modal"
      style="z-index: 0; background: rgba(0, 0, 0, 0); touch-action: none;"
      v-show="isShow"
      @click.stop="isShow = !isShow"
    ></div>
    <CitySelector v-if="isShow" :isShow.sync="isShow" @click.stop="isShow 
    != isShow"></CitySelector>
    <MiniShopCar></MiniShopCar>
  </div>
</template>

<script>
import HomeHeader from "@/components/homeHeader.vue";
import Navbar from "@/components/navbar.vue";
import Foodlist from "@/components/foodList.vue";
import CitySelector from "@/components/cityselector.vue";
import MiniShopCar from "@/components/miniCar.vue";
export default {
  name: "Home",
  data() {
    return {
      tabs: [
        { name: "水果" },
        { name: "食材" },
        { name: "零食" },
        { name: "牛奶" },
        { name: "蔬菜" },
      ],
      navStyleObj: {
        background: "#0695fb",
      },
      itemSyleObj: {
        activeColor: "#fff",
      },
      // rightIcon: require(''),
      rightIcon: require("../../image/membercenter.png"),
      isShow: false,
      swipeIndex: 0,
    };
  },
  components: {
    HomeHeader,
    Navbar,
    Foodlist,
    CitySelector,
    MiniShopCar,
  },
  methods: {
    switchCity() {
      this.isShow = !this.isShow;
    },
    //  左右滑动
    onSwipeLeft() {
      if (this.swipeIndex == 0) {
        return;
      } else {
        this.swipeIndex--;
        this.$refs.nav.updateSelectedIndex(this.swipeIndex);
      }
    },
    onSwipeRight() {
      if (this.swipeIndex == this.$store.state.foodType.length - 1) {
        return;
      } else {
        this.swipeIndex++;
        this.$refs.nav.updateSelectedIndex(this.swipeIndex);
      }
    },
  },
};
</script>

<style scoped>
</style>
