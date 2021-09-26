import {
    createWebHistory,
    createRouter
} from "vue-router";

const routes = [{
        path: "/",
        alias: "/student",
        name: "student",
        component: () => import("./components/StudentList")
    },
    {
        path: "/student/:id",
        name: "student-details",
        component: () => import("./components/Student")
    },
    {
        path: "/add",
        name: "add",
        component: () => import("./components/AddStudent")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;