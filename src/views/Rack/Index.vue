<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500"
        >dashboard</router-link
      >/
      <router-link to="/rak" class="capitalize text-blue-500">rak</router-link>/
    </div>
    <div>
      <h1 class="text-2xl font-medium lg:text-3xl">Rak Buku</h1>
      <p class="capitalize lg:text-lg">selamat datang di rak buku</p>
    </div>
  </div>
  <div class="flex flex-col items-center">
    <div
      class="bg-blue-500 w-full h-44 rounded-3xl mt-8 shadow-sm flex flex-col gap-3 px-8 py-4 text-white -z-20"
    >
      <div class="flex flex-col gap-3">
        <h6 class="capitalize lg:text-lg">total rak buku</h6>
        <div class="text-6xl">536</div>
      </div>
    </div>
    <div
      ref="bookNav"
      class="bg-white w-4/5 h-20 rounded-3xl shadow-sm relative -top-10 flex flex-row items-center justify-center z-0"
    >
      <router-link
        to="/tambah-rak"
        class="flex flex-col items-center lg:flex-row lg:gap-3 lg:bg-white lg:px-3 lg:py-2 lg:rounded-xl lg:shadow-customBoxShadow"
      >
        <div
          class="bg-green-200 text-green-600 grid place-content-center text-2xl w-10 h-10 rounded-full"
        >
          <i class="fa-solid fa-plus"></i>
        </div>
        <small class="text-slate-600">Tambah Rak</small>
      </router-link>
    </div>
    <div class="bg-white w-full h-12 rounded-xl overflow-hidden shadow-sm">
      <form class="flex items-center">
        <input
          type="text"
          placeholder="Cari Rak Buku..."
          class="w-full h-12 px-6 text-lg outline-none"
          v-model="search"
        />
      </form>
    </div>
    <table class="my-4 table-auto w-full text-center">
      <thead class="bg-blue-500 text-white">
        <tr class="text-sm lg:text-base">
          <th>Rak</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b h-14" v-for="rack in rack" :key="rack.id">
          <td class="text-xs lg:text-base">{{ rack.rack }}</td>
          <td class="flex gap-2 justify-center items-center h-14">
            <router-link
              :to="'/edit-rak/' + rack.id"
              class="bg-yellow-500 text-white rounded-lg w-max h-max px-2 py-1 lg:px-3 lg:py-2 text-base lg:text-xl hover:bg-yellow-400 hover:duration-150"
              ><i class="fa-regular fa-pen-to-square"></i
            ></router-link>
            <form @submit.prevent="destroy(rack.id)">
              <button
                class="bg-red-500 text-white rounded-lg w-max h-max px-2 py-1 lg:px-3 lg:py-2 text-base lg:text-xl hover:bg-red-400 hover:duration-150"
              >
                <i class="fa-solid fa-trash"></i>
              </button>
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
import { onMounted, watch, ref } from "vue";
import useRack from "../../service/data/rack";
import { useRoute, useRouter } from "vue-router";

const { rack, getRack, destroy, totalPage } = useRack();
const route = useRoute();

const search = ref('');


// Watch perubahan route.params.page
watch(
  () => route.params.page,
  () => {
    getRack(search.value)
  }
);

watch(search, (newSearch) => {
  getRack(newSearch); // Fetch data in real-time as the search input changes
});

onMounted(() => {
  getRack(search.value)
});
</script>
