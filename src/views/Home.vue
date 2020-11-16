<template>
  <div class="home">
    <Nav></Nav>
    <div class="flex">
      <Menu></Menu>
      <div style="flex: 1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/nav.vue";
import Menu from "@/components/menu.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Menu,
  },
};
</script>
<style scoped>
.flex {
  display: flex;
}
</style>