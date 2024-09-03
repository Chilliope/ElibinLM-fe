import axios from '../axios'
import useSwal from '../swal'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

export default function useBook() {
    const { accepted, rejected, confirm } = useSwal()
    const router = useRouter()
    const route = useRoute()
    const book = ref([])

    async function getBook() {
        const response = await axios.get('/api/v1/book')
        book.value = response.data.data
    }

    async function show() {
        const response = await axios.get(`/api/v1/book/${route.params.slug}`)
        book.value = response.data.data
    }

    async function create(payload) {
        try {
            const response = await axios.post('/api/v1/book', payload)
            accepted('Buku berhasil dibuat')
            router.back()
        } catch (error) {
            rejected('Buku gagal dibuat')
            router.back()
        }
    }

    async function update(payload) {
        try {
            const response = await axios.post(`/api/v1/book/${route.params.slug}`, payload)
            accepted('Buku berhasil diedit')
            router.back()
        } catch (error) {
            rejected('Buku gagal diedit')
            router.back()
        }
    }

    async function destroy(slug) {
        const response = await confirm('Yakin mau hapus buku ini?')

        if(response.isConfirmed) {
            try {
                const response = await axios.delete(`/api/v1/book/${slug}`)
                accepted('Buku berhasil dihapus')
                setInterval(() => {
                    location.reload()
                }, 1500);
            } catch (error) {
                rejected('Buku gagal dihapus')
            }
        }
    }

    return {
        book,
        getBook,
        show,
        create,
        update,
        destroy
    }
}