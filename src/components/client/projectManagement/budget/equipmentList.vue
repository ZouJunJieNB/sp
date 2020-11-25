<template>
  <el-row style="box-sizing: border-box; padding-right: 10px">
    <el-col :span="18" class="left">
      <div
        style="widht: 100%; height: 190px; min-height: 10%; overflow-x: scroll"
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
              v-for="(child,childIndex) in type.children"
              :key="child.id"
              @click="selectActive(child,childIndex)"
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
      <div class="tpyeDetails">
        <el-col :span="24" style="height: 10%">
          <h3 class="title">彩膜原料</h3>
        </el-col>
        <el-col :span="24" style="height: 80%">
          <div
            class="detailItem"
            v-for="detail in MaterialTypeDetails"
            :key="detail.id"
          >
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

            <el-col :span="2" :offset="10">
              <el-button class="detailBtn" size="medium" type="primary" round
                >加入清单</el-button
              ></el-col
            >
          </div>
        </el-col>
      </div>
    </el-col>
    <el-col :span="6" style="height: 100%">
      <div class="equipment">
        <div>
          <h3 class="title">材料清单</h3>
        </div>
        <div class="equipmentScroll">
          <div
            class="equipmentList"
            v-for="equipment in equipmentList"
            :key="equipment.id"
          >
            <div style="width: 100%; text-align: center">
              <img class="detailImg" :src="equipment.photoId" />
            </div>
            <div style="width: 70%; margin: auto">
              <el-col :span="10">供应商:</el-col>
              <el-col :span="11">{{ equipment.supplierId }}</el-col>
              <el-col :span="10">原料名称:</el-col>
              <el-col :span="11">{{ equipment.materialNameCh }}</el-col>
              <el-col :span="10">单价:</el-col>
              <el-col :span="11" style="color: #5b74b3; font-weight: bold"
                >$ {{ equipment.amount }}</el-col
              >
              <el-col :span="10">数量:</el-col>
              <el-col
                :span="11"
                style="color: #5b74b3; font-weight: bold; font-size: 18px"
                ><i class="el-icon-caret-left"></i>{{ equipment.count
                }}<i class="el-icon-caret-right"></i
              ></el-col>
            </div>
          </div>
        </div>
        <div style="text-align: center">
          <el-divider></el-divider>
          <h2 style="color: #5b74b3">总价: $ 200000.00</h2>
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
          ],
        },
        {
          id: "c02fc6a43d4142fdafa73de9071c9420d",
          materialAbridge: "GB",
          supplierId: "123",
          model: "ASSA",
          amount: "100",
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
          photoId:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2603804376,1608167875&fm=26&gp=0.jpg",
          supplierId: "华东供应商",
          amount: "100000.00",
          materialNameCh: "机械一号",
          materialNameEn: "mubanzi",
          count: "2",
        },

        {
          photoId:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3317696165,1629659760&fm=26&gp=0.jpg",
          supplierId: "华东供应商",
          amount: "100000.00",
          materialNameCh: "机械二号",
          materialNameEn: "mubanzi",
          count: "2",
        },

        {
          photoId:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2376961222,2882818689&fm=26&gp=0.jpg",
          supplierId: "华东供应商",
          amount: "100000.00",
          materialNameCh: "机械三号",
          materialNameEn: "mubanzi",
          count: "2",
        },
      ],
      childIndex: "sb",
      activeIndex: "sb",
      childActiveIndex: "sb",
    };
  },
  methods: {
    showChildern(type, index) {
      // 初始化子图标
      this.childActiveIndex = "sb"
      this.activeIndex = index;
      if (type.children != null) {
        this.childIndex = index;
      } else {
        
        this.$message.success("我没有崽崽");
      }
    },
    selectActive(child, childIndex) {
      this.childActiveIndex = childIndex;
    },
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
    letter-spacing: 2px; //间距
  }
  .equipmentScroll {
    width: 100%;
    flex: 1;
    overflow-y: scroll;
  }
  .equipmentList {
    box-sizing: border-box;
    .detailImg {
      width: 60%;
      height: 30%;
      border-radius: 15px;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
    }
    .el-col {
      height: 9%;
    }
    .el-col-10 {
      font-size: 18px;
      margin-left: 9%;
    }
    .el-col-11 {
      font-weight: lighter;
    }
  }
}

.tpyeDetails {
  height: 90%;
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  margin-top: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 15px;
  .title {
    letter-spacing: 2px; //间距
  }
  .detailItem {
    .detailBtn {
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    }
    width: 30%;
    height: 90%;
    margin-top: 3%;
    margin-left: 2.5%;
    display: inline-block;
    .detailImg {
      width: 80%;
      height: 40%;
      border-radius: 15px;
      margin-bottom: 10%;
    }
    .el-col {
      height: 7%;
    }
    .el-col-10 {
      font-size: 18px;
      margin-left: 2%;
    }
    .el-col-12 {
      font-weight: lighter;
      margin-left: 2%;
    }
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
  // width: 100%;
  // height: 180px;
  position: relative;
  .itemBody {
    min-width: 100px;
    height: 180px;
    margin-right: 10px;
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
