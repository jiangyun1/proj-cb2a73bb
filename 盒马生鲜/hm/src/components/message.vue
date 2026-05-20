<template>
  <div id="message">
    <HomeHeader>
      <div slot="win-name">消息</div>
    </HomeHeader>
    <MessageList></MessageList>
  </div>
</template>

<script>
import HomeHeader from "@/components/homeHeader";
import MessageList from "@/components/messageList.vue";
export default {
  name: "Message",
  components: {
    HomeHeader,
    MessageList,
  },
};
</script>

<style scoped></style>
