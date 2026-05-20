<template>
  <div>
    <mt-navbar
      v-model="selectedIndex"
      :style="{
        height: navStyleObj.height,
        background: navStyleObj.background,
        top: top ? '140px' : '50px',
      }"
    >
      <mt-tab-item
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{
        selected:index == selectedIndex
      }"
        :style="{
        borderBottomWidth:navStyleObj.fontSize ?'0px':'2px'
      }"
      >
        <span
          :style="{
          color:index == selectedIndex? itemSyleObj.activeColor :'#FFC0CB',
          fontSize:navStyleObj.fontSize,
          fontWeight:index == selectedIndex ? 'bold' :'normal'
        }"
          @click.stop="updateSelectedIndex(index)"
        >
          <i class="iconfont" :class="tab.icon ? tab.icon : ''"></i>
          {{ tab.name }}
        </span>
      </mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    tabs: Array,
    navStyleObj: {
      typed: Object,
      default: function () {
        return {
          height: "45px",
          background: "#F0F0F0",
        };
      },
    },
    itemSyleObj: {
      typed: Object,
      default: function () {
        return {
          activeColor: "#0695fb",
        };
      },
    },
    top: {
      typed: Boolean,
      default: false,
    },
  },
  data() {
    return {
      datalist: [],
      selectedIndex: "0",
    };
  },
  mounted() {
    //初始化选中的标签
    this.$store.dispatch("updateSelectedIndex", 0);
    this.selectedIndex = this.$store.state.selectedIndex;
  },
  methods: {
    updateSelectedIndex(index) {
      console.log("updateSelectedIndex");
      this.$store.dispatch("updateSelectedIndex", index);
      this.selectedIndex = this.$store.state.selectedIndex;

      // 定义当前的食材类型
      let currentFoodIndex = this.$store.state.foodType[index];
      if (
        this.$route.path == "/home" &&
        !this.$store.state[currentFoodIndex].length
      ) {
        this.$store.dispatch("getFoods", { foodIndex: index });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.mint-navbar {
  position: fixed;
  // position: fixed;
  // top:50px;
  // height: 45px;
  width: 100%;
  z-index: 5;
  .mint-tab-item.is-selected {
    border-bottom: none;
    color: #0695fb;
  }
  .mint-tab-item {
    padding-top: 12px;
    padding-bottom: 12px;
    font-weight: bolder;
  }
  .is-selected {
    color: #fff;
  }
}
span {
  font-size: 15px;
  color: #fff;
  // width: 75.037px!important;
  padding-left: 24.0235px;
  padding-right: 24.0235px;
  i {
    font-size: 20px;
    margin-right: 12px;
  }
}
.selected {
  border-bottom: 2px solid #0695fb;
}
</style>
