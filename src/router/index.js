import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Dashboard from '../views/Dashboard.vue'
import Book from '../views/Books/Index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            redirect: { path: '/dashboard' },
            component: Index,
            children: [
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    component: Dashboard
                },
                {
                    path: '/koleksi-buku',
                    name: 'Books.Index',
                    component: Book
                },
                {
                    path: '/tambah-koleksi',
                    name: 'Books.Create',
                    component: () => import('../views/Books/Create.vue')
                },
                {
                    path: '/edit-koleksi/:slug',
                    name: 'Books.Edit',
                    component: () => import('../views/Books/Edit.vue')
                }
            ]
        }
    ]
})

export default router