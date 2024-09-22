<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500">
        dashboard
      </router-link> /
      <router-link to="/anggota/1" class="capitalize text-blue-500">
        Anggota
      </router-link> /
      <router-link to="/table-anggota/1" class="capitalize text-blue-500">
        Anggota
      </router-link> /
    </div>
    <div>
      <h1 class="text-2xl font-medium lg:text-3xl">Table Anggota</h1>
    </div>
  </div>
  <div class="flex flex-col items-center mt-8">
    <div class="bg-white w-full h-12 rounded-xl overflow-hidden shadow-sm">
      <form class="flex items-center">
        <input
          type="text"
          placeholder="Cari Anggota..."
          class="w-full h-12 px-6 text-lg outline-none"
          v-model="search"
        />
      </form>
    </div>
    <div class="mt-8 flex w-full">
      <button
        class="bg-red-500 w-max h-max px-6 py-2 rounded-lg text-white hover:bg-red-400 hover:duration-150"
        @click="goToPrintPage"
      >
        Print Kartu
      </button>
    </div>
    <table class="my-4 table-auto w-full text-center">
      <thead class="bg-blue-500 text-white">
        <tr class="text-sm lg:text-base">
          <th>Aksi</th>
          <th>Nama</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b h-14"
          v-for="member in member"
          :key="member.id"
        >
          <td>
            <input
              type="checkbox"
              :value="member"
              @change="toggleCheckbox(member)"
              :checked="selectedMembers.some(selectedMember => selectedMember.id === member.id)"
            />
          </td>
          <td class="text-xs lg:text-base">{{ member.name }}</td>
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
            'text-gray-500 pointer-events-none': parseInt(route.params.page) <= 1,
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
            'text-gray-500 pointer-events-none': parseInt(route.params.page) >= totalPage,
          }"
        >
          <i class="fa-solid fa-circle-chevron-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import useMember from "../../service/data/member";

const route = useRoute();
const router = useRouter();
const { member, getMember, totalPage } = useMember();
const search = ref("");
const selectedMembers = ref([]); // Array untuk menyimpan anggota yang dipilih

// Ambil status checkbox dari local storage saat komponen dimuat
onMounted(() => {
  // Get selected members from localStorage
  const storedMembers = JSON.parse(localStorage.getItem('selectedMembers')) || [];
  selectedMembers.value = storedMembers;

  // Fetch members from API
  getMember(search.value);
});

// Watch perubahan route.params.page
watch(
  () => route.params.page,
  () => {
    getMember(search.value);
  }
);

// Watch search untuk mendapatkan data berdasarkan pencarian
watch(search, (newSearch) => {
  getMember(newSearch);
});

// Fungsi untuk toggle checkbox
const toggleCheckbox = (member) => {
  const index = selectedMembers.value.findIndex(m => m.id === member.id);
  if (index > -1) {
    // Remove from selectedMembers
    selectedMembers.value.splice(index, 1);
  } else {
    // Add to selectedMembers
    selectedMembers.value.push(member);
  }
  // Update localStorage
  localStorage.setItem('selectedMembers', JSON.stringify(selectedMembers.value));
};

// Fungsi untuk mengarahkan ke halaman print
const goToPrintPage = () => {
  if (selectedMembers.value.length > 0) {
    // Redirect ke /print-anggota dengan data anggota yang dipilih
    const membersWithMajor = selectedMembers.value.map(member => ({
      ...member,
      major: member.major // Ensure that major is included
    }));

    router.push({
      path: '/print-anggota',
      query: { members: JSON.stringify(membersWithMajor) }
    });

    // Clear selected members from localStorage
    localStorage.removeItem('selectedMembers');
  } else {
    alert('Pilih anggota terlebih dahulu!');
  }
};
</script>
