import axios from '../axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useSwal from '../swal'

export default function useMajor() {
    const major = ref([])
    const totalPage = ref([])
    const { accepted, rejected, confirm } = useSwal()
    const route = useRoute()
    const router = useRouter()

    async function getMajor() {
        const response = await axios.get(`/api/v1/major?page=${route.params.page}`)
        major.value = response.data.message.data
        totalPage.value = response.data.message.last_page
    }

    async function getAllMajor() {
        const response = await axios.get('/api/v1/getAllMajor')
        major.value = response.data.message
        console.log(major.value)
    }

    async function create(payload) {
        try {
            const response = await axios.post('/api/v1/major', payload)
            accepted('Jurusan berhasil dibuat')
            router.back()
        } catch (error) {
            rejected(Object.values(error.response.data)[0][0])
        }
    }

    async function show() {
        const response = await axios.get(`/api/v1/major/${route.params.id}`)
        major.value = response.data.data
    }

    async function edit(payload) {
        try {
            const response = await axios.put(`/api/v1/major/${route.params.id}`, payload)
            accepted('Jurusan berhasil diedit')
            router.back()
        } catch (error) {
            rejected(Object.values(error.response.data)[0][0])
        }
    }

    async function destroy(id) {
        const response = await confirm('Yakin mau hapus?')

        if(response.isConfirmed) {
            try {
               const response = await axios.delete(`/api/v1/major/${id}`)
               accepted('Jurusan berhasil dihapus')
               setInterval(() => {
                   location.reload()
               }, 1500); 
            } catch (error) {
                rejected(Object.values(error.response.data)[0][0])
            }
        }
    }

    return {
        major,
        getMajor,
        create,
        show,
        edit,
        destroy,
        totalPage,
        getAllMajor
    }
}