<template>
  <form @submit.prevent="doStore()" class="bg-white w-full h-max rounded-2xl shadow-sm pb-10">
    <div class="border-b border-slate-300 px-3 py-2 text-xl">
      Pre-Peminjaman
    </div>
    <div class="w-full px-3 py-2 flex flex-col gap-3">
      <div class="flex flex-col lg:flex-row gap-3">
        <div class="w-full lg:w-1/2">
          <label for="name">Nama Peminjam</label>
          <input
            id="name"
            v-model="forms.name"
            type="text"
            placeholder="Nama Peminjam"
            class="border border-slate-400 outline-none px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div class="w-full lg:w-1/2">
          <label for="class">Kelas</label>
          <select
            id="class"
            v-model="forms.class_id"
            class="border border-slate-400 outline-none px-3 py-2 w-full rounded-lg"
          >
            <option v-for="item in classData" :key="item.id" :value="item.id">{{ item.class_fix }}</option>
          </select>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-3">
        <div class="w-full lg:w-1/2">
          <label for="date_borrow">Tanggal Peminjaman</label>
          <input
            id="date_borrow"
            v-model="forms.date_of_borrowing"
            type="date"
            class="border border-slate-400 outline-none px-3 py-2 w-full rounded-lg"
          />
        </div>
        <div class="w-full lg:w-1/2">
          <label for="date_return">Tanggal Pengembalian</label>
          <input
            id="date_return"
            v-model="forms.date_of_return"
            type="date"
            class="border border-slate-400 outline-none px-3 py-2 w-full rounded-lg"
          />
        </div>
      </div>
    </div>
    <div class="mt-3 px-3 py-2 grid grid-cols-1 gap-3 lg:grid-cols-2">
      <div
        class="bg-white w-full h-max shadow-customBoxShadow rounded-lg flex flex-row p-3 gap-3"
        v-for="book in bookGate"
        :key="book.id"
      >
        <div class="w-1/2 h-max">
          <img
            :src="'/storage/' + book.book.image"
            alt="buku"
            class="w-24 h-24 object-cover rounded-xl lg:w-32 lg:h-32"
          />
        </div>
        <div class="lg:w-full">
          <h6 class="capitalize">{{ book.book.title }}</h6>
          <small class="text-xs text-slate-500"
            >{{ book.book.information }}</small
          >
          <div class="mt-2">
            <input
              type="number"
              class="border border-slate-400 rounded-lg px-3 py-1 outline-none"
              placeholder="Jumlah Buku"
              v-model="book.total"
              min="1"
              @change="update(book.id, book.total)"
            />
          </div>
          <div class="flex justify-end mt-3">
            <form @submit.prevent="cancel(book.id)">
                <button
                  class="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-400 hover:duration-150"
                >
                  Hapus
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="px-3 py-2 flex justify-end">
      <button
        class="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-400 hover:duration-150"
      >
        Simpan
      </button>
    </div>
  </form>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import useClass from '../../service/data/class'
import useGate from '../../service/data/gate'
import useBorrow from '../../service/data/borrow'

const { store } = useBorrow()
const { classData, getAllClass } = useClass()
const { bookGate, getAllBook, update, cancel } = useGate()
const forms = reactive({
    name: '',
    class_id: '',
    date_of_borrowing: '',
    date_of_return: ''
})

onMounted(() => {
    getAllClass()
    getAllBook()
})

function doStore() {
    store({...forms})
}
</script>