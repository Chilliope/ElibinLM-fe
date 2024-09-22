<template>
    <div class="bg-white w-full h-screen">
        <table class="w-full">
            <thead class="border border-black">
                <th>No</th>
                <th>Nama</th>
                <th>Jurusan</th>
                <th>Buku</th>
                <th>Tanggal Peminjaman</th>
                <th>Tanggal Pengembalian</th>
            </thead>
            <tbody>
                <tr class="border border-black text-center" v-for="(item, code) in borrow" :key="code">
                    <td>{{ code }}</td>
                    <td>{{ item.member.name }}</td>
                    <td>{{ item.member.major }}</td>
                    <td>
                        <ul>
                            <li v-for="book in item.books" :key="book">{{ book.title }} ({{ item.total }})</li>
                        </ul>
                    </td>
                    <td>{{ item.date_borrow }}</td>
                    <td>{{ item.date_return }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted, watch, ref, nextTick } from "vue";
import useBorrow from "../../service/data/borrow";
import { useRoute, useRouter } from "vue-router";
import useGate from "../../service/data/gate";

const { getAllBorrow, borrow } = useBorrow();
const { getAllBook } = useGate();
const route = useRoute();
const router = useRouter();

const fromDate = ref("");
const toDate = ref("");

watch(
  () => route.params.page,
  async () => {
    await getAllBorrow(route.params.fromDate, route.params.toDate);
    await nextTick();
    window.print();
  }
);

onMounted(async () => {
  await getAllBorrow(route.params.fromDate, route.params.toDate);
  await getAllBook();
  await nextTick();
  window.print();
});
</script>
