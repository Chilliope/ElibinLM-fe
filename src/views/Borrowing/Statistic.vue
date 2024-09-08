<template>
  <div class="flex flex-col lg:justify-between lg:flex-row-reverse">
    <div class="flex">
      <router-link to="/dashboard" class="capitalize text-blue-500"
        >dashboard</router-link
      >/
      <router-link to="/peminjaman" class="capitalize text-blue-500"
        >peminjaman</router-link
      >/
      <router-link to="/statistik-peminjaman" class="capitalize text-blue-500"
        >peminjaman</router-link
      >/
    </div>
    <div>
      <h1 class="capitalize text-2xl font-medium lg:text-2xl">
        statistik peminjaman
      </h1>
      <p class="capitalize lg:text-lg">
        selamat datang di statistik peminjaman
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
        <router-link class="hidden lg:block" to="/peminjaman"
          >Data Peminjaman</router-link
        >
      </div>
    </div>
    <div class="w-full px-16 overflow-x-scroll overflow-y-hidden mt-6 h-80"
    ref="statsExport"
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
        <ul class="relative -top-[32.1rem] left-2 flex items-end h-[280px] gap-3">
          <li
            class="flex flex-col w-max justify-end items-center gap-[8px]"
            v-for="(item, class_fix) in statsData"
            :key="class_fix"
          >
            <div class="bg-blue-500 w-6 bar-animation" 
            :style="'height:' + item.count + 'px;'"
            ></div>
            <small class="text-xs uppercase">{{ class_fix }}</small>
            <!-- <small>{{ item.count }}</small> -->
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
import { ref, onMounted } from "vue";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import useStats from "../../service/data/stats";

const { statsData, borrow } = useStats();

onMounted(() => {
  borrow();
});

const statsExport = ref(null);
async function exportPDF() {
  const stats = statsExport.value;

  // date
  const date = new Date()
  const currentDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}(${date.getHours()}:${date.getMinutes()})`

  // Capture the element at its actual size with a higher scale for better quality
  const canvas = await html2canvas(stats, {
    scale: 2, // Higher scale improves image quality
    useCORS: true,
    backgroundColor: null, // Optional: to handle background transparency if needed
  });

  // Get the original element width and height
  const elementWidth = canvas.width;
  const elementHeight = canvas.height;

  // Set padding (in pixels)
  const padding = 2000;

  // Calculate new width and height with padding
  const pdfWidth = elementWidth + padding * 2;
  const pdfHeight = elementHeight + padding * 2;

  // Initialize jsPDF with custom page size
  const pdf = new jsPDF({
    orientation: 'p',
    unit: 'px',
    format: [pdfWidth, pdfHeight], // Set size to match element size with padding
  });

  // Add the image to the PDF with padding
  pdf.addImage(canvas.toDataURL("image/png"), "PNG", padding, padding, elementWidth, elementHeight);

  // Save the PDF
  pdf.save(`stats-peminjaman_${currentDate}.pdf`);
}
</script>
