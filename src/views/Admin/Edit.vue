<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500"
        >dashboard</router-link
      >/
      <router-link to="/admin" class="capitalize text-blue-500"
        >admin</router-link
      >/
      <router-link to="/edit-admin" class="capitalize text-blue-500"
        >edit admin</router-link
      >/
    </div>
    <div>
      <h1 class="text-2xl font-medium lg:text-3xl">Edit Admin</h1>
      <p class="capitalize lg:text-lg">selamat datang di edit admin</p>
    </div>
  </div>
  <div class="bg-white w-full h-max my-8 rounded-3xl px-4 py-3 shadow-sm">
    <form @submit.prevent="doEdit(  )" class="capitalize flex flex-col gap-3 w-full lg:flex-row">
      <div class="flex flex-col gap-3 w-full">
        <div class="flex flex-col">
          <label for="username" class="font-medium text-slate-500"
            >username</label
          >
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            placeholder="Username"
            id="username"
            v-model="admin.username"
          />
        </div>
        <div class="flex flex-col">
          <label for="name" class="font-medium text-slate-500"
            >fullname</label
          >
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            placeholder="name"
            id="name"
            v-model="admin.name"
          />
        </div>
        <div class="flex flex-col">
          <label for="password" class="font-medium text-slate-500"
            >password</label
          >
          <input
            type="password"
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            placeholder="Password"
            id="password"
            v-model="admin.password"
          />
          <small class="text-slate-400">isi password kalau anda ingin menggantinya</small>
        </div>
        <div class="flex flex-row justify-between pb-8 capitalize">
          <router-link
            to="/admin/1"
            class="w-max h-max px-6 py-3 rounded-xl bg-red-500 text-white hover:bg-red-400 hover:duration-150"
            >batal</router-link
          >
          <button
            class="w-max h-max bg-green-500 text-white hover:bg-green-400 hover:duration-150 rounded-xl px-6 py-3"
          >
            Simpan
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import useAdmin from '../../service/data/admin'

const { show, admin, edit } = useAdmin()

onMounted(() => {
  show()
})

function doEdit() {
  edit(this.admin)
}
</script>
