<template>
  <div class="flex pagination">
    <span class="page" @click="jj">上一页</span>
    <div class="flex">
      <template v-if="thisTotal > max">
        <div
          :class="{ item: true, itemActive: i == 0 }"
          v-for="(item, i) in max"
          :key="item"
          @click="setItem(thisPage + i)"
        >
          {{ thisPage + i }}
        </div>
        <div
          v-if="thisTotal - thisPage - max - 2 > 0"
          :class="
            activeHover ? 'item el-icon-d-arrow-right' : 'el-icon-more item'
          "
          @mouseover="selectStyle(item)" 
          @mouseout="outStyle(item)"
        ></div>
        <div
          :class="{ item: true, itemActive: thisPage == i + 1 }"
          @click="setItem(thisTotal - 1)"
        >
          {{ thisTotal - 1 }}
        </div>
        <div
          :class="{ item: true, itemActive: thisPage == i + 1 }"
          @click="setItem(thisTotal)"
        >
          {{ thisTotal }}
        </div>
      </template>
      <template v-else>
        <div
          :class="{ item: true, itemActive: thisPage == i + 1 }"
          v-for="(item, i) in thisTotal"
          :key="item"
          @click="setItem(i + 1)"
        >
          {{ item }}
        </div></template
      >
    </div>
    <span class="page" style="margin-left: 10px" @click="add">下一页</span>
  </div>
</template>
<script>
export default {
  props: {
    // 总页数
    total: {
      type: Number,
      default: 0,
    },
    // 一页多少条
    pageSize: {
      type: Number,
      default: 20,
    },
    page: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      activeHover: false,
      thisPage: this.page,
      thisTotal: Math.ceil(this.total / this.pageSize),
      max: 5,
    };
  },
  methods: {
    selectStyle(item) {
      this.activeHover = true;
    },
    outStyle(item) {
      this.activeHover = false;
    },
    add() {
      if (this.thisTotal > this.thisPage) {
        this.thisPage++;
        this.$emit("pageChange", this.thisPage);
      }
    },
    jj() {
      if (1 < this.thisPage) {
        this.thisPage--;
        this.$emit("pageChange", this.thisPage);
      }
    },
    setItem(id) {
      this.thisPage = id;
      this.$emit("pageChange", this.thisPage);
    },
  },
};
</script>
<style scoped lang="less">
.pagination {
  width: 100%;
  justify-content: center;
  align-items: center;
  span {
    white-space: nowrap;
  }
  .item {
    width: 30px;
    height: 30px;
    border-radius: 2px;
    background: #fff; //#606266
    color: #606266;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    cursor: pointer;
  }
  .item:hover {
    background: #5e77b5; //#606266
    color: #fff;
  }
  span {
    cursor: pointer;
  }
  .itemActive {
    background: #5e77b5; //#606266
    color: #fff;
  }
  .page {
    border-radius: 20px;
    padding: 8px 25px;
    background: #f4f4f5;
  }
  .page:hover {
    background: #5e77b5;
    color: #fff;
  }
}
</style>
