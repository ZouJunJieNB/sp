import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home"),
    children: [
      {
        path: "tabs",
        name: "tabs",
        component: () => import("@/views/Tabs"),
      },
      {
        // 设备清单
        path: "equipmentList",
        name: "equipmentList",
        component: () =>
          import("@/components/client/projectManagement/budget/equipmentList"),
      },
      {
        // 分类浏览
        path: "typeBrowsing",
        name: "typeBrowsing",
        component: () =>
          import("@/components/client/onlinePurchasing/typeBrowsing"),
      },
      {
        path: "*",
        name: "404",
        component: () => import("../views/404.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login"),
    meta: {
      withoutLayout: true,
    },
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
