import {createRouter, createWebHistory} from 'vue-router'
import gallery from '@/gallery.vue'
import app from '@/App.vue'
const routes = [
    {
        path: '/',
        component: app
    },
    {
        path: '/gallery/:id',
        component: gallery,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;