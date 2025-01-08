import {createRouter, createWebHistory} from "vue-router";

const Home = () => import("./pages/Home.vue");
const Services = () => import("./pages/Services.vue");
const CESU = () => import("./pages/CESU.vue");
const Contact = () => import("./pages/Contact.vue");
const NotFound = () => import("./pages/NotFound.vue");

const routes = [
    {path: '/', component: Home},
    {path: '/services', component: Services},
    {path: '/cesu', component: CESU},
    {path: '/contact', component: Contact},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
