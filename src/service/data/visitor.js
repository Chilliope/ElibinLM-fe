import { ref } from 'vue'
import axios from '../axios'
import { useRoute, useRouter } from 'vue-router'
import useSwal from '../swal'

export default function useVisitor() {
    const visitor = ref([])
    const route = useRoute()
    const router = useRouter()
    const { accepted, rejected, confirm } = useSwal()

    async function getVisitor() {
        const response = await axios.get('/api/v1/visitor')
        visitor.value = response.data.data
    }

    async function show() {
        const response = await axios.get(`/api/v1/visitor/${route.params.id}`)
        visitor.value = response.data.data
    }

    async function create(payload) {
        try {
            const response = await axios.post('/api/v1/visitor', payload)
            accepted('Pengunjung berhasil ditambahkan')
            router.back()
        } catch (error) {
            rejected('Pengunjung gagal ditambahkan')
        }
    }

    async function update(payload) {
        try {
            const response = await axios.put(`/api/v1/visitor/${route.params.id}`, payload)
            accepted('Pengunjung berhasil diedit')
            router.back()
        } catch (error) {
            rejected('Pengunjung gagal diedit')
        }
    }

    async function destroy(id) {
        const response = await confirm('Yakin mau hapus pengunjung?')
        
        if(response.isConfirmed) {
            try {
                const response = await axios.delete(`/api/v1/visitor/${id}`)
                setInterval(() => {
                    router.back()
                }, 1500);
                accepted('Pengunjung berhasil dihapus')
            } catch (error) {
                rejected('Pengunjung gagal dihapus')
            }
        }
    }

    return {
        visitor,
        getVisitor,
        show,
        create,
        update,
        destroy
    }
}