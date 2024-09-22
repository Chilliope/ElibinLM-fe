<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500"
        >dashboard</router-link
      >/
      <router-link to="/koleksi-buku" class="capitalize text-blue-500">Koleksi Buku</router-link>/
      <router-link to="/detail-koleksi/1/1" class="capitalize text-blue-500"
        >detail buku</router-link
      >/
    </div>
    <div>
      <h1 class="text-2xl font-medium lg:text-3xl">Tambah Stok Buku</h1>
      <p class="capitalize lg:text-lg">selamat datang di tambah stok buku</p>
    </div>
  </div>
  <div class="bg-white w-full h-max my-8 rounded-3xl px-4 py-3 shadow-sm">
    <form
      @submit.prevent="doUpdate()"
      class="capitalize flex flex-col gap-3 w-full lg:flex-row"
    >
      <div class="flex flex-col gap-3 w-full">
        <div class="flex flex-col">
          <label for="isbn" class="font-medium text-slate-500">ISBN</label>
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            placeholder="ISBN"
            id="isbn"
            required
            v-model="subBook.ISBN"
          />
        </div>
        <div class="flex flex-row justify-between pb-8 capitalize">
          <router-link
            to="/detail-koleksi/1/1"
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
import { reactive, onMounted } from 'vue'
import useSubBook from '../../service/data/subBook'

const forms = reactive({
    ISBN: '',
    book_spine_number: ''
})

const { show, subBook, update } = useSubBook()

onMounted(() => {
    show()
})

function doUpdate() {
    update(this.subBook)
}
</script>
