<template>
  <div id="app">
    <div v-if="!$route.meta.withoutLayout" class="app">
      <el-container>
        <el-header height="80px"><Nav /></el-header>
        <el-container style="overflow: hidden; margin-top: 5px; height: 100%">
          <el-aside width="220px"><Menu /></el-aside>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
    <router-view v-show="$route.meta.withoutLayout"></router-view>
  </div>
</template>

<script>
import Nav from "@/components/layout/nav.vue";
import Menu from "@/components/layout/menu.vue";

export default {
  created() {
    console.log(this.$route);
  },
  components: {
    Nav,
    Menu,
  },
};
</script>
<style scoped lang="less">
.app {
  height: 100%;
  padding-left: 10px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .el-header {
    padding: 0;
  }
  .el-container {
    height: 100%;
  }
  .el-main {
    height: 100%;
    padding: 0;
    margin-left: 10px;
  }
}
</style>
