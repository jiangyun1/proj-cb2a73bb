<template>
  <div>
    <input
      v-model="food.statue"
      type="checkbox"
      :class="[food.statue ? 'select' :'selectOff']"
      @click="checkOne()"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Vue from "vue";
export default {
  name: "RadioButton",
  props: {
    food: {
      typed: Object,
      default: function () {
        return {};
      },
    },
  },
  computed: {
    ...mapState(["cartFoods"]),
  },
  // 购物车中的food

  methods: {
    checkOne() {
      console.log("danji");
      setTimeout(() => {
        var check_num = 0;
        this.cartFoods.forEach((item) => {
          if (item.statue) {
            check_num++;
          }
        });
        this.$store.commit("getGoodsSumAndTotal");
        if (check_num == this.cartFoods.length) {
          return (this.$store.state.isAllCheck = true);
        } else {
          return (this.$store.state.isAllCheck = false);
        }

        // this.$emit("changeStatue", this.isAllCheck);
      }, 300);

      // this.food.statue = !this.food.statue;
    },
  },
};
</script>

<style lang='less' scoped>
.select {
  position: relative;
  top: 10px;
  left: 5px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-image: url(/image/select_on.png);
  background-size: 100% 100%;
  background-position: center center;
  z-index: 2;
}

.selectOff {
  background-image: url(/image/select_off.png);
  position: relative;
  top: 10px;
  left: 5px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-image: url(/image/select_off.png);
  background-size: 100% 100%;
  background-position: center center;
  z-index: 2;
}
</style>