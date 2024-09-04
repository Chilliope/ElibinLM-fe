<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500"
        >dashboard</router-link
      >/
      <router-link to="/koleksi-buku" class="capitalize text-blue-500"
        >koleksi buku</router-link
      >/
      <router-link to="/edit-buku" class="capitalize text-blue-500"
        >edit koleksi</router-link
      >/
    </div>
    <div>
      <h1 class="text-2xl font-medium lg:text-3xl">Edit Koleksi</h1>
      <p class="capitalize lg:text-lg">selamat datang di edit koleksi</p>
    </div>
  </div>
  <div class="bg-white w-full h-max my-8 rounded-3xl px-4 py-3 shadow-sm">
    <form @submit.prevent="doUpdate()" class="capitalize flex flex-col gap-3 w-full lg:flex-row" enctype="multipart/form-data">
      <div class="flex flex-col gap-3 lg:w-1/2">
        <div class="flex flex-col">
          <label for="judul" class="font-medium text-slate-500">judul</label>
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400"
            placeholder="judul"
            id="judul"
            v-model="book.title"
          />
        </div>
        <div class="flex flex-col">
          <label for="penulis" class="font-medium text-slate-500"
            >penulis</label
          >
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400"
            placeholder="penulis"
            id="penulis"
            v-model="book.writer"
          />
        </div>
        <div class="flex flex-col">
          <label for="penerbit" class="font-medium text-slate-500"
            >penerbit</label
          >
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400"
            placeholder="penerbit"
            id="penerbit"
            v-model="book.publisher"
          />
        </div>
        <div class="flex flex-col">
          <label for="ISBN" class="font-medium text-slate-500">ISBN</label>
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400"
            placeholder="ISBN"
            id="ISBN"
            v-model="book.ISBN"
          />
        </div>
        <div class="flex flex-col">
          <label for="tahun_terbit" class="font-medium text-slate-500"
            >tahun terbit</label
          >
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400"
            placeholder="tahun terbit"
            id="tahun_terbit"
            v-model="book.publication_year"
          />
        </div>
        <div class="flex flex-col">
          <label for="nomor_punggung_buku" class="font-medium text-slate-500"
            >nomor punggung buku</label
          >
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400"
            placeholder="nomor punggung buku"
            id="nomor_punggung_buku"
            v-model="book.book_spine_number"
          />
        </div>
      </div>
      <div class="flex flex-col gap-3 lg:w-1/2">
        <div class="flex flex-col">
          <label for="jumlah_halaman" class="font-medium text-slate-500"
            >jumlah halaman</label
          >
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400"
            placeholder="jumlah halaman"
            id="jumlah_halaman"
            v-model="book.page_size"
          />
        </div>
        <div class="flex flex-col">
          <label for="keterangan" class="font-medium text-slate-500"
            >keterangan</label
          >
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400"
            placeholder="keterangan"
            id="keterangan"
            v-model="book.information"
          />
        </div>
        <div class="flex flex-col w-full">
          <label for="foto_buku" class="font-medium text-slate-500"
            >foto buku</label
          >
          <div class="bg-white border px-3 py-2 rounded-lg w-full h-max flex flex-col gap-3 shadow-sm">
            <input
              type="file"
              @change="handleFileUpload"
              class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400 w-full"
            />
            <img :src="'/storage/' + book.image" :alt="book.title" class="w-60 h-60 object-cover rounded-lg">
          </div>
        </div>
        <div class="flex flex-col">
          <label for="stok" class="font-medium text-slate-500">stok</label>
          <input
            type="number"
            class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400"
            placeholder="stok"
            id="stok"
            v-model="book.stock"
          />
        </div>
        <div class="flex flex-col">
          <label for="rak" class="font-medium text-slate-500">rak</label>
          <select
            class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400"
            id="rak"
            v-model="book.rack_id"
          >
            <option :value="rack.id">{{ rack.rack }}</option>
            <option v-for="rack in rack" :key="rack.id" :value="rack.id">{{ rack.rack }}</option>
          </select>
        </div>
        <div class="flex flex-row justify-between pb-8 capitalize">
          <router-link
            to="/koleksi-buku/1"
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
import useBook from '../../service/data/book'
import useRack from '../../service/data/rack'

const { book, show, update } = useBook()
const { rack, getAllRack } = useRack()

// Prepare to hold the file upload
const selectedFile = ref(null)
 
onMounted(() => {
    show() // show detail buku
    getAllRack()
})

function handleFileUpload(event) {
    selectedFile.value = event.target.files[0]
}

function doUpdate() {
    const formData = new FormData()
    
    // Append the existing book data to the formData
    for (const key in book.value) {
        formData.append(key, book.value[key])
    }
    
    // If a new file is selected, append it to formData
    if (selectedFile.value) {
        formData.append('image', selectedFile.value)
    }

    update(formData)
}
</script>
