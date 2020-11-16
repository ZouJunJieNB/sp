<template>
  <div class="nav">
    <div>icon</div>
    <div class="right">
      <div class="nav-item">
        <i class="el-icon-bell"></i>
      </div>

      <div class="nav-item">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
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
  border-bottom: 1px solid #f2f2f2;
  align-items: center;
  .right {
    display: flex;
    align-items: center;
  }
  .nav-item {
    margin-left: 10px;
  }
}
</style>