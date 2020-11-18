<template>
  <div class="memu">
    <menu-sun :menuList="menus" />
  </div>
</template>
<script>
import MenuSun from "@/components/layout/menuList.vue";
export default {
  components: {
    MenuSun,
  },
  data() {
    return {
      menus: {},
    };
  },
  methods: {},
  mounted() {
    let obj = localStorage.getItem("user");
    let user = JSON.parse(obj);
    this.menus = user.menu;
  },
};
</script>

<style lang="less" scoped>
.memu {
  border-right: 0;
  background: url("../../assets/menu-bg.png") no-repeat center;
  background-size: 100% 100%;
  height: 100%;
  overflow-x: hidden;
  // overflow-y: scroll;
  border-radius: 18px;
}
.el-col {
  width: 100%;
}
.el-menu {
  color: #fff;
  border: 0;
  background: none;
  overflow-x: hidden;
  // overflow-y: scroll;
  margin-top: 20px;
}

// .el-menu-item:link,
// .el-menu-item:visited,
// .el-menu-item:hover,
// .el-menu-item:active {
//   background: url(../../assets/menuxz.png) no-repeat center;
//   background-size: 101% 100%;
//   border-top-left-radius: 25px;
//   border-bottom-left-radius: 25px;
// }
// .el-menu-item .is-active {
//   color: #fff;
//   background: url(../../assets/menuxz.png) no-repeat center;
//   background-size: 101% 100%;
//   border-top-left-radius: 25px;
//   border-bottom-left-radius: 25px;
// }

.submenu {
  color: red;
  font-size: 16px;
}

.el-menu-item {
  color: #fff;
  padding: 0;
}
.el-submenu .el-menu-item {
  padding: 0;
  font-size: 16px;
  margin-left: 25px;
  min-width: 0;
}

.el-menu .secondLevel {
  margin-left: 25px;
}
.el-submenu .threeLevels {
  font-size: 14px;
  margin-left: 0px;
  padding-left: 50px !important;
}
.el-submenu__title .iconfont {
  display: inline-block;
  text-align: center;
  width: 30px;
  font-size: 20px;
}
.el-submenu__title .el-submenu__icon-arrow {
  display: inline-block;
  text-align: center;
  width: 30px;
  font-size: 16px;
}
.el-submenu__title:hover {
  background: red;
}
</style>
