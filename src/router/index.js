import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Dashboard from '../views/Dashboard.vue'
import Book from '../views/Books/Index.vue'
import Member from '../views/Member/Index.vue'
import Visitor from '../views/Visitor/Index.vue'
import Borrowing from '../views/Borrowing/Index.vue'
import Library from '../views/Library/Index.vue'
import Rack from '../views/Rack/Index.vue'
import Class from '../views/Class/Index.vue'
import Major from '../views/Major/Index.vue'
import Admin from '../views/Admin/Index.vue'
import Profile from '../views/Profile/Index.vue'

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
                    path: '/statistik-anggota',
                    name: 'Member.Statistic',
                    component: () => import('../views/Member/Statistic.vue')
                },
                {
                    path: '/pengunjung',
                    name: 'Visitor.Index',
                    component: Visitor
                },
                {
                    path: '/tambah-pengunjung',
                    name: 'Visitor.Create',
                    component: () => import('../views/Visitor/Create.vue')
                },
                {
                    path: '/edit-pengunjung/:id',
                    name: 'Visitor.Edit',
                    component: () => import('../views/Visitor/Edit.vue')
                },  
                {
                    path: '/statistik-pengunjung',
                    name: 'Visitor.Statistic',
                    component: () => import('../views/Visitor/Statistic.vue')
                },  
                {
                    path: '/peminjaman',
                    name: 'Borrowing.Index',
                    component: Borrowing
                },
                {
                    path: '/pre-peminjaman',
                    name: 'Borrowing.Pre',
                    component: () => import('../views/Borrowing/Pre.vue')
                },
                {
                    path: '/statistik-peminjaman',
                    name: 'Borrowing.Statistic',
                    component: () => import('../views/Borrowing/Statistic.vue')
                },
                {
                    path: '/perpustakaan',
                    name: 'Library.Index',
                    component: Library
                },
                {
                    path: '/rak/:page',
                    name: 'Rack.Index',
                    component: Rack,
                    beforeEnter: (to, from, next) => {
                        const page = parseInt(to.params.page, 10);
                        if (isNaN(page) || page <= 0) {
                            next('/rak/1'); // Redirect to /rak/1 if :page is not valid
                        } else {
                            next(); // Continue to the intended route
                        }
                    },
                },
                {
                    path: '/tambah-rak',
                    name: 'Rack.Create',
                    component: () => import('../views/Rack/Create.vue')
                },
                {
                    path: '/edit-rak/:id',
                    name: 'Rack.Edit',
                    component: () => import('../views/Rack/Edit.vue')
                },
                {
                    path: '/kelas/:page',
                    name: 'Class.Index',
                    component: Class,
                    beforeEnter: (to, from, next) => {
                        const page = parseInt(to.params.page, 10);
                        if (isNaN(page) || page <= 0) {
                            next('/kelas/1'); // Redirect to /rak/1 if :page is not valid
                        } else {
                            next(); // Continue to the intended route
                        }
                    },
                },
                {
                    path: '/tambah-kelas',
                    name: 'Class.Create',
                    component: () => import('../views/Class/Create.vue')
                },
                {
                    path: '/edit-kelas/:id',
                    name: 'Class.Edit',
                    component: () => import('../views/Class/Edit.vue')
                },
                {
                    path: '/jurusan/:page',
                    name: 'Jurusan.Index',
                    component: Major,
                    beforeEnter: (to, from, next) => {
                        const page = parseInt(to.params.page, 10);
                        if (isNaN(page) || page <= 0) {
                            next('/jurusan/1'); // Redirect to /rak/1 if :page is not valid
                        } else {
                            next(); // Continue to the intended route
                        }
                    },
                },
                {
                    path: '/tambah-jurusan',
                    name: 'Jurusan.Create',
                    component: () => import('../views/Major/Create.vue')
                },
                {
                    path: '/edit-jurusan/:id',
                    name: 'Jurusan.Edit',
                    component: () => import('../views/Major/Edit.vue')
                },
                {
                    path: '/admin/:page',
                    name: 'Admin.Index',
                    component: Admin,
                    beforeEnter: (to, from, next) => {
                        const page = parseInt(to.params.page, 10);
                        if (isNaN(page) || page <= 0) {
                            next('/admin/1'); // Redirect to /rak/1 if :page is not valid
                        } else {
                            next(); // Continue to the intended route
                        }
                    },
                },
                {
                    path: '/tambah-admin',
                    name: 'Admin.Create',
                    component: () => import('../views/Admin/Create.vue')
                },
                {
                    path: '/edit-admin/:id',
                    name: 'Admin.Edit',
                    component: () => import('../views/Admin/Edit.vue')
                },
                {
                    path: '/profil',
                    name: 'Profile.Index',
                    component: Profile
                }
            ]
        }
    ]
})

export default router