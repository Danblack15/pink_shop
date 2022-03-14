import { createRouter, createWebHistory } from 'vue-router'

import ProductsPage from '@/views/ProductsPage/ProductsPage'
import ProductsBlock from '@/views/ProductsBlock/ProductsBlock'

const routes = [
    {
        path: '/',
        redirect: '/14/15'
    },
    {
        path: '/:category',
        component: ProductsPage,
        children: [
            {
                path: ':id',
                component: ProductsBlock
            },
        ]
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router