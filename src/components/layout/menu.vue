<template>
  <div :style="bacStyle" class="memu">
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
      bacStyle:{},
      menus: {},
    };
  },
  methods: {},
  mounted() {
    let obj = localStorage.getItem("user");
    let user = JSON.parse(obj);
    this.menus = user.menu;
    if(user.role === "client"){
        // this.bacStyle = {"background":"url('../../assets/menu-bg.png') no-repeat center"}
      }else if(user.role === "sp"){
        this.bacStyle = {"background":"linear-gradient(to right, #46CACD, #81E2E4, #46CACD)"}
      }else if(user.role === "supplier"){
        this.bacStyle = {"background":"linear-gradient(to right, #D6C02F, #D6C02F, #D6C02F)"}

      }
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
