import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入vue-touch
import VueTouch from "vue-touch";
Vue.use(VueTouch, {
  name: "v-touch",
});

// 引入mint-ui库
import MintUI from "mint-ui";
/* import {
  Navbar,
  TabItem
} from 'mint-ui'; */
import "mint-ui/lib/style.css";
Vue.use(MintUI);
/* Vue.use(Navbar) 
Vue.use(TabItem) */

// 引入mock js
import "./mock/mock.js";

// 引入swiper组件
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
Vue.use(VueAwesomeSwiper);

// 引入animation
import animated from "animate.css";
Vue.use(animated);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
