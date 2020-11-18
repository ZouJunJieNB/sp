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
      // this.$http.get("/api/asdgsda", { name: "", paw: "" }).then((res) => {
      //   console.log(res);
      // });

      let user = {
      
        username: "zhangsan",
        password: "123",
        role: ["admin", "manager"],
        menu: [
          {
            id:"1",
            menuName: "项目管理",
            menuNngName: "project",
            href: "/project",
            icon: "www.www",
            children: [
              {
                 id:"1-1",
                menuName: "项目启动",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
              },
              { id:"1-2",
                menuName: "项目预算",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
                children: [
                  {
                     id:"1-2-1",
                    menuName: "设备清单",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id:"1-2-2",
                    menuName: "原料清单",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id:"1-2-3",
                    menuName: "人员准备",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id:"1-2-4",
                    menuName: "资金准备",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id:"1-2-5",
                    menuName: "生成项目预算",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id:"1-2-6",
                    menuName: "商务条款",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  }
                ]
              },
              {
                 id:"1-3",
                menuName: "项目执行",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
                children: [
                  { id:"1-3-1",
                    menuName: "进度管理",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  { id:"1-3-2",
                    menuName: "SAT管理",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                     id:"1-3-3",
                    menuName: "安装管理",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                     id:"1-3-4",
                    menuName: "FAT管理",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                     id:"1-3-5",
                    menuName: "人员培训",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id:"1-3-6",
                    menuName: "验收管理",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                ],
              },
              {
                 id:"1-4",
                menuName: "我的项目",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
              }
            ]
          },
          {
             id:"2",
            menuName: "生产管理",
            menuNngName: "project",
            href: "/project",
            icon: "www.www",
            children: [
              {
                 id:"2-1",
                menuName: "生产信息看板",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
              },
              {
                id:"2-2",
                menuName: "质量监控看板",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
              },
              {
                id:"2-3",
                menuName: "设备监控看板",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
              },
              {
                id:"2-4",
                menuName: "生产工艺问题解决",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
              }
            ],
          },
          {
            id:"3",
            menuName: "在线采购",
            menuNngName: "project",
            href: "/project",
            icon: "www.www",
            children: [
              {
                id:"3-1",
                menuName: "分类浏览",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
              },
              {
                 id:"3-2",
                menuName: "订单列表",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
                children: [
                  {
                     id:"3-2-1",
                    menuName: "执行订单",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                     id:"3-2-2",
                    menuName: "历史订单",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                ]
              },
            ],
          },
          {
             id:"4",
            menuName: "我的页面",
            menuNngName: "project",
            href: "/project",
            icon: "www.www",
             children: [
                  {
                    id:"4-1",
                    menuName: "账户管理",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id:"4-2",
                    menuName: "会员等级",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                ]
          },
        ],
      };
      console.log(user)
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", "123");
      this.$router.push("/tabs");
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
