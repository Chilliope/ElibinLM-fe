<template>
  <div class="bg-white w-full min-h-screen grid grid-cols-2">
    <!-- Looping data anggota yang dipilih -->
    <div
      class="bg-white border border-black w-full h-max px-4 py-2 flex justify-between"
      v-for="member in members"
      :key="member.id"
    >
      <div class="w-full">
        <h5 class="font-bold">Kartu Anggota Perpustakaan</h5>
        <h6 class="font-semibold">{{ library.library }}</h6>
        <div>
          Nama: <span>{{ member.name }}</span>
        </div>
        <div>
          Jurusan:
          <span>{{ member.major ? member.major.major : "Unknown" }}</span>
        </div>
        <div>ID Anggota: {{ member.id }}</div>
        <div class="flex justify-between">
          <!-- Tempatkan barcode di sini -->
          <svg :id="'barcode-' + member.id"></svg>
          <div class="flex flex-col justify-end items-end w-1/2">
            <small>Kepala Perpustakaan</small>
            <img :src="'/storage/' + library.signature" alt="" class="w-16" />
            <small>{{ library.head_librarian }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import JsBarcode from "jsbarcode";
import { useRoute } from "vue-router";
import useLibrary from "../../service/data/library";

const route = useRoute();
const members = JSON.parse(route.query.members || "[]"); // Tangkap data anggota dari query
const { library, getLibrary } = useLibrary()

// Generate barcode untuk setiap anggota
onMounted(async () => {
  // Dapatkan data perpustakaan terlebih dahulu
  await getLibrary();

  // Pastikan semua elemen DOM telah di-render sebelum barcode dibuat
  await nextTick();

  // Generate barcode untuk setiap anggota
  members.forEach((member) => {
    JsBarcode(`#barcode-${member.id}`, member.id, {
      format: "CODE39",
      width: 2,
      height: 40,
      displayValue: true,
      fontSize: 12,
    });
  });

  // Pastikan lagi bahwa elemen DOM telah di-update dengan barcodes sebelum memanggil print
  await nextTick();

  // Print the page automatically after barcodes are generated
  window.print();
});
</script>
