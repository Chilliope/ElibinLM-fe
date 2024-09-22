<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500"
        >dashboard</router-link
      >/
      <router-link to="/anggota" class="capitalize text-blue-500"
        >anggota</router-link
      >/
      <router-link to="/tambah-anggota" class="capitalize text-blue-500"
        >tambah anggota</router-link
      >/
    </div>
    <div>
      <h1 class="text-2xl font-medium lg:text-3xl">Tambah Anggota</h1>
      <p class="capitalize lg:text-lg">selamat datang di tambah anggota</p>
    </div>
  </div>
  <div class="bg-white w-full h-max my-8 rounded-3xl px-4 py-3 shadow-sm">
    <form
      class="capitalize flex flex-col gap-3 w-full lg:flex-row"
      enctype="multipart/form-data"
      @submit.prevent="doCreate()"
    >
      <div class="flex flex-col gap-3 lg:w-1/2">
        <div class="flex flex-col">
          <label for="nis" class="font-medium text-slate-500">NIS</label>
          <input
            type="number"
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            placeholder="NIS"
            id="nis"
            v-model="forms.NIS"
          />
        </div>
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
          <label for="tempat_lahir" class="font-medium text-slate-500"
            >tempat lahir</label
          >
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            placeholder="Tempat Lahir"
            id="tempat_lahir"
            v-model="forms.place_of_birth"
          />
        </div>
        <div class="flex flex-col">
          <label for="tanggal_lahir" class="font-medium text-slate-500"
            >tanggal lahir</label
          >
          <input
            type="date"
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            placeholder="Tanggal Lahir"
            id="tanggal_lahir"
            v-model="forms.date_of_birth"
          />
        </div>
      </div>
      <div class="flex flex-col gap-3 lg:w-1/2">
        <div class="flex flex-col">
          <label for="nomor_telepon" class="font-medium text-slate-500"
            >nomor telepon</label
          >
          <input
            type="number"
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            placeholder="Nomor Telepon"
            id="nomor_telepon"
            v-model="forms.phone"
          />
        </div>
        <div class="flex flex-col">
          <label for="alamat" class="font-medium text-slate-500">alamat</label>
          <textarea
            type="text"
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            placeholder="Alamat"
            id="alamat"
            v-model="forms.address"
          ></textarea>
        </div>
        <div class="flex flex-col w-full">
          <label for="foto_anggota" class="font-medium text-slate-500"
            >foto anggota</label
          >
          <div class="bg-white rounded-lg w-full flex">
            <input
              type="file"
              class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400 w-full"
              id="foto_anggota"
              @change="handleFileUpload"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <label for="major" class="font-medium text-slate-500">jurusan</label>
          <select
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            id="major"
            v-model="forms.major_id"
          >
            <option v-for="major in major" :key="major.id" :value="major.id">{{ major.major }}</option>
          </select>
        </div>
        <div class="flex flex-row justify-between pb-8 capitalize">
          <router-link
            to="/anggota/1"
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
import { ref, onMounted } from 'vue'
import useMember from '../../service/data/member'
import useMajor from '../../service/data/major'

const { major, getAllMajor } = useMajor()
const { create } = useMember()

const forms = ref({
  NIS: '',
  name: '',
  place_of_birth: '',
  date_of_birth: '',
  phone: '',
  address: '',
  major_id: '',
  image: null
})

onMounted(() => {
  getAllMajor()
})

function handleFileUpload(event) {
  forms.value.image = event.target.files[0]
}

function doCreate() {
  const formData = new FormData()
  for (const key in forms.value) {
      formData.append(key, forms.value[key])
  }
  create(formData)
}
</script>
