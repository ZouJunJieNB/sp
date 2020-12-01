<template>
  <div class="subject flex-c">
    <div class="subject-head reqitem flex">
      <el-select
        style="width:10%"
        v-model="deviceSNMP"
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
      <el-input placeholder="请输入内容" style="width:15%;">
        <template slot="prepend">培训内容:</template>
      </el-input>
      <el-input placeholder="请输入内容" style="width:15%;">
        <template slot="prepend">时间:</template>
      </el-input>
      <el-input placeholder="请输入内容" style="width:15%;">
        <template slot="prepend">地点:</template>
      </el-input>
      <el-input placeholder="请输入内容" style="width:15%;">
        <template slot="prepend">讲师:</template>
      </el-input>
    </div>
    <div class="subject-body flex">
      <div class="subject-body-left flex-c">
        <div class="body-title flex">课程信息</div>
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
          <el-table-column prop="date" label="课程"> </el-table-column>
          <el-table-column prop="name" label="开始"> </el-table-column>
          <el-table-column prop="address" label="结束"> </el-table-column>
          <el-table-column prop="address" label="考试合格率"> </el-table-column>
       
        </el-table>
      </div>
      <div class="subject-body-right flex-c">
        <div class="body-title flex">受训人员记录</div>
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
          <el-table-column prop="name" label="人员"> </el-table-column>
          <el-table-column prop="address" label="课程名称"> </el-table-column>
          <el-table-column prop="address" label="是否参加"> </el-table-column>
          <el-table-column prop="address" label="评分"> </el-table-column>
        
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市8 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.subject {
  .subject-head {
    width: 100%;
    flex: 2;
    // background: black;
    align-items: center;
    justify-content: space-around;
  }
  .subject-body {
    width: 100%;
    flex: 9;
    justify-content: space-around;
    .subject-body-left {
      width: 45%;

      .el-table {
        flex: 9;
      }
    }
    .subject-body-right {
      width: 45%;

      .el-table {
        flex: 9;
      }
    }
    .body-title {
      flex: 1;
      align-items: center;
      justify-content: space-around;
      font-weight: bold;
      font-size:18px;
    }
  }
}
</style>
