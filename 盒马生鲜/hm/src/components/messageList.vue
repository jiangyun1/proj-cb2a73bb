<template>
  <div id="messageList">
    <div class="message">
      <div class="type">优惠提醒</div>
      <div class="content">【盒马生鲜】尊敬的客户，您领到一张新的优惠卷。快去看看吧~！</div>
      <div class="tag">
        <div class="time">2016-02-26 12:02:08</div>
        <div class="arrow">查看详情</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageList",
};
</script>

<style scoped>
#messageList {
  position: relative;
  height: auto;
  background-color: white;
  margin-top: 50px;
}

#messageList .message {
  position: relative;
  box-sizing: border-box;
  height: auto;
  margin-bottom: 8px;
  background-color: #fff;
}

#messageList .message .type {
  position: relative;
  box-sizing: border-box;
  height: 30px;
  padding-left: 40px;
  color: #888;
  font-size: 12px;
  line-height: 30px;
  background-size: auto 16px;
  background-image: url("/image/icon_user_coupon.png");
  background-repeat: no-repeat;
  background-position: 8px center;
}

#messageList .message .content {
  position: relative;
  box-sizing: border-box;
  height: auto;
  word-wrap: normal;
  min-height: 24px;
  padding-left: 12px;
  color: #444;
  font-size: 14px;
  line-height: 24px;
}

#messageList .message .tag {
  position: relative;
  height: 30px;
  color: #888;
}

#messageList .message .tag .time {
  position: absolute;
  box-sizing: border-box;
  padding-left: 12px;
  height: 30px;
  text-align: left;
  font-size: 10px;
  line-height: 30px;
}

#messageList .message .tag .arrow {
  position: absolute;
  box-sizing: border-box;
  padding-right: 16px;
  right: 0;
  height: 30px;
  margin-right: 12px;
  text-align: right;
  font-size: 10px;
  line-height: 30px;
  background-image: url(/image/arrow_right.png);
  background-repeat: no-repeat;
  background-size: 10px 16px;
  background-position: right center;
}

.highlight {
  opacity: 0.7;
}
</style>
