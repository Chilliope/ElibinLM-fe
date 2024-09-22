import axios from '../axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useSwal from '../swal'

export default function useSubBook() {
    const subBook = ref([])
    const totalPage = ref([])
    const route = useRoute()
    const router = useRouter()
    const { accepted, rejected, confirm } = useSwal()
    
    async function getSubBook() {
        const response = await axios.get(`/api/v1/subBook/${route.params.id}?page=${route.params.page}`)
        subBook.value = response.data.data.data
        totalPage.value = response.data.data.last_page
    }

    async function create(payload) {
        try {
            const response = await axios.post(`/api/v1/subBook/${route.params.id}`, payload)
            accepted('Data berhasil dibuat')
            router.push(`/detail-koleksi/${route.params.id}/1`)
        } catch (error) {
            rejected('Data gagal dibuat')
        }
    }

    async function show() {
        const response = await axios.get(`/api/v1/subBook-detail/${route.params.id}`)
        subBook.value = response.data.data
    }

    async function update(payload) {
        try {
            const response = await axios.put(`/api/v1/subBook/${route.params.id}`, payload)
            accepted('Data berhasil diedit')
            router.back()
        } catch (error) {
            rejected('Data gagal diedit')            
        }
    }

    async function destroy(id) {
        const response = await confirm('Yakin mau hapus?')

        if(response.isConfirmed) {
            try {
                const response = await axios.delete(`/api/v1/subBook/${route.params.id}`)
                accepted('Data berhasil dihapus')
                setInterval(() => {
                    location.reload()
                }, 1500);
            } catch (error) {
                rejected('Data gagal dihapus')
            }
        }
    }

    return {
        subBook,
        totalPage,
        getSubBook,
        create,
        show,
        update,
        destroy
    }
}