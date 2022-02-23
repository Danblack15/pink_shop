import { createRouter, createWebHistory } from 'vue-router'

import ProductsPage from '@/views/ProductsPage'

const routes = [
    {
        path: '/',
        component:  ProductsPage
    },
    {
        path: '/products',
        component:  ProductsPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router