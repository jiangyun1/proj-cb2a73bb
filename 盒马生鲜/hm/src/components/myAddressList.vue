<template>
  <div id="myAddressList">
    <div class="address" v-for="(address,index) in myAddress" :key="index">
      <div>
        <div class="icon" v-if="address.defaultAddress"></div>
        <div class="sign" v-if="address.defaultAddress">[默认]</div>
      </div>
      <div class="info">
        <div class="top">
          <div class="consignee">收货人:{{address.name}}</div>
          <div class="mobile">{{address.tel}}</div>
        </div>
        <div class="bottom">
          <div class="type">[{{address.type}}]</div>
          <div class="text">{{address.locationArea}}</div>
        </div>
      </div>
      <div class="arrow" @click.stop="$router.push(`/myaddress/updateaddress/${index}`)"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["myAddress"]),
  },
};
</script>

<style scoped>
#myAddressList {
  /*display: none;*/
  position: absolute;
  top: 50px;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e6e6e6;
}

#myAddressList .address {
  box-sizing: border-box;
  width: 100%;
  height: auto;
  margin-bottom: 1px;
  padding: 8px 16px;
  background-color: #fff;
  top: 10px;
}

#myAddressList .address .icon {
  position: relative;
  top: 40px;
  left: 5px;
  width: 19px;
  height: 24px;
  background-image: url(/image/icon_address.png);
  background-repeat: no-repeat;
  background-size: auto 20px;
  background-position: center center;
}

#myAddressList .address .sign {
  /* display: none; */
  position: relative;
  top: 55px;
  left: 0px;
  width: 35px;
  height: 14px;
  line-height: 14px;
  font-size: 12px;
  color: #444;
  text-align: center;
}

#myAddressList .address .sign-1 {
  display: block;
}

#myAddressList .address .info {
  position: relative;
  box-sizing: border-box;
  padding-left: 36px;
  padding-right: 28px;
  width: 100%;
  height: auto;
}

#myAddressList .address .info .top {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  color: #444;
  line-height: 32px;
  font-size: 14px;
}

#myAddressList .address .info .top .consignee {
  display: inline;
  /* width: auto; */
}

#myAddressList .address .info .top .mobile {
  display: inline;
  /* width: auto; */
  margin-left: 16px;
}

#myAddressList .address .info .bottom {
  position: relative;
  width: 100%;
  min-height: 32px;
  line-height: 32px;
  color: #888;
  font-size: 14px;
}

#myAddressList .address .info .bottom .type {
  display: inline;
  /* width: auto; */
  color: #e3007f;
  font-weight: bolder;
}

#myAddressList .address .info .bottom .text {
  display: inline;
  /* width: auto; */
}

#myAddressList .address .arrow {
  position: relative;
  left: 100%;
  top: -50px;
  width: 8px;
  height: 16px;
  background-image: url(/image/item_user_address_right.png);
  background-repeat: no-repeat;
  background-size: 8px 16px;
  background-position: right center;
}

.empty {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  background-image: url(/image/address_empty.png);
  background-repeat: no-repeat;
  background-size: auto 93px;
  background-position: center 50px;
}

.highlight {
  opacity: 0.7;
}
</style>
