<template>
  <div class="nav" :style="bacStyle">
    <div>icon</div>
    <div class="right">
      <div class="nav-item">
        <i class="el-icon-search"></i>
      </div>
      <div class="nav-item">
        <i class="el-icon-bell"></i>
      </div>

      <div class="nav-item">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
      </div>
      <div class="nav-item">用户名</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      bacStyle:{}
    }
  },
  mounted(){
      let obj = localStorage.getItem("user");
      let user = JSON.parse(obj);
      if(user.role === "client"){
        this.bacStyle = {"background":"linear-gradient(to right, #5e77b5, #93a7d9, #b6c6f1)"}
      }else if(user.role === "sp"){
        this.bacStyle = {"background":"linear-gradient(to right, #46CACD, #81E2E4, #B4F6F8)"}

      }else if(user.role === "supplier"){
        this.bacStyle = {"background":"linear-gradient(to right, #D6C02F, #D6C02F, #D6C02F)"}

      }
   
  }
}
</script>
<style scoped lang="less">
.nav {
  display: flex;
  // 里面两个div向左右靠齐
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #f2f2f2;
  border-radius: 0px 0px 0px 15px;
  align-items: center;
  
  .right {
    display: flex;
    align-items: center;
    color: #fff;
    margin-right: 2%;
  }
  .nav-item {
    margin-left: 25px;
    font-size: 16px;
  }
}
</style>