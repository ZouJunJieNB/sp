<template>
  <div>
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div class="loginBox" style="">
      <el-card style="width: 400px">
        <div slot="header" class="clearfix">
          <span>{{ $t("lang.Login.login") }}</span>
        </div>
        <table class="table">
          <tr>
            <td>{{ $t("lang.Login.username") }}</td>
            <td>
              <el-input v-model="user.username"></el-input>
            </td>
          </tr>
          <tr>
            <td>{{ $t("lang.Login.password") }}</td>
            <td>
              <el-input
                type="password"
                v-model="user.password"
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
              <el-button style="width: 300px" type="primary" @click="doLogin">{{
                $t("lang.Login.login")
              }}</el-button>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <el-button
                style="width: 100px"
                type="primary"
                @click="switchLangCh"
                >{{ $t("lang.Login.switchChinese") }}</el-button
              >
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <el-button
                style="width: 100px"
                type="primary"
                @click="switchLangEn"
                >{{ $t("lang.Login.switchEnglish") }}</el-button
              >
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>
<script>
import { login } from "@/api/login/login";
export default {
  data() {
    return {
      user: {
        username: "lisi",
        password: "123",
        //为了登录方便，可以直接在这里写好用户名和密码的值
      },
    };
  },
  methods: {
    doLogin() {
      // if (this.user.username != "zhangsan" || this.user.password != "123") {
      //   this.$message.error("账号或密码错误");
      //   return;
      // }
      // login(this.user.username, this.user.password).then((res) => {
      //   var code = res.code;
      //   if (code == "200") {
         
      //   }
      // });

       let role = "";
          let menu = [];
          if (this.user.username === "zhangsan") {
            role = "sp";
            menu = [
              {
                id: "1",
                menuName: "项目管理",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
                children: [
                  {
                    id: "1-1",
                    menuName: "项目审批",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id: "1-2",
                    menuName: "项目执行",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                    children: [
                      {
                        id: "1-2-1",
                        menuName: "进度管理",
                        menuNngName: "project",
                        href: "/equipmentList",
                        icon: "www.www",
                      },
                      {
                        id: "1-2-2",
                        menuName: "SAT管理",
                        menuNngName: "nmd",
                        href: "/nmd",
                        icon: "www.www",
                      },
                      {
                        id: "1-2-3",
                        menuName: "安装管理",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "1-2-4",
                        menuName: "FAT管理",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "1-2-5",
                        menuName: "人员安排",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "1-2-6",
                        menuName: "原料计划",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                    ],
                  },
                  {
                    id: "1-3",
                    menuName: "我的项目",
                    menuNngName: "myProject",
                    href: "/myProject",
                    icon: "www.www",
                  },
                ],
              },
              {
                id: "2",
                menuName: "生产管理",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
                children: [
                  {
                    id: "2-1",
                    menuName: "综合展示",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id: "2-2",
                    menuName: "生产工艺问题解决",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id: "2-3",
                    menuName: "人员培训",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                ],
              },
              {
                id: "3",
                menuName: "线上业务管理",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
                children: [
                  {
                    id: "3-1",
                    menuName: "线上商品管理",
                    menuNngName: "project",
                    href: "/typeBrowsing",
                    icon: "www.www",
                  },
                  {
                    id: "3-2",
                    menuName: "线上订单管理",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                    children: [
                      {
                        id: "3-2-1",
                        menuName: "执行订单",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "3-2-2",
                        menuName: "历史订单",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                    ],
                  },
                ],
              },
              {
                id: "4",
                menuName: "SP业务管理",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
                children: [
                  {
                    id: "4-1",
                    menuName: "订货单",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id: "4-2",
                    menuName: "生产确认单",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id: "4-3",
                    menuName: "发货确认单",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id: "4-4",
                    menuName: "海关相关业务",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                    children: [
                      {
                        id: "4-4-1",
                        menuName: "订舱",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "4-4-2",
                        menuName: "装箱",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "4-4-3",
                        menuName: "海关申报",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "4-4-4",
                        menuName: "清关申报",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                    ],
                  },
                  {
                    id: "4-5",
                    menuName: "库存管理",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                    children: [
                      {
                        id: "4-5-1",
                        menuName: "在途库存",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "4-5-2",
                        menuName: "客户仓库库存",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "4-5-3",
                        menuName: "供应商国内库存",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                    ],
                  },
                  {
                    id: "4-6",
                    menuName: "财务管理",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                    children: [
                      {
                        id: "4-6-1",
                        menuName: "核对",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "4-6-2",
                        menuName: "应收管理",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "4-6-3",
                        menuName: "应付管理",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                    ],
                  },
                ],
              },
              {
                id: "5",
                menuName: "系统管理",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
                children: [
                  {
                    id: "5-1",
                    menuName: "客户管理",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                    children: [
                      {
                        id: "5-1-1",
                        menuName: "客户资料",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "5-1-2",
                        menuName: "会员等级",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                    ],
                  },
                  {
                    id: "5-2",
                    menuName: "供应商管理",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                    children: [
                      {
                        id: "5-2-1",
                        menuName: "供应商资料",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "5-2-2",
                        menuName: "供应商等级",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                    ],
                  },
                  {
                    id: "5-3",
                    menuName: "技工管理",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id: "5-4",
                    menuName: "商品管理",
                    menuNngName: "spCommodityMan",
                    href: "/spCommodityMan",
                    icon: "www.www",
                  },
                  {
                    id: "5-5",
                    menuName: "汇率管理",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id: "5-6",
                    menuName: "账号管理",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                ],
              },
            ];
          } else if (this.user.username === "lisi") {
            role = "client";
            menu = [
              {
                id: "1",
                menuName: "项目管理",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
                children: [
                  {
                    id: "1-1",
                    menuName: "项目启动",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id: "1-2",
                    menuName: "项目预算",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                    children: [
                      {
                        id: "1-2-1",
                        menuName: "设备清单",
                        menuNngName: "equipmentList",
                        href: "/equipmentList",
                        icon: "www.www",
                      },
                      {
                        id: "1-2-2",
                        menuName: "原料清单",
                        menuNngName: "materialList",
                        href: "/materialList",
                        icon: "www.www",
                      },
                      {
                        id: "1-2-3",
                        menuName: "人员准备",
                        menuNngName: "personnel",
                        href: "/personnel",
                        icon: "www.www",
                      },
                      {
                        id: "1-2-4",
                        menuName: "资金准备",
                        menuNngName: "fundPreparation",
                        href: "/fundPreparation",
                        icon: "www.www",
                      },
                      {
                        id: "1-2-5",
                        menuName: "生成项目预算",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "1-2-6",
                        menuName: "商务条款",
                        menuNngName: "businessTerms",
                        href: "/businessTerms",
                        icon: "www.www",
                      },
                    ],
                  },
                  {
                    id: "1-3",
                    menuName: "项目执行",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                    children: [
                      {
                        id: "1-3-1",
                        menuName: "进度管理",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "1-3-2",
                        menuName: "SAT管理",
                        menuNngName: "sat",
                        href: "/sat",
                        icon: "www.www",
                      },
                      {
                        id: "1-3-3",
                        menuName: "安装管理",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "1-3-4",
                        menuName: "FAT管理",
                        menuNngName: "fat",
                        href: "/fat",
                        icon: "www.www",
                      },
                      {
                        id: "1-3-5",
                        menuName: "人员培训",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "1-3-6",
                        menuName: "验收管理",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                    ],
                  },
                  {
                    id: "1-4",
                    menuName: "我的项目",
                    menuNngName: "myProject",
                    href: "/myProject",
                    icon: "www.www",
                  },
                ],
              },
              {
                id: "2",
                menuName: "生产管理",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
                children: [
                  {
                    id: "2-1",
                    menuName: "生产信息看板",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id: "2-2",
                    menuName: "质量监控看板",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id: "2-3",
                    menuName: "设备监控看板",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id: "2-4",
                    menuName: "生产工艺问题解决",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                ],
              },
              {
                id: "3",
                menuName: "在线采购",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
                children: [
                  {
                    id: "3-1",
                    menuName: "分类浏览",
                    menuNngName: "project",
                    href: "/typeBrowsing",
                    icon: "www.www",
                  },
                  {
                    id: "3-2",
                    menuName: "订单管理",
                    menuNngName: "orderManagement",
                    href: "/orderManagement",
                    icon: "www.www",
                  },
                ],
              },
              {
                id: "4",
                menuName: "我的页面",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
                children: [
                  {
                    id: "4-1",
                    menuName: "账户管理",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id: "4-2",
                    menuName: "会员等级",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                ],
              },
            ];
          } else if (this.user.username === "wangwu") {
            role = "supplier";
            menu = [
              {
                id: "1",
                menuName: "项目管理",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
                children: [
                  {
                    id: "1-1",
                    menuName: "项目竞标",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                    children: [
                      {
                        id: "1-1-1",
                        menuName: "项目资料",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "1-1-2",
                        menuName: "投标资料",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "1-1-3",
                        menuName: "竞标结果",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "1-1-4",
                        menuName: "商务条款",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                    ],
                  },
                  {
                    id: "1-2",
                    menuName: "项目执行",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                    children: [
                      {
                        id: "1-2-1",
                        menuName: "进度管理",
                        menuNngName: "project",
                        href: "/equipmentList",
                        icon: "www.www",
                      },
                      {
                        id: "1-2-2",
                        menuName: "SAT管理",
                        menuNngName: "nmd",
                        href: "/nmd",
                        icon: "www.www",
                      },
                      {
                        id: "1-2-3",
                        menuName: "FAT管理",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "1-2-4",
                        menuName: "原料计划",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                    ],
                  },
                ],
              },
              {
                id: "2",
                menuName: "技术支持",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
                children: [
                  {
                    id: "2-1",
                    menuName: "商品列表",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id: "2-2",
                    menuName: "订单列表",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                    children: [
                      {
                        id: "2-2-1",
                        menuName: "执行订单",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "2-2-1",
                        menuName: "历史订单",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                    ],
                  },
                  {
                    id: "2-3",
                    menuName: "设备监控看板",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id: "2-4",
                    menuName: "生产工艺问题解决",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                ],
              },
              {
                id: "3",
                menuName: "我的页面",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
                children: [
                  {
                    id: "3-1",
                    menuName: "账户管理",
                    menuNngName: "project",
                    href: "/typeBrowsing",
                    icon: "www.www",
                  },
                  {
                    id: "3-2",
                    menuName: "会员等级",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                    children: [
                      {
                        id: "3-2-1",
                        menuName: "执行订单",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                      {
                        id: "3-2-2",
                        menuName: "历史订单",
                        menuNngName: "project",
                        href: "/project",
                        icon: "www.www",
                      },
                    ],
                  },
                ],
              },
              {
                id: "4",
                menuName: "我的页面",
                menuNngName: "project",
                href: "/project",
                icon: "www.www",
                children: [
                  {
                    id: "4-1",
                    menuName: "账户管理",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                  {
                    id: "4-2",
                    menuName: "会员等级",
                    menuNngName: "project",
                    href: "/project",
                    icon: "www.www",
                  },
                ],
              },
            ];
          }
          let user = {
            username: "zhangsan",
            password: "123",
            role: role,
            menu: menu,
          };
          
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", "123");
          this.$router.push("/tabs");
    },
    switchLangCh() {
      this.$i18n.locale = "zh-CN"; // 切换成中文
    },
    switchLangEn() {
      this.$i18n.locale = "en-US"; // 切换成英文
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
