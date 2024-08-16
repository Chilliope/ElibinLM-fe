<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500"
        >dashboard</router-link
      >/
      <router-link to="/anggota" class="capitalize text-blue-500"
        >anggota perpustakaan</router-link
      >/
      <router-link to="/statistik-anggota" class="capitalize text-blue-500"
        >statistik</router-link
      >/
    </div>
    <div>
      <h1 class="capitalize text-2xl font-medium lg:text-2xl">
        statistik anggota perpustakaan
      </h1>
      <p class="capitalize lg:text-lg">
        selamat datang di statistik anggota perpustakaan
      </p>
    </div>
  </div>
  <div
    class="bg-white rounded-3xl w-full h-max shadow-sm my-8 flex flex-col px-3"
  >
    <div class="px-8 my-4 flex justify-between">
      <div>
        <h5 class="lg:text-lg">Statistik</h5>
      </div>
      <div>
        <router-link class="hidden lg:block" to="/anggota"
          >Data Anggota Perpustakaan</router-link
        >
      </div>
    </div>
    <div
      class="w-full px-16 overflow-x-scroll overflow-y-hidden mt-6 h-80"
    >
      <div class="w-max">
        <div class="w-full h-64 border-l-2 border-b-2 border-black"></div>
        <ul class="relative -top-64 right-7 h-64 flex flex-col justify-between">
          <li>100</li>
          <li>80</li>
          <li>60</li>
          <li>40</li>
          <li>20</li>
          <li>10</li>
          <li>0</li>
        </ul>
        <ul class="relative -top-[32.1rem] left-2 flex gap-3">
          <li
            class="flex flex-col w-max h-[280px] justify-end items-center gap-[8px]"
            v-for="item in 32"
            :key="item"
          >
            <div class="bg-blue-500 w-6 h-64 bar-animation"></div>
            <small class="text-xs uppercase">xii pplg b</small>
          </li>
        </ul>
      </div>
    </div>
    <div class="px-6 py-4">
      <button
        @click="exportPDF()"
        class="bg-red-500 w-max h-max px-6 py-2 rounded-lg text-white font-medium hover:bg-red-400 hover:duration-150"
      >
        Download PDF
      </button>
    </div>
  </div>
</template>

<style>
.bar-animation {
  animation: barAnimate 1s alternate;
}

@keyframes barAnimate {
  0% {
    height: 0%;
  }
}
</style>

<script setup>
import { ref } from "vue";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const statsExport = ref(null);
async function exportPDF() {
  const stats = statsExport.value;

  const canvas = await html2canvas(stats);

  // Initialize jsPDF
  const pdf = new jsPDF("p", "mm", "a1");

  // Add the captured image to the PDF
  pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 210, 297);

  // Save or open the PDF
  pdf.save("statistic-export.pdf");
}
</script>
