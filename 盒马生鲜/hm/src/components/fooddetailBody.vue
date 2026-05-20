<template>
  <section id="fooddetailBody">
    <!-- 轮播图 -->
    <div class="swiper-container" v-if="food.length!==0">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            :src="food.thumbnail.url"
            style="margin-top:50px;margin-left:120px"
            height="310px"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            :src="food.thumbnail.url"
            style="margin-top:50px;margin-left:120px"
            height="310px"
            alt
          />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 商品详情 -->
    <div class="info-name">
      <div id="wareName" class="name">{{food.name}}</div>
      <div id="description" class="description">{{food.description}}</div>
    </div>
    <div class="info-price">
      <div id="price" class="price">¥{{food.price}}</div>
      <div class="other">
        <div class="origin-price">
          <del id="originPrice">原价：{{food.originPrice}}</del>
        </div>
        <div id="unit" class="unit">规格：{{food.unit}}件</div>
        <div id="detail" class="place">产地：中国</div>
      </div>
    </div>
    <div class="info-discount">
      <div class="name">优惠活动：</div>
      <div class="value">全场满49元包邮</div>
    </div>
    <div class="push">
      <div class="top">“亚当和夏娃都无法抵挡的禁果诱惑”</div>
      <div class="bottom">下滑查看商品详情</div>
    </div>
  </section>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "FoodDetailBody",
  props: ["food"],
  updated() {
    new Swiper(".swiper-container", {
      //   direction: "vertical", // 垂直切换选项
      //   loop: true, // 循环模式选项
      /*  pagination: ".swiper-pagination",
        paginationClickable: true, */
      autoplay: true,

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>

<style lang='less' scoped>
section {
  height: 100%;
}

.info-name {
  box-sizing: border-box;
  width: 100%;
  height: 61px;
  padding-top: 8px;
  padding-left: 8px;
  border-bottom: 1px solid #ddd;
}

.info-name .name {
  width: 100%;
  height: 24px;
  line-height: 24px;
  color: #444;
  font-size: 18px;
}

.info-name .description {
  width: 100%;
  height: 20px;
  line-height: 20px;
  color: #888;
  font-size: 14px;
}

.info-price {
  box-sizing: border-box;
  width: 100%;
  height: 61px;
  padding-top: 8px;
  padding-left: 8px;
  border-bottom: 1px solid #ddd;
}

.info-price .price {
  width: 100%;
  height: 24px;
  line-height: 24px;
  color: #e3007f;
  font-size: 24px;
  font-weight: bolder;
}

.info-price .other {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-flex-flow: row;
  flex-flow: row;
  width: 100%;
  height: 20px;
}

.info-price .other div {
  width: 100%;
  height: 20px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  line-height: 20px;
  font-size: 14px;
  color: #888;
}

.info-price .other .origin-price {
  box-sizing: border-box;
  padding-left: 8px;
  text-align: left;
}

.info-price .other .unit {
  box-sizing: border-box;
  text-align: center;
}

.info-price .other .place {
  box-sizing: border-box;
  padding-right: 16px;
  text-align: right;
}

.info-discount {
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  border-bottom: 1px solid #ddd;
}

.info-discount .name {
  display: inline-block;
  width: auto;
  height: 15px;
  margin-top: 8px;
  margin-left: 8px;
  color: #444;
}

.info-discount .value {
  display: inline-block;
  width: auto;
  height: 15px;
  line-height: 15px;
  margin-top: 3px;
  padding: 4px;
  border-radius: 15px;
  box-shadow: 0 1px 1px 1px #eee;
  color: #fff;
  background-color: #e3007f;
}

.push {
  position: relative;
  box-sizing: border-box;
  padding-top: 8px;
  width: 100%;
  height: 60px;
  text-align: center;
  color: #888;
  font-size: 12px;
}

.push .top {
  height: 24px;
  line-height: 24px;
}

.push .bottom {
  height: 20px;
  line-height: 20px;
}
</style>