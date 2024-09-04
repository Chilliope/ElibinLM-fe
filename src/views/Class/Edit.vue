<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500"
        >dashboard</router-link
      >/
      <router-link to="/kelas" class="capitalize text-blue-500"
        >kelas</router-link
      >/
      <router-link to="/edit-kelas" class="capitalize text-blue-500"
        >edit kelas</router-link
      >/
    </div>
    <div>
      <h1 class="text-2xl font-medium lg:text-3xl">Edit Kelas</h1>
      <p class="capitalize lg:text-lg">selamat datang di edit kelas</p>
    </div>
  </div>
  <div class="bg-white w-full h-max my-8 rounded-3xl px-4 py-3 shadow-sm">
    <form @submit.prevent="doEdit()" class="capitalize flex flex-col gap-3 w-full lg:flex-row">
      <div class="flex flex-col gap-3 w-full">
        <div class="flex flex-col">
          <label for="kelas" class="font-medium text-slate-500">kelas</label>
          <input
            type="text"
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            placeholder="kelas"
            v-model="classData.class"
          />
        </div>
        <div class="flex flex-col">
          <label for="jurusan" class="font-medium text-slate-500"
            >jurusan</label
          >
          <select
            class="text-black rounded-lg px-3 py-2 outline-none border border-slate-400"
            v-model="classData.major_id"
          >
          <option :value="classData.major_id" selected>{{ majorClass.major }}</option>
          <option v-for="major in major" :key="major.id" :value="major.id">{{ major.major }}</option>
          </select>
        </div>
        <div class="flex flex-col">
          <label for="jurusan" class="font-medium text-slate-500"
            >Alphabet</label
          >
          <select
            class="text-black rounded-lg px-3 py-2 capitalize outline-none border border-slate-400"
            v-model="classData.alphabet"
          >
            <!-- <option :value="classData.alphabet">{{ classData.alphabet }}</option> -->
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
import { onMounted } from 'vue'
import useMajor from '../../service/data/major'
import useClass from '../../service/data/class'

const { major, getMajor } = useMajor() 
const { classData, show, majorClass, edit } = useClass()

const letters = []
for(let i = 65; i <= 90; i++) {
  letters.push(String.fromCharCode(i))
}

onMounted(() => {
  show(),
  getMajor()
})

function doEdit() {
  edit(this.classData)
}
</script>
