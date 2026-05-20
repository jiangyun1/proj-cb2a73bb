<template>
  <div>
    <HomeHeader></HomeHeader>
    <section id="section">
      <PersonCenterBody></PersonCenterBody>
    </section>
    <footer id="footer">
      <div class="item" @click.stop="$router.push('/setting')">
        <div class="button setting">设置</div>
      </div>
      <div class="item" @click.stop="$router.push('/message')">
        <div class="button message">消息</div>
      </div>
      <div class="item"></div>
      <div class="item item-service" @click.stop="showService()">
        <div class="button service">客服</div>
      </div>
    </footer>
  </div>
</template>

<script>
import HomeHeader from "@/components/homeHeader.vue";
import PersonCenterBody from "@/components/PersonCenterBody.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vue from "vue";
Vue.use(ElementUI);

export default {
  name: "PersonCenter",
  components: {
    PersonCenterBody,
    HomeHeader,
  },
  methods: {
    showService() {
      this.$confirm("您将拨打电话：555555", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
        iconClass: "tips",
      })
        .then(() => {
          console.log("确定");
        })
        .catch(() => {
          console.log("取消");
        });
    },
  },
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 50px;
  background-color: #e3007f;
}

#header .back {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background: url(/image/back.png);
  background-position: 12px 16px;
  background-size: 11px 18px;
  background-repeat: no-repeat;
}

#section {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}

footer {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-flex-flow: row;
  flex-flow: row;
  width: 100%;
  height: 50px;
  position: absolute;
  left: 0;
  bottom: 0;
}

footer .item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  width: 100%;
  height: 50px;
}

footer .item-service {
  text-align: right;
}

footer .item .button {
  display: inline-block;
  width: auto;
  height: 50px;
  box-sizing: border-box;
  line-height: 50px;
  text-align: left;
  font-size: 16px;
  background-size: auto 16px;
  background-position: 16px center;
  background-repeat: no-repeat;
}

.setting {
  padding-left: 34px;
  background-image: url(/image/user_setting.png);
}

.message {
  padding-left: 44px;
  background-image: url(/image/icon_user_messages.png);
}

.service {
  padding-left: 34px;
  padding-right: 16px;
  background-image: url(/image/user_call.png);
}
</style>
