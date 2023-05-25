import { createRouter, createWebHistory } from "vue-router";
import Day1 from "../Pages/Day1.vue"
import Day2 from "../Pages/Day2.vue"
import Day3 from "../Pages/Day3.vue"
import Day4 from "../Pages/Day4.vue"

const routes = [
    { path: '/', name: 'day1', component: Day1 },
    { path: '/day2', name: 'day2', component: Day2 },
    { path: '/day3', name: 'day3', component: Day3 },
    { path: '/day4', name: 'day4', component: Day4 }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
