export default {
  path: "/myaddress",
  component: () => import("@/components/myAddress.vue"),
  children: [
    // 添加地址
    {
      path: "setaddress",
      component: () => import("@/components/addMyAddress"),
    },
    {
      path: "updateaddress/:index",
      component: () => import("@/components/delAddress"),
    },
  ],
};
