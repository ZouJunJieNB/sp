<template>
  <div class="subject flex-c">
    <div class="subject-head flex">
      <div
        v-for="(item, index) in leftHeadList"
        :key="index"
        :class="index == avtive ? 'changeBackground head-text' : ' head-text'"
        @click="routerTo(index)"
      >
        {{ item }}
      </div>
    </div>
    <div class="subject-body"><router-view /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftHeadList: ["人员要求", "培训计划1", "+添加新计划"],
      avtive: 0,
    };
  },
  methods: {
    routerTo(index) {
      this.avtive = index;
      if (index == 0) {
        this.$router.push("/requirement");
      }
    },
  },
  mounted() {
    this.$router.push("/requirement");
  },
};
</script>

<style lang="less" scoped>
.subject {
  width: 100%;
  height: 100%;
  padding-right: 20px;
  // padding-top: 20px;
  padding-left: 10px;
  box-sizing: border-box;
  // padding-top:1%;
  .subject-head {
    align-items: flex-end;
    .head-text {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 110px;
      height: 30px;
      background: #5e77b5;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
    }
    .changeBackground {
      height: 40px;
      background: #fff;
      color: #5e77b5;
      border-radius: 5px 5px 0px 0px !important;
    }
  }
  .subject-body {
    flex: 1;
    background: #fff;
    border-radius: 0px 0px 25px 25px;
    margin-bottom: 1%;
  }
}
</style>
