<template>
  <div class="tab-item" :style="{ backgroundImage: 'url(' + img + ')' }">
    <!--  -->
    <div class="img-list">
      <!-- img -->
      <div class="img">
        <div class="tit" style="color:#5B74B3">
          <i class="el-icon-s-tools" /> {{ title }}
        </div>
        <!-- <div class="img-item"><img :src="img" alt="" /></div> -->
      </div>
      <!-- list -->
      <div class="list">
        <ul>
          <li v-for="item in list" :key="item.id" style="color:#5B74B3">
            <i class="el-icon-eleme"></i>{{ item }}
          </li>
        </ul>
      </div>
    </div>
    <!--  -->
    <div class="start" style="color:#5B74B3">
      <i class="el-icon-arrow-right"></i
      ><i
        class="el-icon-arrow-right"
        style="font-weight:bold;"
      ></i>
      点击进入
      <i class="el-icon-arrow-left" style="font-weight:bold;"></i
      ><i class="el-icon-arrow-left"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: [],
    },
  },
  mounted() {
    console.log(this.img);
  },
};
</script>
<style lang="less" scoped>
.tab-item {
  // box-shadow:0px 0px 2px rgb(177, 167, 167);
  // border: 1px solid #f2f2f2;
  // border-radius: 15px;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px 10px 0;
  .img-list {
    display: flex;
    height: 100%;
    flex: 1;
    .img {
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .tit {
        font-size: 18px;
        font-weight: bold;
        padding-left: 10px;
      }
      .img-item {
        flex: 1;
        height: 100%;
        width: 100%;
        img {
          width: 50%;
          height: 100%;
        }
      }
    }
    .list {
      width: 30%;
      // padding-left: 20px;
      ul {
        padding-top: 10px;
        li {
          padding: 6%;
          i {
            margin-right: 8px;
          }
        }
      }
    }
  }
  .start {
    padding: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>
