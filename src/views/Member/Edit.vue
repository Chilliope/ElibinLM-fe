<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500"
        >dashboard</router-link
      >/
      <router-link to="/anggota" class="capitalize text-blue-500"
        >anggota</router-link
      >/
      <router-link to="/edit-anggota" class="capitalize text-blue-500"
        >edit anggota</router-link
      >/
    </div>
    <div>
      <h1 class="text-2xl font-medium lg:text-3xl">Tambah Anggota</h1>
      <p class="capitalize lg:text-lg">selamat datang di tambah anggota</p>
    </div>
  </div>
  <div class="bg-white w-full h-max my-8 rounded-3xl px-4 py-3 shadow-sm">
    <form @submit.prevent="doUpdate()" class="capitalize flex flex-col gap-3 w-full lg:flex-row" enctype="multipart/form-data">
      <div class="flex flex-col gap-3 lg:w-1/2">
        <div class="flex flex-col">
          <label for="nis" class="font-medium text-slate-500">NIS</label>
          <input
            type="number"
            class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400"
            placeholder="NIS"
            id="nis"
            v-model="member.NIS"
          />
        </div>
        <div class="flex flex-col">
          <label for="nama" class="font-medium text-slate-500">nama</label>
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            placeholder="Nama"
            id="nama"
            v-model="member.name"
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
            v-model="member.place_of_birth"
          />
        </div>
        <div class="flex flex-col">
          <label for="tanggal_lahir" class="font-medium text-slate-500"
            >tanggal lahir</label
          >
          <input
            type="date"
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            id="tanggal_lahir"
            v-model="member.date_of_birth"
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
            v-model="member.phone"
          />
        </div>
        <div class="flex flex-col">
          <label for="alamat" class="font-medium text-slate-500">alamat</label>
          <textarea
            type="text"
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            placeholder="Alamat"
            id="alamat"
            v-model="member.address"
          ></textarea>
        </div>
        <div class="flex flex-col w-full">
          <label for="foto_anggota" class="font-medium text-slate-500"
            >foto anggota</label
          >
          <div class="bg-white shadow-sm border rounded-lg w-full h-max flex flex-col gap-3 px-3 py-2">
            <input
              type="file"
              class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400 w-full"
              @change="handleFileUpload"
            />
            <img :src="'/storage/' + member.image" :alt="member.nis" class="object-cover w-32 rounded-full border border-slate-500">
          </div>
        </div>
        <div class="flex flex-col">
          <label for="kelas" class="font-medium text-slate-500">kelas</label>
          <select
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            id="kelas"
            v-model="member.class_id"
          >
            <option v-for="classData in classData" :key="classData.id" :value="classData.id">{{ classData.class_fix }}</option>
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
import { onMounted, ref } from 'vue'
import useClass from '../../service/data/class'
import useMember from '../../service/data/member'

const { member, show, update } = useMember()
const { classData, getAllClass } = useClass()

// Prepare to hold the file upload
const selectedFile = ref(null)

onMounted(() => {
  show()
  getAllClass()
})

function handleFileUpload(event) {
    selectedFile.value = event.target.files[0]
}

function doUpdate() {
  const formData = new FormData()
    
    // Append the existing book data to the formData
    for (const key in member.value) {
        formData.append(key, member.value[key])
    }
    
    // If a new file is selected, append it to formData
    if (selectedFile.value) {
        formData.append('image', selectedFile.value)
    }

    update(formData)
}
</script>