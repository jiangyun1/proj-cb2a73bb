import {
  UPDATE_SELECTEDINDEX,
  GET_FOOD_LIST,
  GET_SUPPORT_CITY,
  SET_CURRENT_CITY,
  INCREASE_FOOD_COUNT,
  REDUCE_FOOD_COUNT,
  ADD_MY_ADDRESS,
  DEL_MY_ADDRESS,
} from "./mutation-type.js";

import Vue from "vue";

export default {
  // 更新导航下标
  [UPDATE_SELECTEDINDEX](state, selectedIndex) {
    state.selectedIndex = selectedIndex;
  },
  // 获取商品列表
  [GET_FOOD_LIST](state, { foods, foodImage, typeIndex }) {
    // 遍历商品图片
    // console.log(foods);
    foodImage.forEach((item, index) => {
      foods[index].thumbnail.url = item.url;
    });

    let foodType = state.foodType[typeIndex];
    state[foodType] = foods;
  },
  //获取城市数据
  [GET_SUPPORT_CITY](state, result) {
    state.getSupportCity = result;
  },
  //设置当前城市
  [SET_CURRENT_CITY](state, index) {
    state.currentCity = state.getSupportCity[index];
    console.log(state.currentCity.name);
  },
  // 增加商品数量
  [INCREASE_FOOD_COUNT](state, food) {
    // 判断当前数量是否为0
    if (!food.count) {
      Vue.set(food, "count", 1);
      Vue.set(food, "totalPrice", food.price);
      Vue.set(food, "statue", false);
      state.cartFoods.push(food);
    } else {
      const index = state.cartFoods.findIndex((item) => {
        return item.id == food.id;
      });
      if (index != -1) {
        food.count++;
        food.totalPrice = parseFloat((food.totalPrice + food.price).toFixed(2));
      }
    }
    state.totalCount++;
    state.totalPrice = parseFloat((state.totalPrice + food.price).toFixed(2));
    // window.localStorage.setItem("cartFoods", JSON.stringify(state.cartFoods));
    // console.log(state.cartFoods);
  },
  // 减少商品数量
  [REDUCE_FOOD_COUNT](state, food) {
    // 判断当前有没有数量
    if (!food.count) {
      return;
    } else {
      if (food.count >= 1) {
        food.count--;
        state.totalCount--;
        food.totalPrice = parseFloat((food.totalPrice - food.price).toFixed(2));
        state.totalPrice = parseFloat(
          (state.totalPrice - food.price).toFixed(2)
        );
      } else {
        state.cartFoods.splice(state.cartFoods.lastIndexOf(food), 1);
      }
    }
    // window.localStorage.setItem("cartFoods", JSON.stringify(state.cartFoods));
  },
  //  计算购物车中已选择的商品数量和价格
  getGoodsSumAndTotal(state) {
    state.selectedCount = 0;
    state.selectedFoodsPrice = 0;
    state.cartFoods.forEach((item) => {
      if (item.statue) {
        state.selectedCount += item.count;
        state.selectedFoodsPrice = parseFloat(
          (item.count * item.price).toFixed(2)
        );
      }
      console.log(state.cartFoods);
    });
  },
  //添加地址
  [ADD_MY_ADDRESS](state, { myNewAddress, myAddressIndex }) {
    if (myAddressIndex == -1) {
      state.myAddress.push(myNewAddress);
      console.log(state.myAddress);
    }
  },
  // 删除地址
  [DEL_MY_ADDRESS](state, myAddressIndex) {
    state.myAddress.splice(myAddressIndex, 1);
  },
  //设置默认地址
  setMyDefaultAddress(state, { myNewAddress, myAddressIndex }) {
    console.log(myAddressIndex);
    if (state.myAddress[myAddressIndex].defaultAddress) {
      state.myAddress.forEach((item) => {
        item.defaultAddress = false;
      });
      state.myAddress[myAddressIndex].defaultAddress = true;
    }
    // console.log(state.myAddress);

    //   if (myAddressIndex == -1) {
    //     state.myAddress.map((item) => {
    //       item.defaultAddress = false;
    //     });
    //     myNewAddress.defaultAddress = true;
    //   }
    //   console.log("default");
  },
};
