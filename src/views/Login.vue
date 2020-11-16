<template>
  <div>
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div class="loginBox" style="">
      <el-card style="width: 400px">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <table class="table">
          <tr>
            <td>用户名</td>
            <td>
              <el-input
                v-model="user.username"
                placeholder="请输入用户名"
              ></el-input>
            </td>
          </tr>
          <tr>
            <td>密码</td>
            <td>
              <el-input
                type="password"
                v-model="user.password"
                placeholder="请输入密码"
                @keydown.enter.native="doLogin"
              ></el-input>
              <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
            </td>
          </tr>
          <tr>
            <!-- 占两行-->
            <td colspan="2">
              <!-- 点击事件的两种不同的写法v-on:click和 @click-->
              <!--<el-button style="width: 300px" type="primary" v-on:click="doLogin">登录</el-button>-->
              <el-button style="width: 300px" type="primary" @click="doLogin"
                >登录</el-button
              >
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: "zhangsan",
        password: "123",
        //为了登录方便，可以直接在这里写好用户名和密码的值
      },
    };
  },
  methods: {
    doLogin() {
      if (this.user.username != "zhangsan" || this.user.password != "123") {
        this.$message.error("账号或密码错误");
        return;
      }
      this.$http.get("/api/asdgsda", { name: "", paw: "" }).then((res) => {
        console.log(res);
      });
      localStorage.setItem("token", "123");
      this.$router.push("/home");
    },
  },
};
</script>
<style scoped lang="less">
.loginBox {
  display: flex;
  justify-content: center;
  margin-top: 150px;
}
</style>