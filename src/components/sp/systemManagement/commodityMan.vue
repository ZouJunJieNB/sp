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
          <el-col :span="24" style="height:4%">
            <el-col :span="4" :offset="1">
              <h3 class="title">现有商品</h3>
            </el-col>
            <el-col :span="6" :offset="12">
              <div class="body-left-col-switch">
                在售
                <el-switch active-color="#46CACD" v-model="yesInspected">
                </el-switch>
                <span style="margin-left:5%;">
                  已下架
                  <el-switch active-color="#46CACD" v-model="noInspected">
                  </el-switch>
                </span>
              </div>
            </el-col>
          </el-col>
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
                  style="background:#46CACD;border:none"
                  size="medium"
                  type="primary"
                  round
                  >加入订单</el-button
                ></el-col
              >
              <el-col :span="2" :offset="8">
                <el-button class="detailBtn" size="medium" type="defalut" round
                  >查看详情</el-button
                ></el-col
              >
            </div>
          </div>
        </el-col>
      </el-col>
      <el-col class="body-right-col" :span="6">
        <div class="equipment">
          <el-col :span="24" style="height:10%">
            <h3 class="title">商品属性字段(彩膜)</h3>
          </el-col>
          <el-col :span="24" style="height:80%">
            <div class="equipment-body">
              <el-form
                label-position="left"
                label-width="30%"
                :model="typeFrom"
              >
                <el-form-item label="第一供应商 :">
                  <el-input v-model="typeFrom.name"></el-input>
                </el-form-item>
                <el-form-item label="第二供应商 :">
                  <el-input v-model="typeFrom.region"></el-input>
                </el-form-item>
                <el-form-item label="第三供应商 :">
                  <el-input v-model="typeFrom.type"></el-input>
                </el-form-item>
                <el-form-item label="属性1 :">
                  <el-input v-model="typeFrom.name"></el-input>
                </el-form-item>
                <el-form-item label="属性1 :">
                  <el-input v-model="typeFrom.region"></el-input>
                </el-form-item>
                <el-form-item label="属性2 :">
                  <el-input v-model="typeFrom.type"></el-input>
                </el-form-item>
                <el-form-item label="属性3 :">
                  <el-input v-model="typeFrom.name"></el-input>
                </el-form-item>
                <el-form-item label="属性4 :">
                  <el-input v-model="typeFrom.region"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
          <el-col :span="24" style="height:10%">
            <el-col :span="6" :offset="7">
              <el-button class="detailBtn" size="medium" type="defalut" round
                >添加</el-button
              >
            </el-col>

            <el-col :span="6" :offset="1">
              <el-button class="detailBtn" size="medium" type="defalut" round
                >保存</el-button
              >
            </el-col>
          </el-col>
        </div>
      </el-col>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      typeFrom: {},
      yesInspected: true,
      noInspected: false,
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
  height: 18%;
  margin-bottom: 2px;
  min-height: 200px;
  .haad-left-col {
    height: 100%;

    ul {
      height: 90%;
      width: 90%;
      padding-top: 8px;
      box-sizing: border-box;
      letter-spacing: 2px; //间距
      margin-left: 10%;
      padding-top: 10%;
      li {
        margin-left: 15px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20%;
        border-radius: 10px 0 0 10px;
        color: #fff;
        background: #46cacd;
      }
      .active {
        margin-left: 0;
        color: #46cacd;
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
            background: #46cacd;
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
                color: #46cacd;
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
            background: #46cacd;
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
                color: #46cacd;
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
  height: 75%;
  .body-left-col {
    .title {
      letter-spacing: 2px; //间距
      margin-top: 10%;
    }
    .body-left-col-switch {
      color: #46cacd;
      font-size: 16px;
      margin-top: 8%;
    }
    height: 100%;
    .detail {
      width: 98%;
      height: 100%;
      background: #fff;
      border-radius: 15px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
      .page {
        width: 100%;
      }
      .detailItem {
        width: 30%;
        height: 85%;
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
      .title {
        letter-spacing: 1px; //间距
        margin-left: 5%;
        margin-top: 5%;
      }
      .equipment-body {
        width: 100%;
        height: 100%;
        .el-form {
          width: 90%;
          margin: auto;
        }
      }
      .el-button {
        width: 90px;
        background: #46cacd;
        color: #fff;
      }
    }
  }
}
</style>
