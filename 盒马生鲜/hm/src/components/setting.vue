<template>
  <div id="setting">
    <HomeHeader>
      <div slot="win-name">设置</div>
    </HomeHeader>
    <section id="sec">
      <div class="option">
        <div class="title">清除缓存</div>
        <div class="arrow-panel">
          <div id="cacheSize" class="text"></div>
        </div>
      </div>
      <div class="option">
        <div class="title">关于</div>
        <div class="arrow-panel">
          <div class="text"></div>
        </div>
      </div>
      <div class="button">退出登录</div>
    </section>
  </div>
</template>

<script>
import HomeHeader from "@/components/homeHeader";
export default {
  name: "Setting",
  components: {
    HomeHeader,
  },
};
</script>

<style scoped>
#setting .option {
  position: relative;
  box-sizing: border-box;
  height: 61px;
  border-bottom: 1px solid #ddd;
}
#setting #sec {
  margin-top: 50px;
}

#setting .option .title {
  position: relative;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding-left: 16px;
  line-height: 60px;
  font-size: 14px;
  color: #444;
  text-align: left;
}

#setting .option .arrow-panel {
  position: absolute;
  top: 0;
  right: 12px;
  width: auto;
  height: 60px;
  background-image: url(../image/arrow_right.png);
  background-repeat: no-repeat;
  background-size: 16px 24px;
  background-position: right center;
}

#setting .option .arrow-panel .text {
  box-sizing: border-box;
  width: auto;
  height: 60px;
  padding-right: 20px;
  line-height: 60px;
  font-size: 13px;
  color: #888;
  text-align: left;
}

#setting .button {
  width: auto;
  height: 50px;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 16px;
  background-color: #f00;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  border-radius: 8px;
}

.highlight {
  opacity: 0.7;
}
</style>
