<template>
  <footer id="footer">
    <div class="control">
      <img id="minus" src="/image/minus.png" class="minus" />
      <div id="count" class="count">0</div>
      <img id="add" src="/image/add.png" class="add" />
    </div>
    <img src="/image/buynow.png" class="buy-button" />
  </footer>
</template>

<script>
export default {
  name: "FoodDetailFoot",
};
</script>

<style scoped>
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: black;
}

.buy-button {
  width: 112px;
  height: 40px;
  float: right;
  margin-top: 5px;
}

.control {
  position: absolute;
  top: 12px;
  left: 16px;
  width: 110px;
  height: 25px;
}

.minus {
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  height: 25px;
}

.count {
  position: relative;
  top: 0;
  margin-left: 31px;
  margin-right: 31px;
  width: auto;
  height: 25px;
  text-align: center;
  line-height: 25px;
  color: #444;
  font-size: 14px;
  background-image: url(/image/count.png);
  background-repeat: no-repeat;
  background-size: 48px 25px;
  background-position: center center;
}

.add {
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
}

.highlight {
  opacity: 0.7;
}
</style>