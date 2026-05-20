<template>
  <div id="myAddress" v-if="myAddress.length !==0">
    <HomeHeader>
      <div slot="win-name">收货地址</div>
      <div
        slot="address-right"
        class="add"
        v-if="$route.path == '/myaddress'"
        @click.stop="$router.push('/myaddress/setaddress')"
      >添加</div>
    </HomeHeader>
    <div v-if="$route.path==('/myaddress')">
      <MyAddressList></MyAddressList>
    </div>
    <router-view />
  </div>
</template>

<script>
import HomeHeader from "@/components/homeHeader";
import MyAddressList from "@/components/myAddressList";
import { mapState } from "vuex";
export default {
  name: "MyAddress",
  components: {
    HomeHeader,
    MyAddressList,
  },
  computed: {
    ...mapState(["myAddress"]),
  },
};
</script>

<style scoped>
.add {
  margin-right: 10px;
}
</style>
