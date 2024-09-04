import axios from '../axios'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import useSwal from '../swal'

export default function useClass() {
    const classData = ref([])
    const totalPage = ref([])
    const majorClass = ref([])
    const { accepted, rejected, confirm } = useSwal()
    const router = useRouter()
    const route = useRoute()

    async function getClass(search) {
        if(search == undefined) {
            search = ''
        }
        const response = await axios.get(`/api/v1/class?page=${route.params.page}&search=${search}`)
        classData.value = response.data.data.data
        totalPage.value = response.data.data.last_page
    }

    async function getAllClass() {
        const response = await axios.get('/api/v1/getAllClass')
        classData.value = response.data.data
    }

    async function create(payload) {
        try {
            const response = await axios.post('/api/v1/class', payload)
            accepted('Kelas berhasil dibuat')
            router.back()
        } catch (error) {
            rejected(Object.values(error.response.data)[0][0])
        }
    }

    async function show() {
        const response = await axios.get(`/api/v1/class/${route.params.id}`)
        classData.value = response.data.data
        majorClass.value = classData.value.major
    }

    async function edit(payload) {
        try {
            const response = await axios.put(`/api/v1/class/${route.params.id}`, payload)
            accepted('Kelas berhasil diedit')
            router.back()
        } catch (error) {
            rejected(Object.values(error.response.data)[0][0])
        }
    }

    async function destroy(id) {
        const response = await confirm('Hapus data ini?')

        if(response.isConfirmed) {
            try {
                const response = await axios.delete(`/api/v1/class/${id}`)
                accepted('Kelas berhasil dihapus')
                setInterval(() => {
                    location.reload()
                }, 1500);
            } catch (error) {
                rejected(Object.values(error.response.data)[0][0])
            }
        }
    }

    return {
        classData,
        getClass,
        create,
        show,
        majorClass,
        edit,
        destroy,
        totalPage,
        getAllClass
    }
}