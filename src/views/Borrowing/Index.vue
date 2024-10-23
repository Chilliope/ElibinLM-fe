<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500"
        >dashboard</router-link
      >/
      <router-link to="/peminjaman/1" class="capitalize text-blue-500"
        >peminjaman</router-link
      >/
    </div>
    <div>
      <h1 class="capitalize text-2xl font-medium lg:text-3xl">
        peminjaman koleksi
      </h1>
      <p class="capitalize lg:text-lg">selamat datang di peminjaman koleksi</p>
    </div>
  </div>
  <div class="flex flex-col items-center">
    <div
      class="bg-blue-500 w-full h-44 rounded-3xl mt-8 shadow-sm flex flex-col gap-3 px-8 py-4 text-white -z-20"
    >
      <div class="flex flex-col gap-3">
        <h6 class="capitalize lg:text-lg">total peminjaman</h6>
        <div class="text-6xl">{{ count }}</div>
      </div>
    </div>
    <div
      ref="bookNav"
      class="bg-white w-4/5 h-20 rounded-3xl shadow-sm relative -top-10 flex flex-row items-center justify-evenly lg:justify-center lg:gap-3 z-0"
    >
      <router-link
        to="/pre-peminjaman"
        class="flex flex-col items-center lg:flex-row lg:gap-3 lg:bg-white lg:px-3 lg:py-2 lg:rounded-xl lg:shadow-customBoxShadow"
      >
        <div
          class="bg-green-200 text-green-600 grid place-content-center text-2xl w-10 h-10 rounded-full"
        >
          <i class="fa-solid fa-address-book"></i>
        </div>
        <small class="text-slate-600">Pre-Peminjaman</small>
      </router-link>
      <span
        class="w-6 h-6 bg-red-500 rounded-full relative right-8 top-6 text-white text-xs place-content-center font-medium border-2 border-white hidden lg:grid"
        >{{ totalGate }}</span
      >
      <span
        class="w-6 h-6 bg-red-500 rounded-full relative right-16 text-white text-xs place-content-center font-medium border-2 border-white grid lg:hidden"
        >{{ totalGate }}</span
      >
      <router-link
        to="/statistik-peminjaman"
        class="flex flex-col items-center lg:flex-row lg:gap-3 lg:bg-white lg:px-3 lg:py-2 lg:rounded-xl lg:shadow-customBoxShadow"
      >
        <div
          class="bg-yellow-200 text-yellow-600 grid place-content-center text-2xl w-10 h-10 rounded-full"
        >
          <i class="fa-solid fa-chart-simple"></i>
        </div>
        <small class="text-slate-600 text-xs">Statistik</small>
      </router-link>
    </div>
    <div
      class="bg-white w-full h-max rounded-xl overflow-hidden shadow-sm my-6 p-3"
    >
      <form
        class="w-full flex flex-col gap-3"
        @submit.prevent="handleSearch"
      >
      <div class="flex flex-col lg:flex-row gap-3">
        <div class="w-full lg:w-1/2">
          <label for="fromDate">Dari Tanggal</label>
          <input
            type="date"
            v-model="fromDate"
            class="w-full h-10 px-6 text-lg outline-none border border-slate-400 rounded-xl"
          />
        </div>
        <div class="w-full lg:w-1/2">
          <label for="toDate">Sampai Tanggal</label>
          <input
            type="date"
            v-model="toDate"
            class="w-full h-10 px-6 text-lg outline-none border border-slate-400 rounded-xl"
          />
        </div>
        <div class="flex items-end justify-end h-16">
          <button
            class="w-max bg-blue-500 text-white px-4 h-10 rounded-xl mr-4"
          >
            Cari
          </button>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-3">
        <router-link v-if="fromDate && toDate" :to="'/print-laporan/' + fromDate + '/' + toDate" class="bg-red-500  text-white px-6 py-2 rounded-lg hover:bg-red-400 hover:duration-150">Print Laporan</router-link>
        <router-link v-else :to="'/print-laporan/'" class="bg-red-500  text-white px-6 py-2 rounded-lg hover:bg-red-400 hover:duration-150">Print Laporan</router-link>
      </div>
      </form>
    </div>
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div v-for="(item, code) in borrow" :key="code">
        <div class="bg-white w-max h-max px-3 py-2 rounded-t-xl flex gap-8">
          <form @submit.prevent="destroy(code)" class="">
            <button
              class="text-red-500 text-xl hover:text-red-400 hover:duration-150"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </form>
          <form @submit.prevent="borrowReturn(code)" class="">
            <button
              class="text-green-500 text-xl hover:text-green-400 hover:duration-150"
            >
              <i class="fa-solid fa-square-check"></i>
            </button>
          </form>
        </div>
        <div class="bg-white px-6 py-2 shadow-sm rounded-b-xl rounded-r-xl">
          <div
            class="bg-red-500 w-full h-max rounded-xl text-white px-4 pt-2 pb-4"
            v-if="today >= item.date_return && item.status == 'dipinjam'"
          >
            <div class="flex flex-row justify-between">
              <div>
                <div class="uppercase text-xl font-bold">No {{ code }}</div>
                <div class="uppercase">
                  <h6>{{ item.member.name }}</h6>
                  <h5>{{ item.member.major }}</h5>
                </div>
                <ul
                  class="list-disc px-8"
                >
                  <li v-for="book in item.books" :key="book">{{ book.book_title }}({{ item.total }})</li>
                </ul>
              </div>
              <div>
                <span class="capitalize"
                  >{{ formatDate(item.date_borrow) }},
                  {{ item.date_borrow }}</span
                >
              </div>
            </div>
          </div>
          <div
            class="bg-green-500 w-full h-max rounded-xl text-white px-4 pt-2 pb-4"
            v-else-if="item.status === 'dikembalikan'"
          >
            <div class="flex flex-row justify-between">
              <div>
                <div class="uppercase text-xl font-bold">No {{ code }}</div>
                <div class="uppercase">
                  <h6>{{ item.member.name }}</h6>
                  <h5>{{ item.member.major }}</h5>
                </div>
                <ul
                  class="list-disc px-8"
                  v-for="book in item.books"
                  :key="book"
                >
                  <li>{{ book.title }}({{ item.total }})</li>
                </ul>
              </div>
              <div>
                <span class="capitalize"
                  >{{ formatDate(item.date_borrow) }},
                  {{ item.date_borrow }}</span
                >
              </div>
            </div>
          </div>
          <div
            class="bg-blue-500 w-full h-max rounded-xl text-white px-4 pt-2 pb-4"
            v-else
          >
            <div class="flex flex-row justify-between">
              <div>
                <div class="uppercase text-xl font-bold">No {{ code }}</div>
                <div class="uppercase">
                  <h6>{{ item.member.name }}</h6>
                  <h5>{{ item.member.major }}</h5>
                </div>
                <ul
                  class="list-disc px-8"
                  v-for="book in item.books"
                  :key="book"
                >
                  <li>{{ book.title }}({{ item.total }})</li>
                </ul>
              </div>
              <div>
                <span class="capitalize"
                  >{{ formatDate(item.date_borrow) }},
                  {{ item.date_borrow }}</span
                >
              </div>
            </div>
          </div>
          <span class="text-slate-500">Pengembalian: {{ item.date_return }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-end mt-8">
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
import { onMounted, watch, ref } from "vue";
import useBorrow from "../../service/data/borrow";
import { useRoute, useRouter } from "vue-router";
import useGate from "../../service/data/gate";

const { getBorrow, borrow, totalPage, count, destroy, borrowReturn } = useBorrow();
const { getAllBook, totalGate } = useGate()
const route = useRoute();
const router = useRouter();

const today = new Date().toISOString().slice(0, 10); // Mendapatkan tanggal sekarang dalam format YYYY-MM-DD

// Variabel untuk menampung nilai tanggal
const fromDate = ref('');
const toDate = ref('');

// Fungsi untuk menangani pencarian berdasarkan tanggal
function handleSearch() {
  getBorrow(fromDate.value, toDate.value);
  console.log(fromDate.value, toDate.value)
}

function formatDate(stringDate) {
  const days = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];

  const date = new Date(stringDate);
  const dayIndex = date.getDay(date);

  return days[dayIndex];
}

watch(
  () => route.params.page,
  () => {
    getBorrow(fromDate.value, toDate.value);
  }
);

onMounted(() => {
  getBorrow(fromDate.value, toDate.value);
  getAllBook();
});
</script>
