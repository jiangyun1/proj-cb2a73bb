<template>
  <header id="header">
    <!-- 根据路由控制显示是城市还是返回按钮 -->
    <div v-if="$route.path == '/home'" class="left" @click="toggleCity()">
      <div id="cityArrow" class="arrow-down"></div>
      <div id="cityText" class="city-text">{{currentCity.name}}</div>
    </div>
    <div v-else class="back" @click="$router.back()"></div>
    <!-- 每日生鲜标题 -->
    <div class="title" v-if="$route.path == '/home'"></div>

    <!-- 使用插槽，来控制显示的标题名字 -->
    <div class="win-name">
      <slot name="win-name"></slot>
    </div>
    <!-- 如果是home主页和个人账户主页则显示图标 -->
    <div
      v-if="$route.path == '/home' || $route.path == '/myaccount'"
      class="right"
      @click.stop="$router.push('/personcenter')"
    >
      <div class="member-center" :style="{ backgroundImage: `url(${rightIcon})` }"></div>
    </div>
    <div class="address-right">
      <slot name="address-right"></slot>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    rightIcon: String,
  },
  name: "HomeHeader",
  methods: {
    toggleCity() {
      this.$emit("showCitySelecter");
    },
    clickToPersonCenter() {
      this.$emit("ClickToPersonCenter");
    },
  },
  computed: {
    ...mapState(["currentCity"]),
  },
};
</script>

<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #0695fb;
  z-index: 2;
}

#header .left {
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 90px;
  height: 50px;
  z-index: 100;
}

#header .left .arrow-down {
  position: absolute;
  top: 21px;
  left: 12px;
  width: 13px;
  height: 8px;
  background-image: url("/image/arrow_down.png");
  background-size: 13px 8px;
  -webkit-transition: all 200ms;
  transition: all 200ms;
}

#header .left .arrow-up {
  -webkit-transform: rotate(-180deg);
  transform: rotate(-180deg);
}

#header .left .city-text {
  width: 100%;
  box-sizing: border-box;
  height: 14px;
  padding-left: 28px;
  padding-top: 18px;
  line-height: 14px;
  font-size: 14px;
  text-align: left;
  color: #fff;
}

#header .title {
  position: relative;
  top: 15px;
  height: 20px;
  width: 100%;
  background-image: url("/image/title_main.png");
  background-size: auto 20px;
  background-position: center center;
  background-repeat: no-repeat;
}
.back {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background-image: url("/image/back.png");
  background-position: 12px 16px;
  background-size: 11px 18px;
  background-repeat: no-repeat;
  z-index: 10;
}
#header .win-name {
  position: relative;
  height: 50px;
  width: 100%;
  text-align: center;
  color: #fff;
  line-height: 50px;
  font-size: 20px;
}

#header .right {
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 60px;
  height: 50px;
}

#header .right .member-center {
  position: absolute;
  top: 13px;
  right: 12px;
  width: 24px;
  height: 24px;
  /* background-image: url("/image/membercenter.png"); */
  background-size: auto 24px;
  background-position: center center;
}
#header .address-right {
  position: absolute;
  right: 10px;
  top: 17px;
  font-size: 15px;
  color: #fff;
}
</style>
