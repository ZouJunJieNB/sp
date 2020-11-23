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
          <div class="body-right-col-body-head">
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
              <el-table-column prop="requirement" label="要求">
              </el-table-column>
              <el-table-column prop="img" label="检验图片"> </el-table-column>
              <el-table-column prop="adopt" label="检验通过">
                <template slot-scope="scope">
                  <input
                    name="checkbox"
                    :checked="scope.row.adopt"
                    value=""
                    ische
                    type="checkbox"
                    class="tui-checkbox "
                  />
                </template>
              </el-table-column>
            </el-table>
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
              <el-table-column prop="requirement" label="要求">
              </el-table-column>
              <el-table-column prop="img" label="检验图片"> </el-table-column>
              <el-table-column prop="adopt" label="检验通过">
                <template slot-scope="scope">
                  <input
                    name="checkbox"
                    :checked="scope.row.adopt"
                    value=""
                    ische
                    type="checkbox"
                    class="tui-checkbox "
                  />
                </template>
              </el-table-column>
            </el-table>
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
              <el-table-column prop="requirement" label="要求">
              </el-table-column>
              <el-table-column prop="img" label="检验图片"> </el-table-column>
              <el-table-column prop="adopt" label="检验通过">
                <template slot-scope="scope">
                  <input
                    name="checkbox"
                    :checked="scope.row.adopt"
                    value=""
                    ische
                    type="checkbox"
                    class="tui-checkbox "
                  />
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="body-right-col-body-footer">
            <el-col :span="2" :offset="20">
              <el-button class="detailBtn" size="medium" type="primary" round
                >本项检验通过</el-button
              ></el-col
            >
          </div>
          <div class="flexRight">
            <ul>
              <li v-for="item in flexRightData" :key="item.id">
                <el-col :span="18">
                  {{ item.name }}
                </el-col>
                <el-col :span="2">
                  <input
                    name="checkbox"
                    :checked="item.isInspected"
                    value=""
                    ische
                    type="checkbox"
                    class="tui-checkbox"
                  />
                </el-col>
              </li>
            </ul>
          </div>
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
      panelData: [
        {
          panel: "1.XXXXXXXXXXX",
          requirement: "XXXXXXXXXXX",
          img: "XXX.XXX",
          adopt: true,
        },
        {
          panel: "1.XXXXXXXXXXX",
          requirement: "XXXXXXXXXXX",
          img: "XXX.XXX",
          adopt: false,
        },
        {
          panel: "1.XXXXXXXXXXX",
          requirement: "XXXXXXXXXXX",
          img: "XXX.XXX",
          adopt: false,
        },
      ],
      //   controlData
      flexRightData: [
        { name: "机械", isInspected: true },
        { name: "电气", isInspected: true },
        { name: "图纸", isInspected: true },
        { name: "整机", isInspected: true },
        { name: "验收报告", isInspected: true },
        { name: "具体标准", isInspected: true },
      ],
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
  // 复选框选中变色
  .tui-checkbox:checked {
    background: #1673ff;
  }
  // 复选框变圆
  .tui-checkbox {
    width: 25px;
    height: 25px;
    background-color: #ffffff;
    border: solid 1px #dddddd;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
    position: relative;
    display: inline-block;
    vertical-align: top;
    cursor: default;
    -webkit-appearance: none;
    -webkit-user-select: none;
    user-select: none;
    -webkit-transition: background-color ease 0.1s;
    transition: background-color ease 0.1s;
  }
  // 复选框变圆
  .tui-checkbox:checked::after {
    content: "";
    top: 5px;
    left: 5px;
    position: absolute;
    background: transparent;
    border: #fff solid 2px;
    border-top: none;
    border-right: none;
    height: 6px;
    width: 10px;
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  // margin-top: 1%;
  height: 100%;
  .head-col {
    height: 8%;
    margin-top: 1%;
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
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
        position: relative;
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 25px;
        .body-right-col-body-head {
          height: 90%;
          width: 100%;
        }
        .body-right-col-body-footer {
          height: 10%;
          width: 100%;
          .detailBtn {
            background: linear-gradient(to right, #5e77b5, #93a7d9, #b6c6f1);
          }
        }
        .flexRight {
          box-shadow: 15px 5px 10px rgba(0, 0, 0, 0.2);
          z-index: 2;
          width: 12%;
          height: 45%;
          background: #5e77b5;
          position: absolute;
          top: 2%;
          right: 0px;
          // 复选框选中变色
          .tui-checkbox:checked {
            background: none;
          }
          // 复选框变圆
          .tui-checkbox {
            background-color: #5e77b5;
            border: solid 1px #dddddd;
          }

          ul {
            height: 100%;
            width: 100%;
            padding-top: 8px;
            box-sizing: border-box;
            letter-spacing: 2px; //间距

            li {
              margin-left: 1%;
              margin-bottom: 5px;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 15%;
              border-radius: 10px 0 0 10px;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
