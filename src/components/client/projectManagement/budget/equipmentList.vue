<template>
  <el-row style="box-sizing: border-box; padding-right: 10px">
    <el-col :span="18" class="left">
      <div style="widht: 100%; height: 190px; overflow-x: scroll" class="flex">
        <div
          :class="[
            type.isJoin ? 'typeItemActive' : 'typeItemDefault',
            'typeItem',
          ]"
          v-for="type in MaterialTypeList"
          :key="type.id"
        >
          <div class="typeText">{{ type.materialTypeNameCh }}</div>
          <div class="typeIcon"><i class="el-icon-s-operation"></i></div>
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
            <div style="width: 70%">
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
          id: "1123",
          materialTypeCode: "Code",
          materialTypeNameCh: "彩膜",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "1223",
          materialTypeCode: "Code",
          materialTypeNameCh: "彩膜",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "1233",
          materialTypeCode: "Code",
          materialTypeNameCh: "彩膜",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "12234",
          materialTypeCode: "Code",
          materialTypeNameCh: "彩膜",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "1253",
          materialTypeCode: "Code",
          materialTypeNameCh: "彩膜",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "1263",
          materialTypeCode: "Code",
          materialTypeNameCh: "彩膜",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "1283",
          materialTypeCode: "Code",
          materialTypeNameCh: "彩膜",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "12d3",
          materialTypeCode: "Code",
          materialTypeNameCh: "彩膜",
          materialTypeNameEn: "caimo",
          isJoin: true,
          abridge: "cm",
          iconId: "www.www.cc",
        },
        {
          id: "1s23",
          materialTypeCode: "Code",
          materialTypeNameCh: "彩膜",
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
            "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2465858132,365358520&fm=26&gp=0.jpg",
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
            "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2320241958,1164167167&fm=26&gp=0.jpg",
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
            "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2686639530,1662760863&fm=26&gp=0.jpg",
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
    };
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
      width: 80%;
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
      height: 30%;
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
  min-width: 100px;
  height: 180px;
  margin-right: 10px;
  display: inline-block;
  border-radius: 5px;
}
.typeItemActive {
  background: #5E77B5;
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
