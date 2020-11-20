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
</style>
