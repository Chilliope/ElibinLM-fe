<template>
    <div class="w-full min-h-screen flex flex-col gap-4 justify-center items-center px-8">
        <div class="flex flex-col items-center">
            <img :src="'elibin.png'" alt="elibin" class="w-24 lg:w-32">
            <h4 class="text-xl font-medium lg:text-2xl">E-Library Information</h4>
        </div>
        <div class="bg-white w-full lg:w-1/4 h-max shadow-sm rounded-3xl overflow-hidden">
            <div class="flex justify-center py-3">
                <h5 class="font-medium text-2xl lg:text-3xl text-slate-600">Login</h5>
            </div>
            <hr class="border-slate-300">
            <form @submit.prevent="doSignin()" class="px-3 py-2 flex flex-col gap-3">
                <div class="flex flex-col gap-1">
                    <label for="username" class="text-slate-600">Username</label>
                    <input required type="text" placeholder="Username" id="username" class="border border-slate-400 px-3 py-1 rounded-lg" v-model="forms.username">
                </div>
                <div class="flex flex-col gap-1">
                    <label for="password" class="text-slate-600">Password</label>
                    <input required type="password" placeholder="Password" id="password" class="border border-slate-400 px-3 py-1 rounded-lg" v-model="forms.password">
                </div>
                <div class="flex justify-end">
                    <button class="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-400 hover:duration-150">Login</button>
                </div>
            </form>
            <div class="w-full flex justify-center mt-4">
                <small class="text-slate-400">Librarian Management</small>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import useAuth from '../../service/auth'

const { signin } = useAuth()

const forms = reactive({
    username: '',
    password: ''
})

function doSignin() {
    signin({...forms})
}
</script>