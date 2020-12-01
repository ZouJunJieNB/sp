<template>
  <div class="subject tac flex-c">
    <div class="subject-head flex-sb-cen">
      选择付款方式
    </div>
    <div class="subject-body flex-cen-around reqitem">
      <div class="item box-shadow-black flex-c ">
        <div class="item-title flex-col-center">
          标准商务付款
        </div>
        <div class="item-body flex-c ">
          <div>
            <span>首付款30%</span>
            <el-input style="width:90%;">
              <template slot="prepend">预计金额$</template>
            </el-input>
          </div>

          <div>
            <span>项目验收65%</span>
            <el-input style="width:90%;">
              <template slot="prepend">预计金额$</template>
            </el-input>
          </div>

          <div>
            <span>项目尾款5%</span>
            <el-input style="width:90%;">
              <template slot="prepend">预计金额$</template>
            </el-input>
          </div>
        </div>
        <div class="item-footer flex-col-center">选择</div>
      </div>
      <div class="item box-shadow-black flex-c">
        <div class="item-title flex-col-center">
          金融服务付款
        </div>
        <div class="item-body flex-c">
          <div class="item-body-head">
            <span>首付款30%</span>
            <el-input style="width:90%;">
              <template slot="prepend">预计金额$</template>
            </el-input>
          </div>
          <div class="item-body-body flex flex-line">
            <span>金融分期服务</span>
            <el-input style="width:45%;">
              <template slot="prepend">第一期</template>
            </el-input>
            <el-input style="width:45%;">
              <template slot="prepend">第二期</template>
            </el-input>
            <el-input style="width:45%;">
              <template slot="prepend">第三期</template>
            </el-input>
            <el-input style="width:45%;">
              <template slot="prepend">第四期</template>
            </el-input>
            <el-input style="width:45%;">
              <template slot="prepend">第五期</template>
            </el-input>
            <el-input style="width:45%;">
              <template slot="prepend">第六期</template>
            </el-input>
            <el-input style="width:45%;">
              <template slot="prepend">第七期</template>
            </el-input>
             <el-input style="width:45%;">
              <template slot="prepend">第八期</template>
            </el-input>
          </div>
          <div class="item-body-footer">
            <i class="el-icon-warning-outline" style="color:red"></i>如需金融服务请与SP联系
          </div>
        </div>
        <div class="item-footer flex-col-center">选择</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.subject {
  .subject-head {
    flex: 1;
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
  }
  .subject-body {
    flex: 9;
    .item {
      width: 350px;
      height: 600px;
      background: #fff;
      border-radius: 10px;
      .item-title {
        font-size: 18px;
        flex: 1;
        border-bottom: 1px solid rgba(149, 150, 151, 0.5);
      }
      .item-body {
        flex: 8;
        justify-content: space-around;
        span {
          color: #5d5d5d;
          font-size: 14px;
          margin-left: 20px;
          line-height: 30px;
        }
        .item-body-head {
          flex: 5;
        }
        .item-body-body {
          flex: 15;
          span{
              display: block;
              width:100%;
          }
          
        }
        .item-body-footer {
          flex: 1;
          font-size: 8px;
          margin-left: 18px;
        }
      }
      .item-footer {
        flex: 1;
        color: #fff;
        background: #5e77b5;
        border-radius: 0px 0px 10px 10px;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
}
</style>
