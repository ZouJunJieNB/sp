import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/main.less';
import http from './api/http'
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$http = http

new Vue({
    router,
    render: function(h) { return h(App) }
}).$mount('#app')