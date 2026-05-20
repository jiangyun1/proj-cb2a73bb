<template>
  <div>
    <HomeHeader>
      <div slot="win-name">收货地址</div>
      <div slot="address-right" @click="updateMyAddress(false)">删除</div>
    </HomeHeader>
    <AddMyAddress></AddMyAddress>
  </div>
</template>

<script>
import HomeHeader from "@/components/homeHeader";
import AddMyAddress from "@/components/addMyAddress";
import { mapState } from "vuex";
export default {
  name: "DelAddress",
  components: {
    HomeHeader,
    AddMyAddress,
  },
  computed: {
    ...mapState(["myAddress"]),
    delCurAddress() {
      return this.myAddress[this.$route.params.index];
    },
  },
  methods: {
    updateMyAddress(isAdd) {
      console.log("del");
      this.$store.dispatch("updateMyAddress", {
        isAdd: isAdd,
        myNewAddress: this.delCurAddress,
        myAddressIndex: this.$route.params.index,
      });
      setTimeout(() => {
        this.$router.replace("/myaddress");
      }, 1000);
    },
  },
};
</script>

<style lang='less' scoped>
</style>