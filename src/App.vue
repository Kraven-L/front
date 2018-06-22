<template>
  <div id="app">
    <common-header></common-header>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../static/css/reset.less";

body {
  background: #f5f5f5;
  font-family: "Microsoft YaHei";
}
.main {
  width: 1200px;
  margin: 0 auto;
}
</style>
