<template>
  <div class="subject">
    <div class="subject-head flex">
      <div class="head-text"
        v-for="(item, index) in leftHeadList"
        :key="index"
        >{{ item }}</div
      >
    </div>
    <div class="subject-body"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            leftHeadList: ["人员要求", "培训计划1", "+添加新计划"],
        }

    },
    methods:{
         
    }
};
</script>

<style lang="less" scoped>
.subject {
  width: 100%;
  height: 100%;
  // padding-top:1%;
  .subject-head {
    width:97%;
    margin: auto;
    height: 4%;
    .head-text{
        width: 110px;
        height: 100%;
        text-align: center;
        background:#fff;
    }
  }
  .subject-body {
    width: 97%;
    height: 94%;
    margin: auto;
    background: #fff;
    border-radius: 0px 0px 25px 25px;
    margin-bottom: 1%;
  }
}
</style>
