import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Hamburger from './pages/Hamburger.vue'
import NotFound from './pages/404.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/About', component: About },
    { path: '/Hamburger', component: Hamburger },
    { path: '/:pathMatch(.*)*', component: NotFound },

]

export const router = createRouter({
    history:createWebHistory(),
    routes
})