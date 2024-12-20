import {createRouter, createWebHistory} from "vue-router";

const Home = () => import("./pages/Home.vue");
const NotFound = () => import("./pages/NotFound.vue");

const routes = [
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
    {path: '/', component: Home},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
