import ajax from "./ajax.js";

const BASE_URL = "http://d.apicloud.com/mcm/";

//获取支持地区列表
export const reqSupportArea = () => ajax(BASE_URL + "/api/supportArea");
//获取根据地区水果列表
export const reqFoodList = (filter) => ajax(BASE_URL + "/api/ware", filter);

// 使用mock图片接口
// 获取水果图片
export const reqFruitsImage = () => ajax("/fruits");
// 获取食材图片
export const reqIngredientsImage = () => ajax("/ingredients");
// 获取零食图片
export const reqSnakesImage = () => ajax("/snakes");
// 获取牛奶图片
export const reqMilksImage = () => ajax("/milks");
// 获取蔬菜图片
export const reqVegetablesImage = () => ajax("/vegetables");
