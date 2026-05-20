<template>
  <div id="city-selector" v-show="isShow">
    <header id="city-title">
      <div class="city-title">选择所需服务的地区</div>
    </header>
    <section id="citylist">
      <div
        class="city"
        v-for="(city,index) in getSupportCity"
        :key="index"
        @click="selectCity(index)"
      >{{city.name}}</div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CitySelector",
  props: {
    isShow: Boolean,
  },
  mounted() {
    this.$store.dispatch("GetSupportCity");
  },
  computed: {
    ...mapState(["getSupportCity"]),
  },
  methods: {
    selectCity(index) {
      // this.isShow = false;
      this.$store.dispatch("setCurrentCity", index);
      this.$emit("update:isShow", false);
    },
  },
};
</script>
<style lang="scss" scoped>
#city-selector {
  /* box-sizing: border-box; */
  position: absolute;
  top: 50%;
  left: 50%;
  height: 364px;
  width: 240px;
  margin-left: -120px;
  margin-top: -160px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
}

.city-title {
  box-sizing: border-box;
  width: auto;
  height: 44px;
  margin: 0 32px;
  padding-top: 15px;
  padding-bottom: 16px;
  border-bottom: 2px solid #c8026f;
  color: #fff;
  font-size: 14px;
  text-align: center;
}

#citylist {
  box-sizing: border-box;
  height: 320px;
  width: 100%;
  overflow: auto;
}

#citylist .city {
  width: 100%;
  height: 55px;
  line-height: 55px;
  text-align: center;
  font-size: 20px;
  color: #e8e8e8;
}

.highlight {
  opacity: 0.7;
}
</style>

