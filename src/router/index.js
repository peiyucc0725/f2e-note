import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/Home.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/fav', component: Home },
    { path: '/tag', component: Home },
    { path: '/calendar', component: Home },
    { path: '/share', component: Home },
    { path: '/trash', component: Home }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;