// 导入mutation名称
import {
  UPDATE_SELECTEDINDEX,
  GET_FOOD_LIST,
  GET_SUPPORT_CITY,
  SET_CURRENT_CITY,
  INCREASE_FOOD_COUNT,
  REDUCE_FOOD_COUNT,
  ADD_MY_ADDRESS,
  DEL_MY_ADDRESS,
} from "@/store/mutation-type.js";
// 导入axios请求
import {
  reqSupportArea,
  reqFoodList,
  reqFruitsImage,
  reqIngredientsImage,
  reqSnakesImage,
  reqMilksImage,
  reqVegetablesImage,
} from "../api/index.js";

export default {
  // 更新导航下标
  updateSelectedIndex({ commit }, selectedIndex) {
    commit(UPDATE_SELECTEDINDEX, selectedIndex);
  },

  // 获取商品列表数据
  async getFoods({ commit, state }, { foodIndex }) {
    let filter = {
      fields: {},
      where: {
        supportAreaId: state.currentCity.id,
        wareTypeId: state.foodTypeId[foodIndex],
      },
      skip: 0,
      limit: 5,
    };
    filter = JSON.stringify(filter);

    // foods是商品列表数据，result是图片
    let foods, result;
    switch (foodIndex) {
      case 0:
        foods = await reqFoodList({
          filter,
        });
        result = await reqFruitsImage();
        break;
      case 1:
        foods = await reqFoodList({
          filter,
        });
        result = await reqIngredientsImage();
        break;
      case 2:
        foods = await reqFoodList({
          filter,
        });
        result = await reqSnakesImage();
        break;
      case 3:
        foods = await reqFoodList({
          filter,
        });
        result = await reqMilksImage();
        break;
      case 4:
        foods = await reqFoodList({
          filter,
        });
        result = await reqVegetablesImage();
        break;
    }
    console.log(foods);
    let foodImage = result.data.url;
    commit(GET_FOOD_LIST, {
      foods,
      foodImage,
      typeIndex: foodIndex,
    });
  },
  // 获取城市地区数据
  async GetSupportCity({ commit }) {
    let result = await reqSupportArea();
    console.log(result);
    commit(GET_SUPPORT_CITY, result);
  },
  // 设置当前城市
  setCurrentCity({ commit }, index) {
    commit(SET_CURRENT_CITY, index);
  },

  // 加减商品数量（加减按钮）
  updatefoodcount({ commit }, { food, isAdd }) {
    if (isAdd) {
      // 增加数量
      commit(INCREASE_FOOD_COUNT, food);
    } else {
      // 减少数量
      commit(REDUCE_FOOD_COUNT, food);
    }
  },
  // 改变商品状态
  /*   updataStatue({ commit }, { newFood, is_Check }) {
    commit(UPDATE_STATUE_TOFALSE, { newFood, is_Check });
  }, */
  // 添加删除地址
  updateMyAddress({ commit }, { isAdd, myNewAddress, myAddressIndex }) {
    if (isAdd) {
      commit(ADD_MY_ADDRESS, { myNewAddress, myAddressIndex });
    } else {
      commit(DEL_MY_ADDRESS, myAddressIndex);
    }
  },
};
