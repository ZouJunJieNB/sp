<template>
  <div class="subject tac flex-c">
    <div class="subject-head flex-sb-cen">
      <el-select
        style="width:150px"
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
    </div>
    <div class="subject-body flex flex-line scroTransparent">
      <div class="item">
        <el-table :data="contracts" style="width: 100%;">
          <el-table-column prop="contract" label="合同">
            <div class="busIcon flex-col-center">
              <i class="el-icon-s-order"></i>
            </div>
          </el-table-column>
          <el-table-column prop="date" label="日期"> </el-table-column>
          <el-table-column prop="user" label="用户"> </el-table-column>
        </el-table>
      </div>
      <div class="item">
        <el-table :data="drawings" style="width: 100%;">
          <el-table-column prop="drawing" label="图纸">
            <div class="busIcon flex-col-center">
              <i class="el-icon-s-order"></i>
            </div>
          </el-table-column>
          <el-table-column prop="date" label="日期"> </el-table-column>
          <el-table-column prop="user" label="用户"> </el-table-column>
        </el-table>
      </div>
      <div class="item">
        <el-table :data="budgetList" style="width: 100%;">
          <el-table-column prop="budget" label="清单预算">
            <div class="busIcon flex-col-center">
              <i class="el-icon-s-order"></i>
            </div>
          </el-table-column>
          <el-table-column prop="date" label="日期"> </el-table-column>
          <el-table-column prop="user" label="用户"> </el-table-column>
        </el-table>
      </div>
      <div class="item">
        <el-table :data="vouchers" style="width: 100%;">
          <el-table-column prop="voucher" label="收付款凭证">
            <div class="busIcon flex-col-center">
              <i class="el-icon-s-order"></i>
            </div>
          </el-table-column>
          <el-table-column prop="date" label="日期"> </el-table-column>
          <el-table-column prop="user" label="用户"> </el-table-column>
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
          label: "中东",
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
      contracts: [
        { contract: "sb", date: "2001-1-1", user: "sp上传" },
        { contract: "sb", date: "2001-1-1", user: "洁福上传" },
        
      ],
      drawings: [
        { drawing: "sb", date: "2001-1-1", user: "sp上传" },
        { drawing: "sb", date: "2001-1-1", user: "洁福上传" },
      ],
      budgetList: [{ budget: "sb", date: "2001-1-1", user: "sp上传" }],
      vouchers: [{ voucher: "sb", date: "2001-1-1", user: "sp上传" }],
    };
  },
};
</script>

<style lang="less" scoped>
.subject {
  padding: 10px 20px;
  box-sizing: border-box;
  .subject-head {
    flex: 1;
  }
  .subject-body {
    flex: 9;
    .item {
      margin-right: 10px;
      width: 400px;
      height: 300px;
      background: #fff;
      border-radius: 25px;
      overflow: auto;
      .busIcon {
        width: 50px;
        height: 60px;
        background: #5e77b5;
        border-radius: 5px;
        i {
          font-size: 40px;
          color: #fff;
        }
      }
    }
  }
}
</style>
