<template>
    <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
        <div class="flex">
            <router-link to="/dashboard" class="capitalize text-blue-500">dashboard</router-link>/
        </div>
        <div>
            <h1 class="text-2xl font-medium lg:text-3xl">Hai {{ user.username }}</h1>
            <p class="capitalize lg:text-lg">selamat datang di dashboard</p>
        </div>
    </div>
    <div class="flex flex-col items-center">
        <div class="bg-blue-500 w-5/6 h-12 rounded-3xl relative top-[40px] flex justify-center items-center text-white text-lg font-bold -z-10">
            {{ library.library }}
        </div>
        <div class="bg-white shadow-sm w-full h-max mt-3 mb-8 rounded-3xl flex flex-col justify-center items-center -z-20">
            <div></div>
            <div class="pb-8 mt-10">
                <img v-if="library.image" :src="'/storage/' + library.image" alt="logo" class="w-32">
            </div>
        </div>
    </div>
    <DashboardItem></DashboardItem>
</template>

<script setup>
import { onMounted } from 'vue'
import DashboardItem from '../components/DashboardItem.vue'
import useAuth from '../service/auth'
import useLibrary from '../service/data/library'

const { user, authUser } = useAuth()
const { library, getLibrary } = useLibrary()

onMounted(() => {
    authUser()
    getLibrary()
})
</script>