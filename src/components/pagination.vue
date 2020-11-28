<template>
  <div class="flex pagination">
    <span @click="jj">上一页</span>
    <div class="flex">
      <div
        :class="{ item: true, itemActive: thisPage == i + 1 }"
        v-for="(item, i) in thisTotal"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
    <span style="margin-left: 10px" @click="add">下一页</span>
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
      thisPage: this.page,
      thisTotal: this.total / this.pageSize,
    };
  },
  methods: {
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
  },
};
</script>
<style scoped lang="less">
.pagination {
  align-items: center;
  span {
    white-space: nowrap;
  }
  .item {
    width: 30px;
    height: 30px;
    border-radius: 2px;
    background: #f4f4f5; //#606266
    color: #606266;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    cursor: pointer;
  }
  span {
    cursor: pointer;
  }
  .itemActive {
    background: #409eff; //#606266
    color: #fff;
  }
}
</style>