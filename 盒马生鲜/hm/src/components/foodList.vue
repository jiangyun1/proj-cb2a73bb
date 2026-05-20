<template>
  <div id="foodList">
    <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
      <header id="banner">
        <img class="banner" src="/image/banner/56c80db78d04c83d3d1dedea.png" />
      </header>
      <!-- <section id="list"></section> -->
      <mt-tab-container ref="container" v-model="selectedIndex">
        <mt-tab-container-item
          v-for="(type,index_) in foodType"
          :key="index_"
          :id="tabContainer[index_]"
        >
          <Food
            v-for="(food,index) in $store.state[type]"
            :key="index"
            :food="food"
            @click.native="$router.push(`/fooddetail/${type}/${index}`)"
          ></Food>
        </mt-tab-container-item>
      </mt-tab-container>
      <!-- <div class="push-status" id="pushStatus">上拉显示更多</div> -->
    </v-touch>
  </div>
</template>

<script>
import Food from "@/components/food";
import { mapState } from "vuex";
export default {
  name: "FoodList",
  data() {
    return {
      currentIndex: 0,
      tabContainer: [
        "tab-container1",
        "tab-container2",
        "tab-container3",
        "tab-container4",
        "tab-container5",
      ],
    };
  },
  components: {
    Food,
  },
  computed: {
    ...mapState(["fruits", "foodType"]),
    selectedIndex: {
      get() {
        return (this.currentIndex = `tab-container${
          this.$store.state.selectedIndex + 1
        }`);
      },
      set(val) {
        return (this.currentIndex = `tab-container${
          this.$store.state.selectedIndex + 1
        }`);
      },
    },
  },
  methods: {
    onSwipeLeft() {
      console.log("left");
      this.$emit("v-onSwipeLeft");
    },
    onSwipeRight() {
      console.log("right");
      this.$emit("v-onSwipeRight");
    },
  },
  mounted() {
    if (this.fruits.length === 0) {
      this.$store.dispatch("getFoods", {
        foodIndex: 0,
      });
    }
  },
};
</script>

<style scoped>
#foodList {
  margin-top: 100px;
}
#banner {
  width: 100%;
  height: 130px;
  box-sizing: border-box;
  padding: 4px 10px;
  margin-top: 50px;
}

#banner .banner {
  width: 100%;
  height: 100%;
}
#list {
  position: relative;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0 8px;
}
#pushStatus {
  width: 100%;
  height: 40px;
  font-size: 16px;
  color: #888;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
}
</style>
