let routes = [
    {
        path: "/home",
        name: "Home",
        component: () => {
            import("@/views/home/index.vue");
        },
    },
    {
        // 重定向
        path: "/",
        redirect: "/home",
    },
];
export default routes;

