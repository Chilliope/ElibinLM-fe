<template>
  <div
    ref="overlay"
    class="bg-black w-full h-screen fixed bg-opacity-50 hidden z-10"
  ></div>
  <nav
    class="w-full h-14 bg-white border-b flex justify-between items-center lg:h-16 fixed z-10"
  >
    <div class="ml-6">
      <button @click="openSidebar()" class="text-3xl text-slate-500 lg:hidden">
        <i class="fa-solid fa-bars hover:text-slate-600 hover:duration-150"></i>
      </button>
    </div>
    <div class="mr-6">
      <ul class="flex items-center gap-3">
        <li class="hidden lg:block">
          <router-link
            to="/pre-peminjaman"
            class="text-slate-600 hover:text-slate-900 hover:duration-150"
          >
            Pre-Peminjaman
          </router-link>
        </li>
        <li class="lg:hidden">
          <router-link to="/pre-peminjaman" class="text-xl">
            <i class="fa-solid fa-boxes-stacked"></i>
          </router-link>
        </li>
        <div
          class="bg-red-500 w-6 h-6 rounded-full grid place-content-center text-white text-xs relative right-4 top-2 border-2 border-white"
          v-if="totalGate"
        >
          {{ totalGate }}
        </div>
        <li>
          <button
            class="flex flex-row items-center gap-4 text-slate-600 hover:text-slate-900 hover:duration-150"
            @click="dropdown()"
          >
            <div class="hidden lg:block">
              <p><span>hai, </span>{{ user.username }}</p>
            </div>
            <div>
              <img
                :src="'/storage/' + user.image"
                alt=""
                class="w-10 h-10 object-cover rounded-full"
              />
            </div>
          </button>
        </li>
      </ul>
    </div>
  </nav>
  <div
    ref="dropdownEl"
    class="bg-white w-44 h-max rounded-xl shadow-sm fixed right-6 top-16 overflow-hidden hidden z-10"
  >
    <ul class="w-full flex flex-col">
      <li v-for="item in dropdownItem" :key="item.name">
        <router-link
          :to="item.href"
          class="w-full flex border-b px-3 py-3 items-center gap-3 hover:bg-gray-100 hover:duration-150 capitalize"
          ><i :class="item.icon + ' w-4'"></i>{{ item.name }}</router-link
        >
      </li>
      <li>
        <form @submit.prevent="signout()">
          <button
            class="w-full flex border-b px-3 py-3 items-center gap-3 text-red-500 hover:bg-red-500 hover:text-white hover:duration-150"
          >
            <i class="fa-solid fa-arrow-right-from-bracket"></i>Sign Out
          </button>
        </form>
      </li>
    </ul>
  </div>
  <div class="flex flex-row">
    <aside
      ref="sidebar"
      class="fixed top-0 bg-white w-2/3 h-screen hidden lg:block lg:w-1/5 sidebarIsOpened z-10"
    >
      <div class="font-medium px-3 py-2 border-b flex flex-row justify-between">
        <router-link to="/dashboard" class="flex flex-col">
          <h5 class="text-xl">Elibin-LM</h5>
          <small>SMKN 2 Banjarmasin</small>
        </router-link>
        <div>
          <button
            @click="closeSidebar()"
            class="bg-slate-100 w-6 h-6 text-slate-800 rounded-full text-center hover:bg-slate-200 hover:duration-150 lg:hidden"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
      </div>
      <ul class="px-3 mt-8 lg:mt-3 flex flex-col gap-6">
        <li v-for="item in sideItem" :key="item.name">
          <router-link
            :to="item.href"
            :class="[
              'text-slate-600 px-3 py-1 rounded-xl w-full flex items-center capitalize hover:bg-blue-100 hover:duration-150',
              isActive(item.name) ? 'bg-blue-500 text-white' : '',
            ]"
          >
            <i :class="item.icon + ' w-7'"></i>
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </aside>
    <div class="w-full flex mt-8 lg:mt-20 lg:justify-end pb-8">
      <div class="my-8 mx-6 w-full lg:w-3/4 lg:my-0 lg:px-3 py-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
.sidebarIsOpened {
  animation: sidebarOpen 1s alternate;
  left: 0;
}

@keyframes sidebarOpen {
  0% {
    left: -50%;
  }
  100% {
    left: 0;
  }
}

.sidebarIsClosed {
  animation: sidebarClose 1s alternate;
  left: -50%;
}

@keyframes sidebarClose {
  0% {
    left: 0;
  }
  100% {
    left: -50%;
  }
}
</style>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import useAuth from "../service/auth";
import useGate from "../service/data/gate";

const route = useRoute();
const { signout, user, authUser } = useAuth();
const { totalGate, getAllBook } = useGate()

function isActive(name) {
  // Memeriksa apakah path saat ini termasuk href
  return route.name.startsWith(name);
}

let dropdownEl = ref(null);
let dropdownStatus = false;
let bookNav = ref(null);
function dropdown() {
  if (dropdownStatus === false) {
    dropdownStatus = true;
    dropdownEl.value.classList.remove("hidden");
    bookNav.value.classList.add("-z-10");
  } else {
    dropdownStatus = false;
    dropdownEl.value.classList.add("hidden");
  }
}

let overlay = ref(null);
let sidebar = ref(null);
function openSidebar() {
  overlay.value.classList.remove("hidden");
  sidebar.value.classList.remove("hidden");
}

function closeSidebar() {
  overlay.value.classList.add("hidden");
  sidebar.value.classList.add("hidden");
}

const dropdownItem = [
  {
    icon: "fa-regular fa-user",
    name: "profil",
    href: "/profil",
  },
  {
    icon: "fa-solid fa-circle-info",
    name: "tentang elibin",
    href: "/tentang-elibin",
  },
];

const sideItem = [
  {
    icon: "fa-solid fa-gauge",
    title: "dashboard",
    name: 'Dashboard',
    href: "/dashboard",
  },
  {
    icon: "fa-solid fa-book",
    title: "koleksi buku",
    name: "Books",
    href: "/koleksi-buku/" + 1,
  },
  {
    icon: "fa-solid fa-users",
    title: "anggota",
    name: 'Member',
    href: "/anggota/" + 1,
  },
  {
    icon: "fa-solid fa-user-secret",
    title: "pengunjung",
    name: 'Visitor',
    href: "/pengunjung/" + 1,
  },
  {
    icon: "fa-solid fa-clipboard",
    title: "peminjaman",
    name: 'Borrowing',
    href: "/peminjaman/" + 1,
  },
  {
    icon: "fa-solid fa-building",
    title: "perpustakaan",
    name: 'Library',
    href: "/perpustakaan",
  },
  {
    icon: "fa-solid fa-sign-hanging",
    title: "rak buku",
    name: "Rack",
    href: "/rak/" + 1,
  },
  {
    icon: "fa-solid fa-landmark",
    title: "kelas",
    name: "Class",
    href: "/kelas/" + 1,
  },
  {
    icon: "fa-solid fa-hammer",
    title: "jurusan",
    name: 'Major',
    href: "/jurusan/" + 1,
  },
  {
    icon: "fa-solid fa-clipboard-user",
    title: "admin",
    name: 'Admin',
    href: "/admin/" + 1,
  },
];

onMounted(() => {
  authUser()
  getAllBook()
})
</script>
