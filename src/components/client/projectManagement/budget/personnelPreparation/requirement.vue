<template>
  <div class="subject flex">
    <div class="subject-left flex-c">
      <el-select
        v-model="deviceSNMP"
        class="select-style"
        clearable
        size="large"
        autocomplete="off"
      >
        <el-option
          v-for="item in deviceSNMPList"
          :key="item.key"
          :label="item.label"
          :value="item.key"
        ></el-option>
      </el-select>
      <div class="subject-left-body ">
        <div
          v-for="item in 2"
          :class="index === activeColor ? 'itemActive item' : 'item'"
          @click="changeColor(index)"
          :key="item"
        ></div>
      </div>
    </div>
    <div class="subject-right">
      <div class="subject-right-height"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deviceSNMP: "0",
      deviceSNMPList: [
        {
          key: "0",
          label: "混料",
          icon: "",
        },
        {
          key: "1",
          label: "大混料",
          icon: "",
        },
        {
          key: "3",
          label: "小混料",
          icon: "",
        },
      ],
      leftHeadList: ["人员要求", "培训计划1", "+添加新计划"],
      recruitList: [{}],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.subject {
  .subject-left {
    flex: 2;
    // background: red;
    border-right: 1px solid #a9a9a9;
    padding: 20px 10px;
    box-sizing: border-box;
    
    .select-style {
      width: 200px;
       margin-left: 15px;
    }
    .subject-left-body {
      margin-top: 10px;
      flex: 1;
      // flex-shrink: 0;
      // background: red;
      overflow: auto;
      .item {
        width: 70%;
        height: 45%;
        
        margin-top: 25px;
        margin-left: 10px;
        background: #fff;
        border-radius: 25px;
        box-shadow: #666 0px 0px 10px;
        position: relative;
      }
    }
  }
  .subject-right {
    flex: 3;
    box-sizing: border-box;
    // background: yellow;
  }
}
</style>
