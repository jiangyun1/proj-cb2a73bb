<template>
  <div id="myCouponList">
    <div class="coupon">
      <div class="title">优惠卷</div>
      <div class="price">50.0<span>￥</span></div>
      <div class="info">
        <div class="top">APP新客户50元体验卷</div>
        <div class="middle">满99元使用（含运费）</div>
        <div class="bottom">有效期至2016年10月1日</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#myCouponList {
  position: relative;
  box-sizing: border-box;
  padding: 8px 16px;
  width: 722px;
  height: auto;
  transform-origin: left top;
  -webkit-transform-origin: left top;
}

#myCouponList .coupon {
  position: relative;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 497px;
  height: 105px;
  left: -57px;
  background-image: url(/image/coupon_background.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 352px 105px;
}

#myCouponList .coupon .title {
  position: absolute;
  width: 96px;
  height: 20px;
  left: 90px;
  font-size: 13px;
  text-align: center;
  color: #e3007f;
  line-height: 20px;
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transform-origin: left top;
  -webkit-transform-origin: left top;
}

#myCouponList .coupon .price {
  position: absolute;
  box-sizing: border-box;
  width: 66px;
  left: 115px;
  top: 30px;
  font-size: 24px;
  color: #fff;
  font-weight: bolder;
  text-align: center;
}

#myCouponList .coupon .price span {
  display: inline;
  font-size: 24px;
}

#myCouponList .coupon .info {
  position: relative;
  box-sizing: border-box;
  width: 300px;
  left: 152px;
  color: #fff;
}

#myCouponList .coupon .info .top {
  position: relative;
  height: 32px;
  line-height: 40px;
  font-size: 15px;
  left: 82px;
  font-weight: bolder;
}

#myCouponList .coupon .info .middle {
  position: relative;
  height: 32px;
  line-height: 40px;
  font-size: 20px;
  left: 76px;
}

#myCouponList .coupon .info .bottom {
  position: relative;
  height: 32px;
  line-height: 40px;
  font-size: 15px;
  left: 79px;
}
</style>
