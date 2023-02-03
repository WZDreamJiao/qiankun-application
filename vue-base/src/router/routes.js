let routes = [
    {
        path: "/login",
        name: "Login",
        component: () => {
            return import("@/views/login/index.vue");
        },
    },
    {
    path: "/home",
        name: "Home",
    component: () => {
    return import("@/views/home/index.vue");
        },
    },
    {
        path: "/home/*",
        name: "Home",
        component: () => {
            return import("@/views/home/index.vue");
        }
    },
    {
        // 重定向
        path: "/",
        redirect: "/home",
    },
];
export default routes;

