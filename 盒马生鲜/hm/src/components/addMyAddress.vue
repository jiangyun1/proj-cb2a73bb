<template>
  <div id="addMyAddress">
    <header>
      <!-- <div id="isDefault" class="select select-on"></div> -->
      <!-- 修改界面显示 -->
      <input
        type="checkbox"
        class="input"
        @click="setMyDefaultAddress(true)"
        v-model="$store.state.myAddress[$route.params.index].defaultAddress"
        v-if="$route.path==(`/myaddress/updateaddress/${$route.params.index}`)"
      />
      <!-- 添加的时候 -->
      <!-- <input
        type="checkbox"
        class="input"
        @click="setMyDefaultAddress(false)"
        v-if="$route.path==('/myaddress/setaddress')"
      />-->
      <div
        class="text"
        v-show="$route.path==(`/myaddress/updateaddress/${$route.params.index}`)"
      >设为默认地址</div>
    </header>
    <section>
      <div class="option">
        <div class="name">收货人：</div>
        <div class="input">
          <!-- 删除时显示 -->
          <input
            type="text"
            id="consignee"
            v-model="needToDelAddress.name"
            v-if="$route.path==(`/myaddress/updateaddress/${$route.params.index}`)"
          />
          <!-- 添加时显示 -->
          <input
            v-model="myNewAddress.name"
            id="consignee"
            type="text"
            placeholder="点击输入收货人姓名"
            v-if="$route.path==('/myaddress/setaddress')"
          />
        </div>
      </div>
      <div class="option">
        <div class="name">手机号码：</div>
        <div class="input">
          <!-- 删除时显示 -->
          <input
            type="text"
            id="mobile"
            v-model="needToDelAddress.tel"
            v-if="$route.path==(`/myaddress/updateaddress/${$route.params.index}`)"
          />
          <!-- 添加时显示 -->
          <input
            v-model="myNewAddress.tel"
            v-if="$route.path==('/myaddress/setaddress')"
            id="mobile"
            type="text"
            placeholder="点击输入收货人手机号码"
          />
        </div>
      </div>
      <div class="option">
        <div class="name">所在区域：</div>
        <div id="area" class="select">韩山师范学院学院</div>
        <div class="arrow-right-highlight"></div>
      </div>
      <div class="option">
        <div class="name">具体地址：</div>
        <div id="focus" class="select">韩山师范学院学院韩东校区公寓2F</div>
        <div class="arrow-right-highlight"></div>
      </div>
      <div class="option">
        <div class="name">楼号门牌：</div>
        <!-- 删除时显示 -->
        <div class="input">
          <input
            type="text"
            id="house"
            v-model="needToDelAddress.doorNumber"
            v-if="$route.path==(`/myaddress/updateaddress/${$route.params.index}`)"
          />
          <!-- 添加时显示 -->
          <input
            v-model="myNewAddress.doorNumber"
            id="house"
            type="text"
            placeholder="点击输入楼号门牌（例A座3单元1201"
            v-if="$route.path==('/myaddress/setaddress')"
          />
        </div>
      </div>
      <div class="option">
        <div class="name">地址类型：</div>
        <div id="type" class="multi-select" v-for="(type,index) in addressTypes" :key="index">
          <div class="item selected">{{type}}</div>
        </div>
      </div>
    </section>
    <footer>
      <div class="btn" @click.stop="saveMyAddress(true)">保存</div>
    </footer>
  </div>
</template>

<script>
import HomeHeader from "@/components/homeHeader";
import { mapState } from "vuex";
export default {
  name: "AddMyAddress",
  data() {
    return {
      addressTypes: ["公司", "住宅", "学校", "其他"],
      myNewAddress: {
        name: "",
        tel: "",
        locationArea: "韩山师范学院学院",
        detailAddress: "韩山师范学院学院韩东校区公寓2F",
        doorNumber: "",
        type: "学校",
        defaultAddress: false,
      },
    };
  },
  mounted() {
    console.log(this.myAddress[this.$route.params.index]);
  },
  computed: {
    ...mapState(["myAddress"]),
    needToDelAddress() {
      return this.myAddress[this.$route.params.index];
    },
  },
  components: {
    HomeHeader,
  },
  methods: {
    saveMyAddress(isAdd) {
      console.log("save");
      this.$store.dispatch("updateMyAddress", {
        isAdd: isAdd,
        myNewAddress: this.myNewAddress,
        myAddressIndex: this.$route.params.index || -1,
      });
      setTimeout(() => {
        this.setMyDefaultAddress();
        this.$router.replace("/myaddress");
      }, 1000);
    },
    setMyDefaultAddress(isDefault) {
      if (this.$route.params.index) {
        console.log("true");
        this.$store.commit("setMyDefaultAddress", {
          myAddressIndex: this.$route.params.index,
        });
      } /* else {
        this.$store.commit("setMyDefaultAddress", {
          myNewAddress: this.myNewAddress,
          myAddressIndex: -1,
        });
      } */
    },
  },
};
</script>

<style scoped>
#addMyAddress {
  margin-top: 60px;
  background-color: white;
  position: absolute;
}
#addMyAddress header {
  width: 100%;
  height: 60px;
  margin-bottom: 1px;
  background-color: #fff;
  display: flex;
}
#addMyAddress header .input {
  height: 20px;
  width: 20px;
  margin: 20px;
}
#addMyAddress header .select {
  position: absolute;
  width: 16px;
  height: 16px;
  top: 22px;
  left: 16px;
  background-image: url(/image/select_off.png);
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
}

#addMyAddress header .select-on {
  background-image: url(/image/select_on.png);
}

#addMyAddress header .text {
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  padding-left: 0px;
  line-height: 60px;
  font-size: 20px;
  color: #444;
  text-align: left;
  /* padding-bottom: 15px; */
}

#addMyAddress section {
  height: auto;
  width: 100%;
}

#addMyAddress section .option {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-flex-flow: row;
  flex-flow: row;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 1px;
  background-color: #fff;
}

#addMyAddress section .option .name {
  width: auto;
  line-height: 60px;
}

#addMyAddress section .option .input {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  height: 60px;
  box-sizing: border-box;
  padding-top: 22px;
}

#addMyAddress section .option .input input {
  font-size: 14px;
  width: 100%;
  height: 20px;
  line-height: 14px;
  vertical-align: top;
  border: none;
}

#addMyAddress section .option .select {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  height: 60px;
  line-height: 60px;
}

#addMyAddress section .option .arrow-right-highlight {
  position: absolute;
  right: -70px;
  top: 22px;
  width: 8px;
  height: 16px;
  line-height: 60px;
  background-image: url(/image/item_user_address_right.png);
  background-repeat: no-repeat;
  background-size: 8px 16px;
  background-position: right center;
}

#addMyAddress section .option .multi-select {
  box-sizing: border-box;
  padding-top: 11px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  height: 60px;
}

#addMyAddress section .option .multi-select .item {
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 4px 8px;
  color: #888;
  font-size: 18px;
  text-align: center;
  line-height: 30px;
  border-radius: 19px;
  border: 1px solid #888;
}

#addMyAddress section .option .multi-select .selected {
  color: #e3007f;
  border: 1px solid #e3007f;
}

#addMyAddress footer {
  position: relative;
  margin-top: 16px;
  width: 100%;
  height: 50px;
  text-align: center;
}

#addMyAddress footer .btn {
  margin: 0 auto;
  height: 44px;
  width: 200px;
  background-color: #e3007f;
  border-radius: 22px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  line-height: 44px;
}

.highlight {
  opacity: 0.7;
}
</style>
