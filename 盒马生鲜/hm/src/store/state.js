export default {
  selectedIndex: 0, //当前选中的下标

  foodType: ["fruits", "ingredients", "snacks", "milks", "vegetables"], //最终形式二维数组  0蔬菜  1食材 2零食 3牛奶 4蔬菜
  fruits: [],
  ingredients: [],
  snacks: [],
  milks: [],
  vegetables: [],
  foodTypeId: [
    //定义食品类别列表
    "56c80da883af652643474b6b",
    "56c80db78d04c83d3d1dedea",
    "56c80dc031da9e480de1cb49",
    "56c80dc383af652643474b6d",
    "56c80dc88d04c83d3d1dedf3",
  ],
  currentCity: {
    createAt: "201	6-02-20T06:56:12.317Z",
    id: "56c80e0c789b068408ab5a6f",
    name: "北京市",
    updateAt: "2016-02-20T06:56:12.317Z",
  }, //默认为北京
  getSupportCity: [], //地区数据
  cartFoods: [], //购物车列表
  totalCount: 0, //购物车中所有商品
  totalPrice: 0, //购物车中所有商品的总价格
  isAllCheck: false,
  // selectCount: 0,
  // 收获地址
  myAddress: [
    {
      name: "Stunning",
      tel: "18157234567",
      locationArea: "韩山师范学院学院",
      detailAddress: "韩山师范学院学院韩东校区公寓2F",
      doorNumber: "307",
      type: "学校",
      defaultAddress: true,
    },
    {
      name: "WJCHumble",
      tel: "18157361230",
      locationArea: "韩山师范学院学院",
      detailAddress: "韩山师范学院学院韩东校区公寓2F",
      doorNumber: "307",
      type: "学校",
      defaultAddress: false,
    },
  ],
  selectedCount: 0,
  selectedFoodsPrice: 0,
};
