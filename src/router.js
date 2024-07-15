import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import WritingPractice from '@/views/WritingPractice.vue'
import ListeningPractice from '@/views/ListeningPractice.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/writing', component: WritingPractice },
    { path: '/listening', component: ListeningPractice },
    // 添加一個 catch-all 路由
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router