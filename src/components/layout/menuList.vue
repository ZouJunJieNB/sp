<template>
  <div>
    <el-menu
      :default-active="this.$router.path"
      router
      text-color="#fff"
      unique-opened
    >
      <template v-for="item in menuList">
        <el-submenu
          v-if="item.children && item.children.length > 0"
          :key="item.id"
          :index="item.id"
        >
          <template slot="title">
            <i class="el-icon-location" style="color:#fff"></i>
            <span style="font-size:16px;margin-left:10px;">{{
              item.menuName
            }}</span>
          </template>
          <template v-for="item1 in item.children">
            <el-submenu
              v-if="item1.children && item1.children.length > 0"
              :key="item1.id"
              :index="item1.id"
            >
              <template slot="title">
                <i class="el-icon-location" style="color:#fff"></i>
                <span style="font-size:16px;margin-left:10px;">{{
                  item1.menuName
                }}</span>
              </template>
              <template v-for="item2 in item1.children">
                <el-submenu
                  v-if="item2.children && item2.children.length > 0"
                  :key="item2.id"
                  :index="item2.id"
                >
                  <template slot="title">
                    <i class="el-icon-location" style="color:#fff"></i>
                    <span style="font-size:16px;margin-left:10px;">{{
                      item2.menuName
                    }}</span>
                  </template>
                  <!-- <menu-sun :menuList="item.children" /> -->
                </el-submenu>
                <el-menu-item v-else :key="item2.id" :index="item2.href">{{
                  item2.menuName
                }}</el-menu-item>
              </template>
            </el-submenu>
            <el-menu-item v-else :key="item1.id" :index="item1.href">{{
              item1.menuName
            }}</el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-else :key="item.id" :index="item.href">{{
          item.menuName
        }}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import MenuSun from "@/components/layout/menuList.vue";
export default {
  name: "MenuSun", //必须要 递归组件的关键，并且要与引入组件的变量名称一致
  components: {
    MenuSun,
  },
  props: {
    menuList: {},
  },
};
</script>

<style lang="less">
.el-menu  {
  background: transparent !important;
}
.el-submenu,
.el-submenu__title:hover {
  background-color: transparent !important;
}

.el-submenu .el-menu-item {
  padding: 0;
  font-size: 15px;
  margin-left: 30px;
  min-width: 0;
  border-radius: 25px 0 0 25px;
}

.el-menu-item:link,
.el-menu-item:visited,
.el-menu-item:hover,
.el-menu-item:active {
  background: #f8f8f8;
  background-size: 101px 80px;
  border-radius: 25px 0 0 25px;
}
.el-menu-item.is-active {
  color: #f8f8f8;
  background: #f8f8f8;
  background-size: 101px 80px;
  border-radius: 25px 0 0 25px;
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

.el-icon-arrow-down {
  color: #fff !important;
}
</style>
