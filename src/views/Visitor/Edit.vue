<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500"
        >dashboard</router-link
      >/
      <router-link to="/pengunjung" class="capitalize text-blue-500"
        >pengunjung</router-link
      >/
      <router-link to="/edit-anggota" class="capitalize text-blue-500"
        >edit pengunjung</router-link
      >/
    </div>
    <div>
      <h1 class="text-2xl font-medium lg:text-3xl">Edit Pengunjung</h1>
      <p class="capitalize lg:text-lg">selamat datang di edit pengunjung</p>
    </div>
  </div>
  <div class="bg-white w-full h-max my-8 rounded-3xl px-4 py-3 shadow-sm">
    <form @submit.prevent="doUpdate()" class="capitalize flex flex-col gap-3 w-full">
      <div class="flex flex-col gap-3">
        <div class="flex flex-col">
          <label for="nama" class="font-medium text-slate-500">nama</label>
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400"
            placeholder="nama"
            v-model="visitor.name"
          />
        </div>
        <div class="flex flex-col">
          <label for="major" class="font-medium text-slate-500">jurusan</label>
          <select
            class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400"
            id="major"
            v-model="visitor.major_id"
          >
            <option v-for="major in major" :key="major.id" :value="major.id">{{ major.major }}</option>
          </select>
        </div>
        <div class="flex flex-col">
          <label for="keterangan" class="font-medium text-slate-500"
            >keterangan</label
          >
          <select
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            id="keterangan"
            v-model="visitor.role"
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
import { onMounted } from 'vue'
import useVisitor from '../../service/data/visitor'
import useMajor from '../../service/data/major'

const { major, getAllMajor } = useMajor()
const { visitor, show, update } = useVisitor()

onMounted(() => {
  getAllMajor()
  show()
})

function doUpdate() {
  update(this.visitor)
}
</script>
