import {createRouter, createWebHistory} from 'vue-router'
import WelcomePage from './components/WelcomePage.vue'
import Signup from './components/Signup.vue'

const routes = [
    {
        path: '/',
        name: 'WelcomePage',
        component: WelcomePage
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router