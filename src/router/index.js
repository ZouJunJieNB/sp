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
                component: () =>
                    import("@/views/Tabs"),
            }, {
                // 客户: 设备清单
                path: "/equipmentList",
                name: "equipmentList",
                component: () =>
                    import("@/components/client/projectManagement/budget/equipmentList"),
            }
            , {
                // 客户: 分类浏览
                path: "/typeBrowsing",
                name: "typeBrowsing",
                component: () =>
                    import("@/components/client/onlinePurchasing/typeBrowsing"),
            }, {
                // 客户: SAT管理
                path: "/sat",
                name: "sat",
                component: () =>
                    import("@/components/client/projectManagement/sat"),
            }
        ]
    },

    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login"),
        meta: {
            withoutLayout: true,
        },
    }
    ,
            {
                path: "*",
                name: "404",
                component: () => import("../views/404.vue"),
            },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

export default router
