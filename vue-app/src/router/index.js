import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from "@/router/routes";

let router = new VueRouter({
    mode: "history",
    routes,
})
export default router

