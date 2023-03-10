import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router/index";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss'
import "@/qiankun/index";


Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
