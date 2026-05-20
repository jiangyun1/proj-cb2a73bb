<template>
  <div class="control" style="z-index:5">
    <transition-group
      name
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="panel" :key="1" v-if="food.count">
        <!-- 添加动画 -->
        <img class="minus" src="/image/minus.png" @click.stop.prevent="updataFoodCount(false)" />
        <div class="count">{{food.count}}</div>
      </div>
    </transition-group>
    <img class="add" src="/image/add.png" @click.stop.prevent="updataFoodCount(true)" />
  </div>
</template>

<script>
export default {
  name: "CartControl",
  props: {
    food: {
      typed: Object,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    updataFoodCount(isAdd) {
      console.log("jianshao");
      this.$store.dispatch("updatefoodcount", {
        food: this.food,
        isAdd: isAdd,
      });
      this.$store.commit("getGoodsSumAndTotal");
    },
  },
};
</script>

<style lang='less' scoped>
.control {
  top: 15px;
}

.control .panel {
  //   display: none;
  height: 23px;
}

.control .minus {
  position: absolute;
  top: 0;
  left: 5px;
  width: 23px;
  height: 23px;
}

.control .count {
  position: relative;
  top: 0;
  margin-left: 31px;
  //   margin-right: 31px;
  width: 100%;
  height: 23px;
  text-align: center;
  line-height: 23px;
  color: #444;
  font-size: 12px;
  background-image: url(/image/count.png);
  background-repeat: no-repeat;
  background-size: 48px 23px;
}

.control .add {
  position: absolute;
  top: 0;
  right: 0;
  width: 23px;
  height: 23px;
}
</style>