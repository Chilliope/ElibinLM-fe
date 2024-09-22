<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500">
        dashboard
      </router-link>
      /
      <router-link to="/koleksi-buku/1" class="capitalize text-blue-500">
        Koleksi Buku
      </router-link>
      /
      <router-link to="/detail-koleksi/1" class="capitalize text-blue-500">
        Detail Buku
      </router-link>
      /
    </div>
    <div>
      <h1 class="text-2xl font-medium lg:text-3xl">Table Buku</h1>
    </div>
  </div>
  <div class="flex flex-col items-center mt-8">
    <div class="bg-white w-full h-12 rounded-xl overflow-hidden shadow-sm">
      <form class="flex items-center">
        <input
          type="text"
          placeholder="Cari ISBN..."
          class="w-full h-12 px-6 text-lg outline-none"
          v-model="search"
        />
      </form>
    </div>
    <div class="mt-8 flex w-full gap-4 lg:gap-8">
      <button
        class="bg-blue-500 w-max h-max px-6 py-2 rounded-lg text-white hover:bg-blue-400 hover:duration-150"
        @click="goToPrintQr"
      >
        Cetak QrCode
      </button>
      <button
        class="bg-red-500 w-max h-max px-6 py-2 rounded-lg text-white hover:bg-red-400 hover:duration-150"
        @click="goToPrintNumber"
      >
        Cetak Nomor Punggung
      </button>
      <router-link :to="'/tambah-stok/' + route.params.id" class="bg-green-500 text-white rounded-lg px-6 py-2 hover:bg-green-400 hover:duration-150">Tambah Stok</router-link>
    </div>
    <table class="my-4 table-auto w-full text-center">
      <thead class="bg-blue-500 text-white">
        <tr class="text-sm lg:text-base">
          <th>Pilih</th>
          <th>ISBN</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b h-14"
          v-for="subBook in subBook"
          :key="subBook.id"
        >
          <td>
            <input
              type="checkbox"
              :value="subBook"
              @change="toggleCheckbox(subBook)"
              :checked="selectedSubBook.some(selectedSubBook => selectedSubBook.id === subBook.id)"
            />
          </td>
          <td class="text-xs lg:text-base">{{ subBook.ISBN }}</td>
          <td class="flex justify-center items-center gap-3 py-2">
            <router-link :to="'/edit-stok/' + subBook.id" class="bg-yellow-500 text-white rounded-lg px-4 py-2 hover:bg-yellow-400 hover:duration-150">Edit</router-link>
            <form @submit.prevent="destroy(subBook.id)">
              <button class="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-400 hover:duration-150">Hapus</button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="flex justify-end">
    <div
      class="bg-white w-full lg:w-1/2 h-max p-3 rounded-full flex justify-between items-center"
    >
      <!-- Tombol Previous -->
      <div>
        <router-link
          :to="'' + (parseInt(route.params.page) - 1)"
          :class="{
            'text-blue-500': parseInt(route.params.page) > 1,
            'text-gray-500 pointer-events-none':
              parseInt(route.params.page) <= 1,
          }"
        >
          <i class="fa-solid fa-circle-chevron-left"></i>
        </router-link>
      </div>

      <!-- Pagination Links -->
      <div>
        <ul class="flex gap-4">
          <li v-for="page in totalPage" :key="page">
            <router-link
              :to="'' + page"
              :class="{
                'font-bold text-blue-500': parseInt(route.params.page) === page,
                'text-blue-500': parseInt(route.params.page) !== page,
              }"
            >
              {{ page }}
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Tombol Next -->
      <div>
        <router-link
          :to="'' + (parseInt(route.params.page) + 1)"
          :class="{
            'text-blue-500': parseInt(route.params.page) < totalPage,
            'text-gray-500 pointer-events-none':
              parseInt(route.params.page) >= totalPage,
          }"
        >
          <i class="fa-solid fa-circle-chevron-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useSubBook from '../../service/data/subBook'

const route = useRoute()
const router = useRouter()
const { subBook, totalPage, getSubBook, destroy } = useSubBook()
const selectedSubBook = ref([]); // Array untuk menyimpan anggota yang dipilih

onMounted(() => {
  getSubBook()
  const storedSubBook = JSON.parse(localStorage.getItem('s')) || [];
  selectedSubBook.value = storedSubBook;
})

const toggleCheckbox = (subBook) => {
  const index = selectedSubBook.value.findIndex(m => m.id === subBook.id);
  if (index > -1) {
    // Remove from s
    selectedSubBook.value.splice(index, 1);
  } else {
    // Add to s
    selectedSubBook.value.push(subBook);
  }
  // Update localStorage
  localStorage.setItem('selectedSubBook', JSON.stringify(selectedSubBook.value));
};

const goToPrintQr = () => {
  if (selectedSubBook.value.length > 0) {
    router.push({
      path: '/print-qr',
      query: { subBooks: JSON.stringify(selectedSubBook.value) }
    });

    // Clear selected subBooks from localStorage
    localStorage.removeItem('selectedSubBook');
  } else {
    alert('Pilih buku terlebih dahulu!');
  }
};

const goToPrintNumber = () => {
  if (selectedSubBook.value.length > 0) {
    const subBookWithBook = selectedSubBook.value.map(subBook => ({
      ...subBook,
      subBook: subBook.book // Ensure that major is included
    }));

    router.push({
      path: '/print-nomor',
      query: { subBooks: JSON.stringify(subBookWithBook) }
    });

    // Clear selected subBooks from localStorage
    localStorage.removeItem('selectedSubBook');
  } else {
    alert('Pilih buku terlebih dahulu!');
  }
};
</script>
