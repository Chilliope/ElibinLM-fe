import axios from '../axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useSwal from '../swal'

export default function useRack() {
    const rack = ref([])
    const totalPage = ref([])
    const { accepted, rejected, confirm } = useSwal()
    const route = useRoute()
    const router = useRouter()
    
    async function getRack(search) {
        if(search == undefined) {
            search = ''
        }

        const response = await axios.get(`/api/v1/rack?page=${route.params.page}&search=${search}`)
        rack.value = response.data.data.data
        totalPage.value = response.data.data.last_page
    }

    async function getAllRack() {
        const response = await axios.get('/api/v1/getAllRack')
        rack.value = response.data.data
    } 

    async function create(payload) {
        try {
            const response = await axios.post('/api/v1/rack', payload)
            accepted('Rak berhasil dibuat')
            router.back()
        } catch (error) {
            rejected(error.response.data.rack)
        }
    }

    async function show() {
        const response = await axios.get(`/api/v1/rack/${route.params.id}`)
        rack.value = response.data.data
    }

    async function edit(payload) {
        try {
            const response = await axios.put(`/api/v1/rack/${route.params.id}`, payload)
            accepted('Rak berhasil diedit')
        } catch (error) {
            rejected(Object.values(error.response.data)[0][0])
        }
    }

    async function destroy(id) {
        const response = await confirm('Hapus data ini?')

        if(response.isConfirmed) {
            try {
                const response = await axios.delete(`/api/v1/rack/${id}`)
                accepted('Rak berhasil dihapus')
                setInterval(() => {
                    location.reload()
                }, 1500);
            } catch (error) {
                rejected(Object.values(error.response.data)[0][0])
            }
        }
    }

    return {
        rack,
        getRack,
        create,
        show,
        edit,
        destroy,
        totalPage,
        getAllRack
    }
}