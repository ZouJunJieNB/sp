<template>
  <div class="body flex-c">
    <div class="body-head flex-sb-cen">
      <div class="head-left flex-cen-around">
        <div>
          Project
          <el-select
            style="width:50%"
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
        <div>To be inspected <el-switch> </el-switch></div>
        <div>inspected <el-switch> </el-switch></div>
      </div>
      <div class="head-right flex-cen-around">
        <el-select
          style="width:80%"
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
    </div>
    <div class="body-body flex-c">
      <div class="body-subject-head flex-col-center">
        Mechanical
      </div>
      <div class="body-subject">
        <el-table
          :data="dataList"
          :header-cell-style="{
            //更改表头信息
            color: '#5e77b5',
            backgroundColor: '#qua',
          }"
          style="width: 100%;overflow: auto;max-height:600px"
        >
          <el-table-column
            prop="Requirement"
            label="Requirement"
            min-width="650px"
          >
          </el-table-column>
          <el-table-column prop="Standard" label="Standard"> </el-table-column>
          <el-table-column prop="Stie" label="Stie"> </el-table-column>
          <el-table-column prop="Adopt" label="Adopt">
            <input
              name="checkbox"
              :checked="false"
              value=""
              ische
              type="checkbox"
              class="tui-checkbox"
          /></el-table-column>
        </el-table>
      </div>
    </div>
    <div class="body-footer flex-sb-cen">
        <div></div>
      <el-button
        @click="addDetailed(detail)"
        class="detailBtn"
        size="medium"
        type="primary"
        round
        >Pass Inspenction</el-button
      >
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
          label: "Schedule",
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
      dataList: [
        {
          Requirement:
            "is the and Microsoft® Azure are registered trademarks of Microsoft Corporation. “AWS” and “Amazon Web Services” are trademarks or registered trademarks of Amazon.com Inc. or its affiliates. All other trademarks and copyrights are property of their respective owners and are only mentioned for informative purposes. Other names may be trademarks of their respective owners.",
          Standard: "ww.www",
          Stie: "",
          Adopt: false,
        },
        {
          Requirement:
            "is the and Microsoft® Azure are registered trademarks of Microsoft Corporation. “AWS” and “Amazon Web Services” are trademarks or registered trademarks of Amazon.com Inc. or its affiliates. All other trademarks and copyrights are property of their respective owners and are only mentioned for informative purposes. Other names may be trademarks of their respective owners.",
          Standard: "ww.www",
          Stie: "",
          Adopt: false,
        },
        {
          Requirement:
            "is the and Microsoft® Azure are registered trademarks of Microsoft Corporation. “AWS” and “Amazon Web Services” are trademarks or registered trademarks of Amazon.com Inc. or its affiliates. All other trademarks and copyrights are property of their respective owners and are only mentioned for informative purposes. Other names may be trademarks of their respective owners.",
          Standard: "ww.www",
          Stie: "",
          Adopt: false,
        },
        {
          Requirement:
            "is the and Microsoft® Azure are registered trademarks of Microsoft Corporation. “AWS” and “Amazon Web Services” are trademarks or registered trademarks of Amazon.com Inc. or its affiliates. All other trademarks and copyrights are property of their respective owners and are only mentioned for informative purposes. Other names may be trademarks of their respective owners.",
          Standard: "ww.www",
          Stie: "",
          Adopt: false,
        },
        {
          Requirement:
            "is the and Microsoft® Azure are registered trademarks of Microsoft Corporation. “AWS” and “Amazon Web Services” are trademarks or registered trademarks of Amazon.com Inc. or its affiliates. All other trademarks and copyrights are property of their respective owners and are only mentioned for informative purposes. Other names may be trademarks of their respective owners.",
          Standard: "ww.www",
          Stie: "",
          Adopt: false,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.body {
  .body-head {
    flex: 2;
    border-bottom: 1px solid rgba(146, 144, 142, 0.5);
    .head-left {
      width: 50%;
      height: 100%;
      color: #5e77b5;
    }
    .head-right {
      width: 20%;
      height: 100%;
    }
  }
  .body-body {
    flex: 17;
    // background: blue;
    .body-subject-head {
      flex: 1;
      letter-spacing: 1px; //间距
      font-weight: bold;
      font-size: 20px;
    }
    .body-subject {
      flex: 9;
    }
  }
  .body-footer {
    flex: 2;
    min-height: 40px;
    margin-right: 20px;
  }
}
</style>
