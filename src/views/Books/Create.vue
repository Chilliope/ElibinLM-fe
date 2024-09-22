<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500"
        >dashboard</router-link
      >/
      <router-link to="/koleksi-buku" class="capitalize text-blue-500"
        >koleksi buku</router-link
      >/
      <router-link to="/tambah-koleksi" class="capitalize text-blue-500"
        >tambah koleksi</router-link
      >/
    </div>
    <div>
      <h1 class="text-2xl font-medium lg:text-3xl">Tambah Koleksi</h1>
      <p class="capitalize lg:text-lg">selamat datang di tambah koleksi</p>
    </div>
  </div>
  <div class="bg-white w-full h-max my-8 rounded-3xl px-4 py-3 shadow-sm">
    <form @submit.prevent="doCreate()" enctype="multipart/form-data" class="capitalize flex flex-col gap-3 w-full lg:flex-row">
        <div class="flex flex-col gap-3 lg:w-1/2">
            <div class="flex flex-col">
                <label for="title" class="font-medium text-slate-500">judul</label>
                <input required type="text" class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400" placeholder="Judul" id="title" v-model="forms.title">
            </div>
            <div class="flex flex-col">
                <label for="writer" class="font-medium text-slate-500">penulis</label>
                <input required type="text" class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400" placeholder="Penulis" id="writer" v-model="forms.writer">
            </div>
            <div class="flex flex-col">
                <label for="publisher" class="font-medium text-slate-500">penerbit</label>
                <input required type="text" class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400" placeholder="Penerbit" id="publisher" v-model="forms.publisher">
            </div>
            <div class="flex flex-col">
                <label for="ISBN" class="font-medium text-slate-500">ISBN</label>
                <input required type="text" class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400" placeholder="ISBN" id="ISBN" v-model="forms.ISBN">
            </div>
            <div class="flex flex-col">
                <label for="publication_year" class="font-medium text-slate-500">tahun terbit</label>
                <input required type="text" class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400" placeholder="Tahun Terbit" id="publication_year" v-model="forms.publication_year">
            </div>
        </div>
        <div class="flex flex-col gap-3 lg:w-1/2">
            <div class="flex flex-col">
                <label for="page_size" class="font-medium text-slate-500">jumlah halaman</label>
                <input required type="text" class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400" placeholder="Jumlah Halaman" id="page_size" v-model="forms.page_size">
            </div>
            <div class="flex flex-col">
                <label for="information" class="font-medium text-slate-500">keterangan</label>
                <input required type="text" class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400" placeholder="Keterangan" id="information" v-model="forms.information">
            </div>
            <div class="flex flex-col w-full">
                <label for="image" class="font-medium text-slate-500">foto buku</label>
                <div class="bg-white rounded-lg w-full flex">
                    <input required type="file" @change="handleFileUpload" class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400 w-full" id="image">
                </div>
            </div>
            <div class="flex flex-col">
                <label for="rack" class="font-medium text-slate-500">rak</label>
                <select class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400" id="rack" v-model="forms.rack_id">
                    <option v-for="rack in rack" :key="rack.id" :value="rack.id">{{ rack.rack }}</option>
                </select>
            </div>
            <div class="flex flex-col">
                <label for="subject" class="font-medium text-slate-500">subjek</label>
                <select class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400" id="subject" v-model="forms.subject_id">
                    <option v-for="subject in subject" :key="subject.id" :value="subject.id">{{ subject.subject }}</option>
                </select>
            </div>
            <div class="flex flex-row justify-between pb-8 capitalize">
                <router-link to="/koleksi-buku/1" class="w-max h-max px-6 py-3 rounded-xl bg-red-500 text-white hover:bg-red-400 hover:duration-150">batal</router-link>
                <button class="w-max h-max bg-green-500 text-white hover:bg-green-400 hover:duration-150 rounded-xl px-6 py-3">Simpan</button>
            </div>
        </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import useBook from '../../service/data/book'
import useRack from '../../service/data/rack'
import useSubject from '../../service/data/subject'

const { create } = useBook()
const { rack, getAllRack } = useRack()
const { getAllSubject, subject } = useSubject()

const forms = ref({
    title: '',
    writer: '',
    publisher: '',
    ISBN: '',
    publication_year: '',
    page_size: '',
    information: '',
    image: null,
    rack_id: '',
    subject_id: ''
})

onMounted(() => {
    getAllRack()
    getAllSubject()
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
