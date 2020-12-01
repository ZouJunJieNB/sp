<template>
  <el-row>
    <el-col class="head-col" :span="24">
      <el-col class="haad-left-col" :span="3">
        <ul>
          <li
            :class="{ active: typeIsActive == index }"
            v-for="(item, index) in type"
            :key="index"
            @click="change(index)"
          >
            {{ item }}
          </li>
        </ul>
      </el-col>
      <el-col class="haad-right-col" :span="21">
        <div class="carrier-margin">
          <div class="carrier flex">
            <div
              class="typeItem"
              v-for="(type, index) in MaterialTypeList"
              :key="type.id"
            >
              <div :class="['itemBody']" @click="showChildern(type, index)">
                <!-- 右上角图标 -->
                <div v-if="activeIndex == index" class="box-con">
                  <span><i class="el-icon-view"></i></span>
                </div>
                <div class="typeText">{{ type.materialTypeNameCh }}</div>
                <div class="typeIcon"><i class="el-icon-s-operation"></i></div>
              </div>
              <div v-if="childIndex == index" class="flex">
                <div
                  :class="['itemBodyChild']"
                  v-for="(child, childIndex) in type.children"
                  :key="child.id"
                  @click="selectActive(child, childIndex)"
                >
                  <!-- 右上角图标 -->
                  <div
                    v-if="childActiveIndex == childIndex"
                    class="box-con-child"
                  >
                    <span><i class="el-icon-view"></i></span>
                  </div>
                  <div class="typeText">{{ child.materialTypeNameCh }}</div>
                  <div class="typeIcon">
                    <i class="el-icon-s-operation"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-col>
    <el-col class="body-col" :span="24" style="width:100%;">
      <el-col class="body-left-col" :span="18">
        <el-col :span="24" style="height:100%">
          <div class="detail">
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

              <el-col :span="2">
                <el-button
                  class="detailBtn"
                  style="background:#5e77b5"
                  size="medium"
                  type="primary"
                  round
                  >加入订单</el-button
                ></el-col
              >
              <el-col :span="2" :offset="8">
                <el-button style="margin-top:50%" size="medium" type="defalut" round
                  >查看详情</el-button
                ></el-col
              >
            </div>

            <!-- <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination> -->
          </div>
        </el-col>
      </el-col>
      <el-col class="body-right-col" :span="6">
        <div class="equipment">
          <div class="equipment-head">
            <el-col style="background:#5E77B5;color:#fff" :span="12">
              配套备件
            </el-col>
            <el-col style="color:#5E77B5" :span="12">
              已购订单
            </el-col>
          </div>
          <div
            class="equipment-body"
            v-for="equipment in equipmentList"
            :key="equipment.id"
          >
            <el-col style="height:70%" :span="24">
              <!-- 左图片 -->
              <el-col style="height:100%" :span="10">
                <div style="width:100%;text-align:center;">
                  <img class="detailImg" :src="equipment.photoId" />
                </div>
              </el-col>
              <!-- 右文字 -->
              <el-col style="height:100%" class="equipment-text" :span="14">
                <el-col :span="10">设备名称:</el-col>
                <el-col :span="12">{{ equipment.materialNameCh }}</el-col>
                <el-col :span="10">供应商:</el-col>
                <el-col :span="12">{{ equipment.supplierId }}</el-col>
                <el-col :span="10">单价:</el-col>
                <el-col :span="12" style="color:#5e77b5"
                  >$ {{ equipment.amount }}</el-col
                >
              </el-col>
            </el-col>
            <el-col style="height:30%;margin-top:2px" :span="24">
              <el-col :span="2" :offset="4">
                <el-button
                  style="background:#5e77b5"
                  size="small"
                  type="primary"
                  round
                  >加入订单</el-button
                ></el-col
              >
              <el-col :span="2" :offset="8">
                <el-button size="small" type="defalut" round
                  >查看详情</el-button
                ></el-col
              >
            </el-col>
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
      typeIsActive: "0",
      type: ["设备类", "辅机类", "备品备件", "原材料"],
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
            "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=357320712,3331289312&fm=26&gp=0.jpg",
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
            "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1254458745,4138179518&fm=26&gp=0.jpg",
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
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2074148375,2286921029&fm=26&gp=0.jpg",
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
            "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2465858132,365358520&fm=26&gp=0.jpg",
          supplierId: "华东供应商",
          amount: "100000.00",
          materialNameCh: "木板子",
          materialNameEn: "mubanzi",
          count: "2",
        },

        {
          photoId:
            "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2320241958,1164167167&fm=26&gp=0.jpg",
          supplierId: "华东供应商",
          amount: "100000.00",
          materialNameCh: "木板子",
          materialNameEn: "mubanzi",
          count: "2",
        },

        {
          photoId:
            "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2465858132,365358520&fm=26&gp=0.jpg",
          supplierId: "华东供应商",
          amount: "100000.00",
          materialNameCh: "木板子",
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
    change(index) {
      this.typeIsActive = index;
    },
    showChildern(type, index) {
      // 初始化子图标
      this.childActiveIndex = "sb";
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
.el-row {
  // margin-top: 1%;
  height: 100%;
}
.head-col {
  height: 22%;
  margin-bottom: 0px;
  min-height: 200px;
  .haad-left-col {
    height: 100%;

    ul {
      height: 90%;
      width: 90%;
      margin-left: 10%;
      padding-top: 15%;
      box-sizing: border-box;
      letter-spacing: 2px; //间距
      li {
        margin-left: 15px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 19%;
        border-radius: 10px 0 0 10px;
        color: #fff;
        background: #5e77b5;
      }
      .active {
        margin-left: 0;
        color: #5e77b5;
        background: #fff;
      }
    }
  }
  .haad-right-col {
    height: 90%;
    .carrier-margin {
      border-radius: 10px;
      background: #fff;
      width: 100%;
      height: 100%;
      .carrier {
        margin: auto;
        overflow-x: scroll;
        width: 98%;
        height: 100%;
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
        .typeItem {
          // height:80%;
          display: flex;
          .itemBody {
            background: #5e77b5;
            min-width: 100px;
            height: 160px;
            margin-right: 10px;
            margin-top: 10px;
            display: inline-block;
            border-radius: 6px;
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
            background: #5e77b5;
            min-width: 70px;
            height: 90px;
            margin-right: 10px;
            display: inline-block;
            border-radius: 6px;
            position: relative;
            overflow: hidden;
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
      }
    }
  }
}
.body-col {
  height: 76%;
  .body-left-col {
    height: 100%;
    .detail {
      width: 99%;
      height: 100%;
      background: #fff;
      border-radius: 15px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
      .page {
        width: 100%;
      }
      .detailItem {
        width: 30%;
        height: 90%;
        margin-top: 3%;
        margin-left: 2.5%;
        display: inline-block;

        .detailBtn {
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
          margin-top: 50%;
        }
        .detailImg {
          width: 80%;
          height: 30%;
          //   max-width: 80%;
          //   max-height: 10%;
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
  }
  .body-right-col {
    height: 100%;
    .equipment {
      width: 100%;
      height: 100%;
      background: #fff;

      border-radius: 10px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
      // margin-top: 5%;
      .equipment-head {
        margin-bottom: 2%;
        border-radius: 10px 10px 0px 0px;
        height: 7%;
        text-align: center;
        line-height: 210%;
        border-bottom: 1px solid #5e77b5;
        .el-col {
          border-radius: 10px 10px 0px 0px;
          height: 100%;
          // background: #5E77B5;
        }
      }
      .equipment-body {
        height: 25%;
        width: 100%;
        // background: #5e77b5;
        border-bottom: 1px solid #5e77b5;
        margin-top: 6%;
        .equipment-text {
          height: 100%;
          .el-col {
            margin-top: 1%;
            height: 25%;
            font-size: 15px;
            // margin-left: 9%;
          }
        }
        .detailImg {
          width: 90%;
          height: 90%;

          //   max-width: 80%;
          //   max-height: 10%;
          border-radius: 15px;
          margin-bottom: 10%;
        }
      }
    }
  }
}
</style>
