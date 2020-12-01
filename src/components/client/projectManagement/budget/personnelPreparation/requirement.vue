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
          v-for="(item, index) in recruitList"
          :class="index === activeColor ? 'itemActive reqitem' : 'reqitem'"
          @click="changeColor(index)"
          :key="index"
        >
          <el-input placeholder="请输入内容" style="width:50%;">
            <template slot="prepend">岗位</template>
          </el-input>
          <el-input placeholder="请输入内容" style="width:50%">
            <template slot="prepend">人数</template>
          </el-input>
          <el-input placeholder="请输入内容" style="width:100%">
            <template slot="prepend">资质要求</template>
          </el-input>
          <el-input placeholder="请输入内容" style="width:50%;">
            <template slot="prepend">时间</template>
          </el-input>
          <el-input placeholder="请输入内容" style="width:50%">
            <template slot="prepend">地点</template>
          </el-input>
          <el-input placeholder="请输入内容" style="width:50%;">
            <template slot="prepend">待遇</template>
          </el-input>
        </div>
      </div>
    </div>
    <div class="subject-right flex-c">
      <div class="subject-right-height">
        可选技术人员列表
      </div>
      <div class="right-table">
        <el-table
          :header-cell-style="{
            //更改表头信息
            color: '#5e77b5',
            backgroundColor: '#qua',
          }"
          :data="tableData"
          stripe
          style="width: 100%;"
        >
          <el-table-column prop="date" label="序号"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="address" label="岗位经验"> </el-table-column>
          <el-table-column align="center">
            <template slot="header">
              选择
            </template>
            <template slot-scope="scope">
              <el-button class="findDetail" size="small" round>
                &nbsp;&nbsp;邀请
              </el-button>
              <el-button class="findDetail" size="small" round
                >查看详情</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
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
      recruitList: [{}, {}],
      activeColor: 0,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    changeColor(index) {
      this.activeColor = index;
    },
  },
};
</script>
<style lang="less">

</style>

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
      .reqitem {
        width: 70%;
        height: 45%;

        margin-top: 25px;
        margin-left: 10px;
        background: #fff;
        border-radius: 25px;
        box-shadow: #666 0px 0px 10px;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 35px 20px;
        span {
          // flex:1;
          align-items: center;
        }
      }
    }
  }
  .subject-right {
    flex: 3;
    box-sizing: border-box;
    overflow: auto;
    width: 100%;
    min-width: 700px;
    .subject-right-height {
      width: 100%;
      font-size: 18px;
      font-weight: bold;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .right-table {
      flex: 9;
      width: 100%;
      overflow: auto;
    }
  }
}
</style>
