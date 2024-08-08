<template>
    <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
        <div class="flex">
            <router-link to="/dashboard" class="capitalize text-blue-500">dashboard</router-link>/
        </div>
        <div>
            <h1 class="text-2xl font-medium lg:text-3xl">Hai Erlang</h1>
            <p class="capitalize lg:text-lg">selamat datang di dashboard</p>
        </div>
    </div>
    <div class="flex flex-col items-center">
        <div class="bg-blue-500 w-5/6 h-12 rounded-3xl relative top-[40px] flex justify-center items-center text-white text-lg font-bold -z-10">
            SMKN 2 Banjarmasin
        </div>
        <div class="bg-white shadow-sm w-full h-max mt-3 mb-8 rounded-3xl flex flex-col justify-center items-center -z-20">
            <div></div>
            <div class="pb-8 mt-10">
                <img :src="'skenda.png'" alt="logo" class="w-32">
            </div>
        </div>
    </div>
    <DashboardItem></DashboardItem>
</template>

<script setup>
import DashboardItem from '../components/DashboardItem.vue'


</script>