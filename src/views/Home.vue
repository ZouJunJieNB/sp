<template>
  <el-container class="home">
    <el-header><Nav></Nav></el-header>
    <el-container class="flex f1">
      <el-aside width="200px" style="padding-top: 10px"><Menu></Menu></el-aside>
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
  padding-left: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
}
</style>
