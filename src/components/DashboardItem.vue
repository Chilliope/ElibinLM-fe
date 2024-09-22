<template>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <router-link v-for="(item, index) in cardItem" :key="index" :to="item.href" class="bg-white rounded-2xl w-full h-max pb-4 shadow-sm flex flex-col px-3 hover:bg-blue-100 hover:duration-150">
            <div class="w-full flex justify-between items-center py-4">
                <div class="text-slate-600 capitalize">{{ item.name }}</div>
                <div class="w-1/4 h-10 rounded-xl flex items-center justify-center text-lg" :class="item.color"><i :class="item.icon"></i></div>
            </div>
            <hr class="border-slate-300">
            <div class="w-full">
                <span class="text-2xl text-slate-500">{{ count[index] || 0 }}</span>
            </div>
        </router-link>
        <p></p>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import useLibrary from '../service/data/library'

const { getLibrary, count } = useLibrary()

let cardItem = [
    {
        icon: 'fa-solid fa-book',
        name: 'koleksi buku',
        href: '/koleksi-buku/1',
        color: 'bg-green-200 text-green-600',
    },
    {
        icon: 'fa-solid fa-users',
        name: 'anggota',
        href: '/anggota/1',
        color: 'bg-sky-200 text-sky-600',
    },
    {
        icon: 'fa-solid fa-user-secret',
        name: 'pengunjung',
        href: '/pengunjung/1',
        color: 'bg-yellow-200 text-yellow-600',
    },
    {
        icon: 'fa-solid fa-clipboard',
        name: 'peminjaman',
        href: '/peminjaman/1',
        color: 'bg-blue-200 text-blue-600',
    },
    {
        icon: 'fa-solid fa-building',
        name: 'perpustakaan',
        href: '/perpustakaan',
        color: 'bg-red-200 text-red-600',
    },
    {
        icon: 'fa-solid fa-sign-hanging',
        name: 'rak buku',
        href: '/rak/1',
        color: 'bg-teal-200 text-teal-600',
    },
    {
        icon: 'fa-solid fa-landmark',
        name: 'kelas',
        href: '/kelas/1',
        color: 'bg-cyan-200 text-cyan-600',
    },
    {
        icon: 'fa-solid fa-hammer',
        name: 'jurusan',
        href: '/jurusan/1',
        color: 'bg-purple-200 text-purple-600',
    },
    {
        icon: 'fa-solid fa-tag',
        name: 'Subject',
        href: '/subjek/1',
        color: 'bg-amber-200 text-amber-600',
    },
    {
        icon: 'fa-solid fa-clipboard-user',
        name: 'admin',
        href: '/admin/1',
        color: 'bg-lime-200 text-lime-600',
    }
]

onMounted(() => {
    getLibrary()
})
</script>