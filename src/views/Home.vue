<template>
  <el-container class="home">
    <el-header><Nav></Nav></el-header>
    <el-container style="margin-top:0.5%;" class="flex f1">
      <el-aside width="14%" style="padding-top: 10px"><Menu></Menu></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/layout/nav.vue";
import Menu from "@/components/layout/menu.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Menu,
  },
};
</script>
<style scoped>
.home {
  padding-left: 1%;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
}
</style>
