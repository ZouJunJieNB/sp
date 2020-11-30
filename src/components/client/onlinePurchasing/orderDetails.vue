<template>
  <div class="body">
    <div class="body-head flex-cen">
      <div>
        <i
        @click="returnOrder"
          class="el-icon-arrow-left"
          style="
      color:#929292;font-weight:bold;cursor: pointer;"
        ></i>
        <span style="margin-left:10px"
          >订单编号: {{ orderInfo.orderNumber }}</span
        >
      </div>
    </div>
    <div class="body-body">
      <div class="body-body-head">商品名: {{ orderInfo.commodityName }}</div>
      <div class="body-body-body">
        <ImgRotation />
      </div>
      <div class="body-body-footer">
        <el-col :span="6">
          供应商：<span>{{ orderInfo.commodityName }}</span>
        </el-col>
        <el-col :span="6">
          单价： <span>{{ orderInfo.amount }}</span>
        </el-col>
        <el-col :span="6">
          型号： <span>{{ orderInfo.model }}</span>
        </el-col>
        <el-col :span="6">
          缩写：<span>{{ orderInfo.abbreviation }}</span>
        </el-col>
        <el-col :span="6" v-for="item in orderInfo.params" :key="item.id">
          {{ item.key }}: <span>{{ item.value }}</span>
        </el-col>
        <el-col :span="24">
          {{ orderInfo.describe }}
        </el-col>
      </div>
    </div>
    <div class="body-footer flex-cen">
      <el-steps style="width:100%" :active="1" finish-status="success">
        <el-step title="项目启动"></el-step>
        <el-step title="预算清单"></el-step>
        <el-step title="SAT"></el-step>
        <el-step title="FAT"></el-step>
        <el-step title="验收"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
import ImgRotation from "@/components/imgRotation";
export default {
  components: {
    ImgRotation,
  },
  data() {
    return {
      // headerName: '订单详情',
      orderInfo: {
        orderNumber: "ZNS0139580983501085",
        commodityName: "润滑油",
        supplier: "上星",
        amount: "288.99",
        model: "1002XS",
        abbreviation: "SB",
        params: [
          { key: "参数1", value: "值1" },
          { key: "参数2", value: "值2" },
          { key: "参数3", value: "值3" },
          { key: "参数4", value: "值4" },
        ],
        describe:
          " 摄图网汇聚商品图片大全:商品素材、商品图片图片素材,百图汇提供商品图片相关图片下载,分享各类与商品图片有关的图片、设计、素材、模板等我图网商品图片专题为您整理了545个原创高质量商品图片图片素材供您在线下载,PSD/JPG/PNG格式商品图片模板下载、高清商品图片图片大全等,下载图片素材就上我图网。商品高清图片、商品背景图片等。你可以找商品设计灵感、摄影创意,我们欢迎您下载商品vrf正版授权图片,商用无压力",
        imgs: [
          "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3918045283,989435347&fm=26&gp=0.jpg",
          "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3918045283,989435347&fm=26&gp=0.jpg",
          "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3918045283,989435347&fm=26&gp=0.jpg",
          "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3918045283,989435347&fm=26&gp=0.jpg",
        ],
      },
    };
  },
  methods:{
    returnOrder(){
      this.$router.push("/orderManagement");
    }
  },
  mounted() {
    this.$route.query.orderInfo;
  },
};
</script>

<style lang="less" scoped>
// 滚动条透明
::-webkit-scrollbar {
  height: 0;
  width: 0;
  color: transparent;
}
.body {
  width: 97%;
  height: 98%;
  margin: auto;
  background: #fff;
  border-radius: 25px;
  overflow: auto;

  .body-head {
    width: 90%;
    margin-left: 2%;
    height: 8%;
    // height: 60px;
    font-size: 18px;
  }
  .body-body {
    width: 100%;
    height: 80%;
    // background: green;
    .body-body-head {
      width: 15%;
      height: 10%;
      color: #5e77b5;
      font-weight: bold;
      margin: auto;
      font-size: 20px;
    }
    .body-body-body {
      height: 45%;
    }
    .body-body-footer {
      width: 85%;
      margin: auto;
      margin-top: 20px;
      height: 45%;
      overflow: auto;
      text-align: left;
      font-size: 18px;
      span {
        margin-left: 10px;
        color: #7a7a7a;
      }
      .el-col {
        margin-bottom: 20px;
      }
      .el-col:last-child {
        font-size: 16px;
      }
    }
  }
  .body-footer {
    width: 95%;
    height: 12%;
    margin: auto;
  }
}
</style>
