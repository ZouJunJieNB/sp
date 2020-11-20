<template>
  <el-row>
    <el-col class="head-col" :span="22" :offset="2">
      <el-col style="height:100%" :span="3">
        <el-select
          class="select-style"
          clearable
          size="large"
          v-model="deviceSNMP"
          autocomplete="off"
          style="width: 100%;"
        >
          <el-option
            v-for="item in deviceSNMPList"
            :key="item.key"
            :label="item.label"
            :value="item.key"
          >
            <span style="float: left;color:yello;">
              <i class="el-icon-star-on"></i>
            </span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{
              item.label
            }}</span>
          </el-option>
        </el-select>
      </el-col>
      <el-col style="height:100%" :span="3" :offset="1">
        <div class="head-col-switch">
          待检
          <el-switch v-model="yesInspected"> </el-switch>
        </div>
      </el-col>
      <el-col style="height:100%" :span="3">
        <div class="head-col-switch">
          已检
          <el-switch v-model="noInspected"> </el-switch>
        </div>
      </el-col>
    </el-col>
    <el-col class="body-col" :span="24">
      <el-col class="body-left-col" :span="2">
        <ul>
          <li
            :class="{ active: projectIsActive == index }"
            v-for="(item, index) in projectSize"
            :key="index"
            @click="change(index)"
          >
            {{ item }}
          </li>
        </ul>
      </el-col>
      <el-col class="body-right-col" :span="22">
        <div class="body-right-col-body">
          <el-table
            :header-cell-style="{
              //更改表头信息
              color: '#5e77b5',
              fontSize: '16px',
              backgroundColor: '#qua',
            }"
            :data="panelData"
            stripe
            style="width: 90%;margin:auto"
          >
            <el-table-column prop="panel" label="操作面板"> </el-table-column>
            <el-table-column prop="requirement" label="要求"> </el-table-column>
            <el-table-column prop="img" label="检验图片"> </el-table-column>
            <el-table-column prop="adopt" label="检验通过"> </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
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
      deviceSNMP: "0",
      yesInspected: true,
      noInspected: false,
      projectSize: ["A项目", "B项目", "C项目", "D项目"],
      projectIsActive: "0",
      panelData:[
          {"panel":"1.XXXXXXXXXXX","requirement":"XXXXXXXXXXX","img":"XXX.XXX","adopt":false},
          {"panel":"1.XXXXXXXXXXX","requirement":"XXXXXXXXXXX","img":"XXX.XXX","adopt":false},
          {"panel":"1.XXXXXXXXXXX","requirement":"XXXXXXXXXXX","img":"XXX.XXX","adopt":false},
      ],
      controlData
    };
  },
  methods: {
    change(index) {
      this.projectIsActive = index;
    },
  },
};
</script>

<style lang="less" scoped>
.el-row {
  margin-top: 1%;
  height: 98%;
  .head-col {
    height: 10%;
    .head-col-switch {
      color: #5e77b5;
      font-size: 16px;
      margin-top: 5%;
    }
  }
  .body-col {
    height: 90%;
    .body-left-col {
      height: 30%;
      margin-top: 3%;
      ul {
        height: 100%;
        width: 100%;
        padding-top: 8px;
        box-sizing: border-box;
        letter-spacing: 2px; //间距

        li {
          margin-left: 15px;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 15%;
          border-radius: 10px 0 0 10px;
          color: #999999;
          background: #fff;
        }
        .active {
          margin-left: 0;
          color: #fff;
          background: #5e77b5;
        }
      }
    }
    .body-right-col {
      height: 100%;
      .body-right-col-body {
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 25px;
        .el-table::before {
          //去掉最下面的那一条线
          height: 0px;
        }
      }
    }
  }
}
</style>
