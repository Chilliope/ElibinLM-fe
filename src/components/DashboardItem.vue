<template>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <router-link v-for="item in cardItem" :key="item.name" :to="item.href" class="bg-white rounded-2xl w-full h-20 shadow-sm flex justify-between items-center px-3 hover:bg-blue-100 hover:duration-150">
            <div class="text-slate-600 capitalize">{{ item.name }}</div>
            <div class="w-1/4 h-10 rounded-xl flex items-center justify-center text-lg" :class="item.color"><i :class="item.icon"></i></div>
        </router-link>
    </div>
</template>

<script setup>
let cardItem = [
    {
        icon: 'fa-solid fa-book',
        name: 'koleksi buku',
        href: '/koleksi-buku',
        color: 'bg-green-200 text-green-600'
    },
    {
        icon: 'fa-solid fa-users',
        name: 'anggota',
        href: '/anggota',
        color: 'bg-sky-200 text-sky-600'
    },
    {
        icon: 'fa-solid fa-user-secret',
        name: 'pengunjung',
        href: '/pengunjung',
        color: 'bg-yellow-200 text-yellow-600'
    },
    {
        icon: 'fa-solid fa-clipboard',
        name: 'peminjaman',
        href: '/peminjaman',
        color: 'bg-blue-200 text-blue-600'
    },
    {
        icon: 'fa-solid fa-building',
        name: 'perpustakaan',
        href: '/perpustakaan',
        color: 'bg-red-200 text-red-600'
    },
    {
        icon: 'fa-solid fa-sign-hanging',
        name: 'rak buku',
        href: '/rak',
        color: 'bg-teal-200 text-teal-600'
    },
    {
        icon: 'fa-solid fa-landmark',
        name: 'kelas',
        href: '/kelas',
        color: 'bg-cyan-200 text-cyan-600'
    },
    {
        icon: 'fa-solid fa-hammer',
        name: 'jurusan',
        href: '/jurusan',
        color: 'bg-purple-200 text-purple-600'
    },
    {
        icon: 'fa-solid fa-clipboard-user',
        name: 'admin',
        href: '/admin',
        color: 'bg-lime-200 text-lime-600'
    }
]
</script>