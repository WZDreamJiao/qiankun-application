let routes = [
    {
        path: "/",
        name: "Home",
        component: () => {
            return import("@/views/home/index.vue");
        },
    },
];
export default routes;

