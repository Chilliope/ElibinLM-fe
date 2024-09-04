<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500"
        >dashboard</router-link
      >/
      <router-link to="/perpustakaan" class="capitalize text-blue-500"
        >perpustakaan</router-link
      >
    </div>
    <div>
      <h1 class="text-2xl font-medium lg:text-3xl">Perpustakaan</h1>
      <p class="capitalize lg:text-lg">selamat datang di perpustakaan</p>
    </div>
  </div>
  <div class="bg-white w-full h-max my-8 rounded-3xl px-4 py-3 shadow-sm">
    <form @submit.prevent="doUpdate()" class="capitalize flex flex-col gap-3 w-full lg:flex-row" enctype="multipart/form-data">
      <div class="flex flex-col gap-3 w-full">
        <div class="flex flex-col">
          <label for="nama" class="font-medium text-slate-500"
            >nama perpustakaan</label
          >
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            placeholder="nama perpustakaan"
            id="nama"
            v-model="library.library"
          />
        </div>
        <div class="flex flex-col w-full">
          <label for="foto_perpustakaan" class="font-medium text-slate-500"
            >foto perpustakaan</label
          >
          <div class="bg-white border px-3 py-2 gap-3 shadow-sm border-slate-400 rounded-lg w-full flex flex-col">
            <input
              type="file"
              class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400 w-full"
              @change="handleFileUpload"
            />
            <img v-if="library.image" :src="'/storage/' + library.image" alt="image" width="100">
          </div>
        </div>
        <div class="flex flex-row justify-between pb-8 capitalize">
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
import useLibrary from '../../service/data/library'
import { ref, onMounted } from 'vue'

const { library, getLibrary, update } = useLibrary()

const selectedFile = ref(null)

onMounted(() => {
  getLibrary()
})

function handleFileUpload(event) {
    selectedFile.value = event.target.files[0]
}

function doUpdate() {
    const formData = new FormData()
    
    // Append the existing book data to the formData
    for (const key in library.value) {
        formData.append(key, library.value[key])
    }
    
    // If a new file is selected, append it to formData
    if (selectedFile.value) {
        formData.append('image', selectedFile.value)
    }

    update(formData)
}
</script>
