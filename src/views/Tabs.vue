<template>
  <div class="tabs">
    <!--  -->
    <div class="flex-c" style="height: 100%;">
      <div class="flex f1" v-for="item in tabs" :key="item.id">
        <div class="tab-f1" v-for="item1 in item" :key="item1.id">
          <Tab :title="item1.title" :img="item1.img" :list="item1.list"></Tab>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tab from "@/components/tab";
export default {
  data() {
    return {
      tabs: [
        [
          {
            img: "https://cn.vuejs.org/images/logo.png",
            title: "项目管理",
            list: ["qqq", "www", "eee"],
          },
          {
            img: "https://cn.vuejs.org/images/logo.png",
            title: "生产管理",
            list: ["qqq", "www", "eee"],
          },
        ],
        [
          {
            img: "https://cn.vuejs.org/images/logo.png",
            title: "在线采购",
            list: ["qqq", "www", "eee"],
          },
          {
            img: "https://cn.vuejs.org/images/logo.png",
            title: "项目管理",
            list: ["qqq", "www", "eee"],
          },
        ],
      ],
    };
  },
  components: {
    Tab,
  },
};
</script>
<style lang="less" scoped>
.tabs {
  height: 100%;
  .tab-f1 {
    flex: 1;
    flex-shrink: 0;
    padding: 10px;
  }
}
</style>
