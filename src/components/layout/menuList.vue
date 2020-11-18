<template>
  <div>
    <el-menu
      default-active
      text-color="#fff"
      unique-opened
    >
      <template v-for="(item) in menuList">
        <el-submenu v-if="item.children&&item.children.length>0" :key="item.id" :index="item.id">
          <template  slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.menuName}}</span>
          </template>
          <menu-sun :menuList="item.children"/> 
        </el-submenu>
        <el-menu-item  v-else :key="item.id" :index="item.id">{{item.menuName}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import MenuSun from "@/components/layout/menuList.vue";
export default {
  name: "MenuSun",//必须要 递归组件的关键，并且要与引入组件的变量名称一致
  components: {
    MenuSun
  },
  props: {
    menuList: {}
  }
};
</script>

<style lang="less">
.el-submenu {
  background:transparent
}
</style>
