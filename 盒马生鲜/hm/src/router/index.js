import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/router/home.js";
import FoodList from "@/router/foodList.js";
import ShopCar from "@/router/shopCar.js";
import PersonCenter from "@/router/personCenter.js";
import MyOrder from "@/router/myOrder.js";
import MyAccount from "@/router/myAccount.js";
import MyCoupon from "@/router/myCoupon.js";
import MyAddress from "@/router/myAddress.js";
import Setting from "@/router/setting.js";
import Message from "@/router/message.js";
import Login from "@/router/login.js";
import FoodDetail from "@/router/fooddetail.js";
Vue.use(VueRouter);

const routerArr = [
  Home,
  FoodList,
  ShopCar,
  PersonCenter,
  MyOrder,
  MyAccount,
  MyCoupon,
  MyAddress,
  Setting,
  Message,
  Login,

  FoodDetail,
];

const routes = [
  ...routerArr,
  {
    path: "/",
    redirect: "/home",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
