import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let  routers = [
    {
        path:"/testone",
        name:"TestOne",
        component: () => {
            return import("@/views/testOne/index.vue");
        },
    },
    {
        path:"/testtwo",
        name:"TestTwo",
        component: () => {
            return import("@/views/testTwo/index.vue");
        },
    },
];
export default routers
