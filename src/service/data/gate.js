import axios from '../axios'
import useSwal from '../swal'
import { reactive, ref } from 'vue'

export default function useGate() {
    const { accepted, rejected, confirm } = useSwal()
    const bookGate = ref([])
    const totalGate = ref([])

    async function getAllBook() {
        const response = await axios.get('/api/v1/gates')
        bookGate.value = response.data.data
        totalGate.value = response.data.count
    }

    async function add(id) {
        try {
            const response = await axios.post(`/api/v1/gates/${id}`)
            setInterval(() => {
                location.reload()
            }, 1500);
            accepted('Buku dimasukkan ke Pre Peminjaman')
        } catch (error) {
            rejected('Buku gagal dimasukkan ke Pre Peminjaman')
        }
    }

    function update(id, total) {
        axios.put(`/api/v1/gates/${id}`, { total })
    }

    async function cancel(id) {
        const response = await confirm('Yakin mau membatalkan buku ini?')

        if(response.isConfirmed) {
            try {
                const response = await axios.delete(`/api/v1/gates/${id}`)
                setInterval(() => {
                    location.reload()
                }, 1500);
                accepted('Berhasil dibatalkan')
            } catch (error) {
                rejected('Gagal dibatalkan')
            }
        }
    }

    return {
        add,
        bookGate,
        getAllBook,
        update, 
        cancel,
        totalGate
    }
}