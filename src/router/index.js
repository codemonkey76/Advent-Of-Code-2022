import { createRouter, createWebHistory } from "vue-router";
import Day1 from "../Pages/Day1.vue"
import Day2 from "../Pages/Day2.vue"

const routes = [
    { path: '/', component: Day1 },
    { path: '/day2', component: Day2 },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
