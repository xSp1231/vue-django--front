<template>
  <div id="app">
    <router-view></router-view><!-----路由出口-------->
  </div>
</template>
<script>

export default {
  name: 'App',
}
</script>
<style lang="less" >
//全局样式设定  不加scoped
html,
body {
  margin:0px;
  padding: 0px;
}
</style>
