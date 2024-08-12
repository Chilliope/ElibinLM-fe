import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Dashboard from '../views/Dashboard.vue'
import Book from '../views/Books/Index.vue'
import Member from '../views/Member/Index.vue'
import Visitor from '../views/Visitor/Index.vue'
import Borrowing from '../views/Borrowing/Index.vue'

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
                },
                {
                    path: '/anggota',
                    name: 'Member.Index',
                    component: Member
                },
                {
                    path: '/tambah-anggota',
                    name: 'Member.Create',
                    component: () => import('../views/Member/Create.vue')
                },
                {
                    path: '/edit-anggota/:id',
                    name: 'Member.Edit',
                    component: () => import('../views/Member/Edit.vue')
                },
                {
                    path: '/pengunjung',
                    name: 'Visitor.Index',
                    component: Visitor
                },
                {
                    path: '/edit-pengunjung/:id',
                    name: 'Visitor.Edit',
                    component: () => import('../views/Visitor/Edit.vue')
                },  
                {
                    path: '/peminjaman',
                    name: 'Borrowing.Index',
                    component: Borrowing
                }
            ]
        }
    ]
})

export default router