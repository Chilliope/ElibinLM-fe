import axios from '../axios'
import useSwal from '../swal'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

export default function useAdmin() {
    const admin = ref([])
    const totalPage = ref([])
    const { accepted, rejected, confirm } = useSwal()
    const route = useRoute()
    const router = useRouter()

    async function getAdmin() {
        const response = await axios.get(`/api/v1/admin?page=${route.params.page}`)
        admin.value = response.data.data.data
        totalPage.value = response.data.data.last_page
    }

    async function create(payload) {
        try {
            const response = await axios.post('/api/v1/admin', payload)
            accepted('Admin berhasil ditambahkan')
            router.back()
        } catch (error) {
            rejected(error.response.data.rack)
        }
    }

    async function show() {
        const response = await axios.get(`/api/v1/admin/${route.params.id}`)
        admin.value = response.data.data
    }

    async function edit(payload) {
        try {
            const response = await axios.put(`/api/v1/admin/${route.params.id}`, payload)
            accepted('Admin berhasil diedit')
            router.back()
        } catch (error) {
            rejected(Object.values(error.response.data)[0][0])
        }
    }

    async function destroy(id) {
        const response = await confirm('Yakin mau hapus?')

        if(response.isConfirmed) {
            try {
                const response = await axios.delete(`/api/v1/admin/${id}`)
                accepted('Admin berhasil dihapus')
                setInterval(() => {
                    location.reload()
                }, 1500);
            } catch (error) {
                rejected(Object.values(error.response.data)[0][0])
            }
        }
    }

    return {
        admin,
        getAdmin,
        create,
        show,
        edit,
        destroy,
        totalPage
    }
}