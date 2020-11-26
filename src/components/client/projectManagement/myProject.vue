<template>
  <el-row>
    <el-col :span="5" class="left-col">
      <div class="left-col-body">
        <div
          v-for="(project, index) in projectList"
          :key="project.id"
          :class="[
            'project-item',
            index === activeColor ? 'projectActive' : 'projectDefault',
          ]"
          @click="changeColor(index)"
        >
          <div class="item">
            <div class="title">{{ project.corporateName }}</div>
            <hr />
            <div class="titleKey">项目名称</div>
            <div class="titleValue">{{ project.projectName }}</div>
            <div class="titleKey">项目招标期限</div>
            <div class="titleValue">{{ project.termDate }}日前</div>
            <div class="titleKey">项目招标结果公示时间</div>
            <div class="titleValue">{{ project.resultDate }}日</div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="18" class="right-col">
      <el-col :span="24" class="right-head-col">
        <div class="body-head">
          <el-col
            :class="index == leftHeadAvtive ? 'changeBackground' : ''"
            @click.native="changeHeadColor(index)"
            :span="2"
            v-for="(item, index) in leftHeadList"
            >{{ item }}</el-col
          >
        </div>
        <div class="body">
          <div class="body-inside">
            <el-col :span="24" class="body-inside-head">
              <el-col :span="24" style="height:12%">
                <el-col :span="4" class="body-inside-item">
                  <span class="inside-title">项目招标内容</span>
                </el-col>
                <el-col :span="4" class="body-inside-item" :offset="16"
                  >清单编辑<i class=""></i></el-col
                >
              </el-col>
              <hr />
            </el-col>
            <el-col :span="24" class="body-inside-footer"> </el-col>
          </div>
        </div>
      </el-col>
      <el-col :span="24" class="right-footer-col"> </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      projectList: [
        {
          corporateName: "福洁公司",
          projectName: "美国德州建厂项目",
          termDate: "2020-1-1",
          resultDate: "2020-1-2",
        },
        {
          corporateName: "福洁公司",
          projectName: "美国德州建厂项目",
          termDate: "2020-1-1",
          resultDate: "2020-1-2",
        },
        {
          corporateName: "福洁公司",
          projectName: "美国德州建厂项目",
          termDate: "2020-1-1",
          resultDate: "2020-1-2",
        },
      ],
      leftHeadList: ["项目启动", "项目预算", "项目执行", "项目验收"],
      activeColor: 0,
      leftHeadAvtive: 0,
    };
  },
  methods: {
    changeColor(index) {
      this.activeColor = index;
    },
    changeHeadColor(index) {
      this.leftHeadAvtive = index;
    },
  },
};
</script>
<style lang="less" scoped>
.el-row {
  height: 96%;
  //   margin-top: 2%;
  .left-col {
    height: 100%;
    margin-top: 1%;
    .left-col-body {
      letter-spacing: 1px; //间距
      width: 100%;
      height: 100%;
      overflow-y: auto;
      .project-item {
        width: 90%;
        height: 31%;

        margin: auto;
        margin-top: 3%;
        background: #fff;
        border-radius: 25px;
        position: relative;
        .item {
          width: 90%;
          height: 90%;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          hr {
            height: 1px;
            border: none;
            background: #a9a9a9;
          }
          .title {
            font-size: 17px;
            font-weight: bold;
            margin-bottom: 5%;
          }
          .titleKey {
            font-size: 16px;
            font-weight: bold;
            margin-top: 3%;
            color: #616161;
          }
          .titleValue {
            font-size: 15px;
            //   font-weight: bold;
            margin-top: 4%;
            margin-left: 10%;
            letter-spacing: 0px; //间距
            color: #a9a9a9;
          }
        }
      }
      .projectActive {
        transform: scale(1.01, 1.01);
        box-shadow: #666 0px 0px 10px;
        background: #5e77b5;
        color: #fff;
        .item {
          hr {
            background: #fff;
          }
          .titleKey {
            color: #fff;
          }
          .titleValue {
            color: #fff;
          }
        }
      }
    }
  }
  .right-col {
    height: 100%;
    margin-top: 2%;
    .right-head-col {
      height: 75%;
      .body-head {
        width: 100%;
        height: 5%;
        .el-col {
          background: #5e77b5;
          height: 100%;
          color: #fff;
          border-left: 1px solid #fff;
          // border-radius: 5px 5px 0px 0px;
          text-align: center;
          line-height: 180%;
          font-size: 14px;
          letter-spacing: 1px; //间距
        }
        .el-col:last-child {
          border-radius: 0px 5px 0px 0px;
        }
        .el-col:first-child {
          border-radius: 5px 0px 0px 0px;
        }
        .changeBackground {
          background: #fff;
          height: 140%;
          color: #5e77b5;
          border-radius: 5px 5px 0px 0px !important;
          margin-top: -1%;
          line-height: 280%;
        }
      }
      .body {
        width: 100%;
        height: 95%;
        background: #fff;
        border-radius: 0px 25px 25px 25px;
        .body-inside {
          width: 90%;
          height: 100%;
          margin: auto;
          background: red;
          .inside-title {
            font-size: 20px;
            font-weight: bold;
          }
          .body-inside-head {
            height: 65%;
            background: yellow;
            .body-inside-item {
                height: 50%;
                margin-top:1%;
            }
          }
          .body-inside-footer {
            height: 35%;
            background: green;
          }
        }
      }
    }
    .right-footer-col {
      margin-top: 3%;
      height: 15%;
      background: yellow;
    }
  }
}
</style>
