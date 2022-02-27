import { createRouter, createWebHistory } from 'vue-router'

import ProductsPage from '@/views/ProductsPage'
import ProductsBlock from '@/views/ProductsBlock'

const routes = [
    {
        path: '/',
        redirect: '/14/15'
    },
    {
        path: '/:category',
        component:  ProductsPage,
        children: [
            {
                path: ':id',
                component:  ProductsBlock
            }
        ]
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router