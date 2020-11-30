import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: "home",
        component: () =>
            import ("@/views/Home"),
        children: [
            /** ------------客户-------------- */
            {
                path: "tabs",
                name: "tabs",
                component: () =>
                    import ("@/views/Tabs"),
            }, {
                // 客户: 设备清单
                path: "/equipmentList",
                name: "equipmentList",
                component: () =>
                    import ("@/components/client/projectManagement/budget/equipmentList"),
            }, {
                // 客户: 原料清单
                path: "/materialList",
                name: "materialList",
                component: () =>
                    import ("@/components/client/projectManagement/budget/materialList"),
            }, {
                // 客户: 分类浏览
                path: "/typeBrowsing",
                name: "typeBrowsing",
                component: () =>
                    import ("@/components/client/onlinePurchasing/typeBrowsing"),
            }, {
                // 客户: SAT管理
                path: "/sat",
                name: "sat",
                component: () =>
                    import ("@/components/client/projectManagement/projectImplementation/sat"),
            }, {
                // 客户: 我的项目
                path: "/myProject",
                name: "myProject",
                component: () =>
                    import ("@/components/client/projectManagement/myProject"),
            },
            {
                // 客户: 订单管理
                path: "/orderManagement",
                name: "orderManagement",
                component: () =>
                    import ("@/components/client/onlinePurchasing/orderManagement"),
            },
            {
                // 客户: 订单详情
                path: "/orderDetails",
                name: "orderDetails",
                component: () =>
                    import ("@/components/client/onlinePurchasing/orderDetails"),
            },
            {
                // 客户: 人员准备-人员要求
                path: "/requirement",
                name: "requirement",
                component: () =>
                    import ("@/components/client/projectManagement/budget/personnelPreparation/requirement"),
            },
            /** ------------SP-------------- */
            {
                // SP: 商品管理
                path: "/spCommodityMan",
                name: "spCommodityMan",
                component: () =>
                    import ("@/components/sp/systemManagement/commodityMan"),
            },
        ]
    },

    {
        path: "/login",
        name: "login",
        component: () =>
            import ("@/views/Login"),
        meta: {
            withoutLayout: true,
        },
    },
    {
        path: "*",
        name: "404",
        component: () =>
            import ("@/views/404.vue"),
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

export default router