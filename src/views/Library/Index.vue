<template>
  <div class="bg-white w-full h-max my-8 rounded-3xl px-4 py-3 shadow-sm">
    <form @submit.prevent="doUpdate()" class="capitalize flex flex-col gap-3 w-full lg:flex-row" enctype="multipart/form-data">
      <div class="flex flex-col gap-3 w-full">
        <!-- Nama Perpustakaan -->
        <div class="flex flex-col">
          <label for="nama" class="font-medium text-slate-500">nama perpustakaan</label>
          <input type="text" class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400" placeholder="nama perpustakaan" id="nama" v-model="library.library" />
        </div>

        <!-- Kepala Perpustakaan -->
        <div class="flex flex-col">
          <label for="kepala_perpustakaan" class="font-medium text-slate-500">kepala perpustakaan</label>
          <input type="text" class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400" placeholder="kepala perpustakaan" id="kepala" v-model="library.head_librarian" />
        </div>

        <!-- Foto Perpustakaan -->
        <div class="flex flex-col w-full">
          <label for="foto_perpustakaan" class="font-medium text-slate-500">foto perpustakaan</label>
          <div class="bg-white border px-3 py-2 gap-3 shadow-sm border-slate-400 rounded-lg w-full flex flex-col">
            <input type="file" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400 w-full" @change="handleFileUpload($event, 'image')" />
            <img v-if="library.image" :src="'/storage/' + library.image" alt="image" width="100">
          </div>
        </div>

        <!-- Tanda Tangan -->
        <div class="flex flex-col w-full">
          <label for="tanda_tangan" class="font-medium text-slate-500">tanda tangan (.PNG)</label>
          <div class="bg-white border px-3 py-2 gap-3 shadow-sm border-slate-400 rounded-lg w-full flex flex-col">
            <input type="file" class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400 w-full" @change="handleFileUpload($event, 'signature')" />
            <img v-if="library.signature" :src="'/storage/' + library.signature" alt="signature" width="100">
          </div>
        </div>

        <!-- Simpan -->
        <div class="flex flex-row justify-between pb-8 capitalize">
          <button class="w-max h-max bg-green-500 text-white hover:bg-green-400 hover:duration-150 rounded-xl px-6 py-3">Simpan</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import useLibrary from '../../service/data/library'
import { ref, onMounted } from 'vue'

const { library, getLibrary, update } = useLibrary()

const selectedImage = ref(null)
const selectedSignature = ref(null)

onMounted(() => {
  getLibrary()
})

function handleFileUpload(event, type) {
  if (type === 'image') {
    selectedImage.value = event.target.files[0]
  } else if (type === 'signature') {
    selectedSignature.value = event.target.files[0]
  }
}

function doUpdate() {
  const formData = new FormData()

  // Append the existing library data to the formData
  for (const key in library.value) {
    formData.append(key, library.value[key])
  }

  // Append files to formData if they are selected
  if (selectedImage.value) {
    formData.append('image', selectedImage.value)
  }
  
  if (selectedSignature.value) {
    formData.append('signature', selectedSignature.value)
  }

  update(formData)
}
</script>
