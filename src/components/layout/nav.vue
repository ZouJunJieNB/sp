<template>
  <div class="nav">
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
       <div class="nav-item">
          用户名
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.nav {
  display: flex;
  // 里面两个div向左右靠齐
  justify-content: space-between;
  padding: 10px;
  width: 101%;
  margin-left: -1%;
  border-bottom: 1px solid #f2f2f2;
  border-radius: 0px 0px 0px 10px;
  align-items: center;
  background: linear-gradient(to right,#5E77B5,#93A7D9,#B6C6F1);
  .right {
    display: flex;
    align-items: center;
    color:#fff;
    margin-right: 2%;
  }
  .nav-item {
    margin-left: 25px;
    font-size: 16px;
  }
}
</style>