import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/main.less';
import http from './api/http'
// 引入国际化插件并挂载
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$http = http

const i18n = new VueI18n({
    locale: 'zh-CN', // 语言标识
    // this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh-CN': require('./locales/zh.js'), // 中文语言包
        'en-US': require('./locales/en.js') // 英文语言包
    }
})

new Vue({
    router,
    i18n, // 国际化
    render: function(h) { return h(App) }
}).$mount('#app')