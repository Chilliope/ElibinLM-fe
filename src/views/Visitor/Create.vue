<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500"
        >dashboard</router-link
      >/
      <router-link to="/anggota" class="capitalize text-blue-500"
        >pengunjung</router-link
      >/
      <router-link to="/tambah-anggota" class="capitalize text-blue-500"
        >tambah pengunjung</router-link
      >/
    </div>
    <div>
      <h1 class="text-2xl font-medium lg:text-3xl">Tambah pengunjung</h1>
      <p class="capitalize lg:text-lg">selamat datang di tambah pengunjng</p>
    </div>
  </div>
  <div class="bg-white w-full h-max my-8 rounded-3xl px-4 py-3 shadow-sm">
    <form @submit.prevent="doCreate()" class="capitalize flex flex-col gap-3 w-full">
      <div class="flex flex-col gap-3">
        <div class="flex flex-col">
          <label for="nama" class="font-medium text-slate-500">nama</label>
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            placeholder="Nama"
            id="nama"
            v-model="forms.name"
          />
        </div>
        <div class="flex flex-col">
          <label for="kelas" class="font-medium text-slate-500">kelas</label>
          <select
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            id="kelas"
            v-model="forms.class_id"
          >
            <option v-for="classData in classData" :key="classData.id" :value="classData.id">{{ classData.class_fix }}</option>
          </select>
        </div>
        <div class="flex flex-col">
          <label for="keterangan" class="font-medium text-slate-500"
            >keterangan</label
          >
          <select
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            id="keterangan"
            v-model="forms.role"
          >
            <option value="umum">Umum</option>
            <option value="guru">Guru</option>
            <option value="siswa">Siswa</option>
            <option value="tenaga kependidikan">Tenaga Kependidikan</option>
          </select>
        </div>
        <div class="flex flex-row justify-between pb-8 capitalize">
          <router-link
            to="/pengunjung/1"
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
import { ref, onMounted, reactive } from 'vue'
import useClass from '../../service/data/class'
import useVisitor from '../../service/data/visitor'

const { classData, getAllClass } = useClass()
const { create } = useVisitor()

const forms = reactive({
  name: '',
  class_id: '',
  role: ''
})

onMounted(() => {
  getAllClass()
})

function doCreate() {
  create({...forms})
}
</script>