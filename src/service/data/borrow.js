import axios from "../axios";
import { ref } from "vue";
import useSwal from "../swal";
import { useRoute, useRouter } from "vue-router";

export default function useBorrow() {
  const { accepted, rejected, confirm } = useSwal();
  const router = useRouter();
  const route = useRoute();
  const borrow = ref([]);
  const totalPage = ref([]);
  const count = ref([])

  async function getBorrow(fromDate, toDate) {
    const response = await axios.get(`/api/v1/borrower`, {
      params: {
        page: route.params.page,
        fromDate: fromDate,
        toDate: toDate,
      },
    });

    borrow.value = response.data.data.data;
    totalPage.value = response.data.data.last_page;
    count.value = response.data.count;
  }

  async function store(payload) {
    try {
      const response = await axios.post("/api/v1/borrower", payload);
      accepted("Buku berhasil dipinjam");
      router.back();
    } catch (error) {
      rejected("Buku gagal dipinjam");
    }
  }

  async function destroy(borrowID) {
    const response = await confirm('Yakin mau hapus data peminjaman ini?')

    if(response.isConfirmed) {
      try {
        const response = await axios.delete(`/api/v1/borrower/${borrowID}`)
        setInterval(() => {
          location.reload()
        }, 1500);
        accepted('Peminjaman berhasil dihapus')
      } catch (error) {
        rejected('Peminjaman gagal dihapus')
      }
    }
  }

  return {
    store,
    borrow,
    getBorrow,
    totalPage,
    count,
    destroy
  };
}
