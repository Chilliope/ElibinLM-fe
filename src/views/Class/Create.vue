<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500"
        >dashboard</router-link
      >/
      <router-link to="/kelas" class="capitalize text-blue-500"
        >kelas</router-link
      >/
      <router-link to="/tambah-kelas" class="capitalize text-blue-500"
        >tambah kelas</router-link
      >/
    </div>
    <div>
      <h1 class="text-2xl font-medium lg:text-3xl">Tambah Kelas</h1>
      <p class="capitalize lg:text-lg">selamat datang di tambah kelas</p>
    </div>
  </div>
  <div class="bg-white w-full h-max my-8 rounded-3xl px-4 py-3 shadow-sm">
    <form @submit.prevent="doCreate()" class="capitalize flex flex-col gap-3 w-full lg:flex-row">
      <div class="flex flex-col gap-3 w-full">
        <div class="flex flex-col">
          <label for="class" class="font-medium text-slate-500">kelas</label>
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            placeholder="kelas"
            id="class"
            required
            v-model="forms.class"
          />
        </div>
        <div class="flex flex-col">
          <label for="major" class="font-medium text-slate-500"
            >jurusan</label
          > 
          <select
            class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400"
            id="major"
            required
            v-model="forms.major_id"
          >
            <option v-for="major in major" :key="major.id" :value="major.id">{{ major.major }}</option>
          </select>
        </div>
        <div class="flex flex-col">
          <label for="alphabet" class="font-medium text-slate-500"
            >Alphabet</label
          >
          <select
            class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400"
            id="alphabet"
            required  
            v-model="forms.alphabet"
          >
            <option v-for="letter in letters" :key="letter" :value="letter">{{ letter }}</option>
          </select>
        </div>
        <div class="flex flex-row justify-between pb-8 capitalize">
          <router-link
            to="/kelas/1"
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
import { onMounted, reactive } from 'vue'
import useMajor from '../../service/data/major'
import useClass from '../../service/data/class'

const letters = []
for(let i = 65; i <= 90; i++) {
  letters.push(String.fromCharCode(i))
}

const { major, getMajor } = useMajor()
const { create } = useClass()

const forms = reactive({
  class: '',
  major_id: '',
  alphabet: ''
})

onMounted(() => {
  getMajor()
})

function doCreate() {
  create({...forms})
}
</script>
