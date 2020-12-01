<template>
  <el-row style="box-sizing: border-box; padding-right: 10px">
    <el-col :span="18" class="left">
      <div
        style="widht: 100%; height: 190px; min-height: 10%; overflow-x: auto"
        class="flex"
      >
        <div
          class="typeItem"
          v-for="(type, index) in MaterialTypeList"
          :key="type.id"
        >
          <div
            :class="[
              type.isJoin ? 'typeItemActive' : 'typeItemDefault',
              'itemBody',
            ]"
            @click="showChildern(type, index)"
          >
            <!-- 右上角图标 -->
            <div class="box-con" v-if="type.isJoin">
              <span
                ><i
                  :class="
                    activeIndex == index ? 'el-icon-view' : 'el-icon-check'
                  "
                ></i
              ></span>
            </div>
            <div class="typeText">{{ type.materialTypeNameCh }}</div>
            <div class="typeIcon"><i class="el-icon-s-operation"></i></div>
          </div>
          <div v-if="childIndex == index" class="flex">
            <div
              :class="[
                child.isJoin ? 'typeItemActive' : 'typeItemDefault',
                'itemBodyChild',
              ]"
              v-for="(child, childIndex) in type.children"
              :key="child.id"
              @click="selectActive(child, childIndex)"
            >
              <!-- 右上角图标 -->
              <div class="box-con-child" v-if="child.isJoin">
                <span
                  ><i
                    :class="
                      childActiveIndex == childIndex
                        ? 'el-icon-view'
                        : 'el-icon-check'
                    "
                  ></i
                ></span>
              </div>
              <div class="typeText">{{ child.materialTypeNameCh }}</div>
              <div class="typeIcon"><i class="el-icon-s-operation"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div class="tpyeDetails scroTransparent">
        <el-col :span="24" style="height: 90%">
          <div style="width:99%;height:100%;margin-left:3%">
            <div
              class="detailItem"
              v-for="detail in MaterialTypeDetails"
              :key="detail.id"
            >
              <div class="detailItemBody">
                <img class="detailImg" :src="detail.photoId" />
                <el-col :span="10">供应商:</el-col>
                <el-col :span="12">{{ detail.supplierId }}</el-col>
                <el-col :span="10">型号:</el-col>
                <el-col :span="12">{{ detail.model }}</el-col>
                <el-col :span="10">单价:</el-col>
                <el-col :span="12">{{ detail.amount }}</el-col>
                <el-col :span="10">缩写:</el-col>
                <el-col :span="12">{{ detail.materialAbridge }}</el-col>
                <el-col
                  :span="24"
                  v-for="typeParam in detail.typeParams"
                  :key="typeParam.id"
                >
                  <el-col :span="10">{{ typeParam.param }}:</el-col>
                  <el-col :span="12">{{ typeParam.value }}</el-col>
                </el-col>
              </div>

              <div class="detailItemFooter">
                <el-col :span="2" :offset="1">
                  <el-button
                    @click="addDetailed(detail)"
                    class="detailBtn"
                    size="medium"
                    type="primary"
                    round
                    >加入清单</el-button
                  ></el-col
                >
                <el-col :span="2" :offset="8">
                  <el-button class="findDetail" size="medium" round
                    >查看详情</el-button
                  ></el-col
                >
              </div>
            </div>
          </div>
        </el-col>
        <el-col class="tpyeDetailsFooter">
          <el-col :span="10" :offset="8">
            <el-pagination
              style="margin-top:3%"
              background
              layout="prev, pager, next"
              :total="1000"
            >
            </el-pagination
          ></el-col>
        </el-col>
      </div>
    </el-col>
    <el-col :span="6" style="height: 100%">
      <div class="equipment">
        <div class="title">
          设备清单
        </div>
        <div class="equipmentScroll">
          <el-table
            :header-cell-style="{
              //更改表头信息
              color: '#5e77b5',
              backgroundColor: '#qua',
            }"
            :data="equipmentList"
            border
            style="width: 100%;font-size:13px"
          >
            <el-table-column
              label="序号"
              width="50%"
              type="index"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column prop="supplierId" label="城市"> </el-table-column>
            <el-table-column prop="count" label="数量"> </el-table-column>
            <el-table-column prop="amount" label="单价"> </el-table-column>
            <el-table-column prop="amount" label="T/P($)"> </el-table-column>
          </el-table>
        </div>
        <div style="text-align: center;height:5%">
          <el-divider></el-divider>
          <h2 style="color: #5b74b3">总价: $ {{ totoAmount }}</h2>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      MaterialTypeList: [
        {
          id: "1",
          materialTypeCode: "Code",
          materialTypeNameCh: "混料",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
          children: [
            {
              id: "11234",
              materialTypeCode: "Code",
              materialTypeNameCh: "混料崽崽",
              materialTypeNameEn: "caimo",
              isJoin: true,
              abridge: "cm",
              iconId: "www.www.cc",
            },
            {
              id: "112344",
              materialTypeCode: "Code",
              materialTypeNameCh: "混料崽崽2",
              materialTypeNameEn: "caimo",
              isJoin: false,
              abridge: "cm",
              iconId: "www.www.cc",
            },
          ],
        },
        {
          id: "2",
          materialTypeCode: "Code",
          materialTypeNameCh: "挤出",
          materialTypeNameEn: "caimo",
          isJoin: false,
          abridge: "cm",
          iconId: "www.www.cc",
          children: [
            {
              id: "11234",
              materialTypeCode: "Code",
              materialTypeNameCh: "挤出崽崽",
              materialTypeNameEn: "caimo",
              isJoin: false,
              abridge: "cm",
              iconId: "www.www.cc",
            },
          ],
        },
        {
          id: "1233",
          materialTypeCode: "Code",
          materialTypeNameCh: "涂油",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "12234",
          materialTypeCode: "Code",
          materialTypeNameCh: "开槽",
          materialTypeNameEn: "caimo",
          isJoin: false,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "1253",
          materialTypeCode: "Code",
          materialTypeNameCh: "码垛",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "1263",
          materialTypeCode: "Code",
          materialTypeNameCh: "包装",
          materialTypeNameEn: "caimo",
          isJoin: false,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "1283",
          materialTypeCode: "Code",
          materialTypeNameCh: "回收",
          materialTypeNameEn: "caimo",
          isJoin: false,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "12d3",
          materialTypeCode: "Code",
          materialTypeNameCh: "检测",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "1s23",
          materialTypeCode: "Code",
          materialTypeNameCh: "淋膜",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "12a",
          materialTypeCode: "Code",
          materialTypeNameCh: "彩膜",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "123d",
          materialTypeCode: "Code",
          materialTypeNameCh: "彩膜",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "123s",
          materialTypeCode: "Code",
          materialTypeNameCh: "彩膜",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "1234",
          materialTypeCode: "Code",
          materialTypeNameCh: "耐磨层",
          materialTypeNameEn: "caimo",
          isJoin: false,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "1235",
          materialTypeCode: "Code",
          materialTypeNameCh: "润滑鸡",
          materialTypeNameEn: "caimo",
          isJoin: false,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "1236",
          materialTypeCode: "Code",
          materialTypeNameCh: "稳定剂",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },

        {
          id: "1237",
          materialTypeCode: "Code",
          materialTypeNameCh: "润滑剂",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "12378",
          materialTypeCode: "Code",
          materialTypeNameCh: "聚乙醇",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
      ],
      MaterialTypeDetails: [
        {
          id: "c02fc6a43d4142fdafa73de9071c9140d",
          materialAbridge: "GB",
          supplierId: "123",
          model: "ASSA",
          amount: "100",
          materialNameCh: "机械一号",
          materialNameEn: "mubanzi",
          count: 1,
          photoId:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3279803882,547256365&fm=26&gp=0.jpg",
          typeParams: [
            {
              param: "参数1",
              value: "我是参数1",
            },
            {
              param: "参数2",
              value: "我是参数2",
            },
            {
              param: "参数2",
              value: "我是参数2",
            },
            {
              param: "参数2",
              value: "我是参数2",
            },
            {
              param: "参数2",
              value: "我是参数2",
            },
          ],
        },
        {
          id: "c02fc6a43d4142fdafa73de9071c9420d",
          materialAbridge: "GB",
          supplierId: "123",
          model: "ASSA",
          amount: "100",
          materialNameCh: "机械一号",
          materialNameEn: "mubanzi",
          count: 1,
          photoId:
            "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2160376255,1800855874&fm=26&gp=0.jpg",
          typeParams: [
            {
              param: "参数1",
              value: "我是参数1",
            },
            {
              param: "参数2",
              value: "我是参数2",
            },
          ],
        },
        {
          id: "c02fc6a43d4142fdafa73de9071c940d",
          materialAbridge: "GB",
          supplierId: "123",
          model: "ASSA",
          amount: "100",
          count: 1,
          materialNameCh: "机械一号",
          materialNameEn: "mubanzi",
          photoId:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2603804376,1608167875&fm=26&gp=0.jpg",
          typeParams: [
            {
              param: "参数1",
              value: "我是参数1",
            },
            {
              param: "参数2",
              value: "我是参数2",
            },
          ],
        },
      ],
      equipmentList: [
        {
          id: "c02fc6a43d4142fdafa73de9071c9140d",
          photoId:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2603804376,1608167875&fm=26&gp=0.jpg",
          supplierId: "华东供应商",
          amount: "100000.00",
          materialNameCh: "机械一号",
          materialNameEn: "mubanzi",
          count: 2,
        },
      ],
      childIndex: "sb",
      activeIndex: "sb",
      childActiveIndex: "sb",
      totoAmount: 0,
    };
  },
  methods: {
    showChildern(type, index) {
      // 初始化子图标
      this.childActiveIndex = "sb";
      this.activeIndex = index;
      if (type.children != null) {
        this.childIndex = index;
      } else {
      }
    },
    selectActive(child, childIndex) {
      this.childActiveIndex = childIndex;
    },
    addDetailed(detail) {
      for (let index = 0; index < this.equipmentList.length; index++) {
        const element = this.equipmentList[index];
        if (detail.id === element.id) {
          ++this.equipmentList[index].count;
          this.amountCalculation();
          return;
        }
      }
      this.equipmentList.unshift(detail);
      this.amountCalculation();
    },
    countReduce(equipmentIndex) {
      if (this.equipmentList[equipmentIndex].count <= 1) {
        // 如果小于等于1的话就删除该清单
        this.equipmentList.splice(equipmentIndex, 1);
      } else {
        --this.equipmentList[equipmentIndex].count;
      }
      this.amountCalculation();
    },
    countAdd(equipmentIndex) {
      ++this.equipmentList[equipmentIndex].count;
      this.amountCalculation();
    },
    amountCalculation() {
      this.totoAmount = 0;
      for (let index = 0; index < this.equipmentList.length; index++) {
        const element = this.equipmentList[index];
        this.totoAmount += element.count * element.amount;
      }
    },
  },
  mounted() {
    this.amountCalculation();
  },
};
</script>
<style lang="less" scoped>
.left {
  box-sizing: border-box;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
}
.equipment {
  height: 100%;
  background: #fff;
  border-radius: 15px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .title {
    height: 5%;
    letter-spacing: 2px; //间距
    font-size: 24px;
    margin-top: 2%;
    margin-left: 4%;
    margin-bottom: 2%;
  }
  .equipmentScroll {
    width: 100%;
    height: 80%;
    // flex: 1;
    // overflow-y: scroll;
  }
}

.tpyeDetails {
  height: 90%;
  width: 98%;
  flex: 1;
  box-sizing: border-box;
  margin-top: 10px;
  // padding: 10px;
  background: #fff;
  border-radius: 15px;
  .detailItem {
    .detailItemBody {
      width: 100%;
      height: 88%;
      margin-top: 8%;
      flex: 1;
      overflow-y: scroll;
    }
    .detailItemFooter {
      width: 100%;
      margin-top: 2%;
      height: 8%;
    }

    width: 32%;
    height: 98%;
    margin-left: 0.5%;
    display: inline-block;
    .detailImg {
      width: 90%;
      height: 50%;
      border-radius: 15px;
      margin-bottom: 1%;
    }
    .el-col {
      height: 7%;
    }
    .el-col-10 {
      font-size: 18px;
      margin-left: 4%;
    }
    .el-col-12 {
      font-weight: lighter;
      margin-left: 4%;
    }
  }
  .tpyeDetailsFooter {
    height: 10%;
   
  }
}
.typeText {
  letter-spacing: 2px; //间距
  color: #fff;
  line-height: 50px;
  height: 50%;
  text-align: center;
  font-size: 17px;
}
.typeIcon {
  line-height: 50px;
  height: 50%;
  text-align: center;
}
.typeIcon i {
  color: #fff;
  font-size: 60px;
}
.left .right {
  height: 100%;
}
.typeItem {
  display: flex;
  position: relative;
  .itemBody {
    min-width: 100px;
    height: 180px;
    margin-right: 22px;
    display: inline-block;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    .box-con {
      width: 58px;
      height: 58px;
      position: absolute;
      background: #fff;
      top: -30px;
      right: -30px;
      transform: rotate(45deg);
      span {
        color: #5e77b5;
        position: absolute;
        bottom: 0;
        display: block;
        width: 58px;
        text-align: center;
        transform: rotate(-45deg);
      }
    }
  }
  .itemBodyChild {
    min-width: 70px;
    height: 100px;
    margin-right: 10px;
    display: inline-block;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    // background: red;
    margin-top: 80px;
    .box-con-child {
      width: 50px;
      height: 50px;
      position: absolute;
      background: #fff;
      top: -30px;
      right: -30px;
      transform: rotate(45deg);
      span {
        color: #5e77b5;
        position: absolute;
        bottom: 0;
        display: block;
        width: 50px;
        text-align: center;
        transform: rotate(-45deg);
        font-size: 11px;
      }
    }
    .typeText {
      letter-spacing: 0px; //间距
      color: #fff;
      line-height: 50px;
      height: 50%;
      text-align: center;
      font-size: 11px;
    }

    .typeIcon i {
      color: #fff;
      font-size: 30px;
    }
  }
}
.typeItemActive {
  background: #5e77b5;
}
.typeItemDefault {
  background: #d8d8d8;
}
.el-row {
  height: 100%;
}
.el-col {
  height: 100%;
  border-radius: 4px;
}
</style>
