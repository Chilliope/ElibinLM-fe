import axios from '../axios'
import { ref } from 'vue'
import useSwal from '../swal'
import { useRoute, useRouter } from 'vue-router'


export default function useSubject() {
    const subject = ref([])
    const totalPage = ref([])
    const count = ref([])
    const route = useRoute()
    const router = useRouter()
    const { accepted, rejected, confirm } = useSwal()

    async function getSubject(search) {
        if(search == undefined) {
            search = ''
        }

        const response = await axios.get(`/api/v1/subject?page=${route.params.page}&search=${search}`)
        subject.value = response.data.data.data
        totalPage.value = response.data.data.last_page
        count.value = response.data.count
    }

    async function getAllSubject() {
        const response = await axios.get('/api/v1/getAllSubject')
        subject.value = response.data.data
    }

    async function create(payload) {
        try {
            const response = await axios.post('/api/v1/subject', payload)
            accepted('Subjek berhasil ditambahkan')
            router.back()
        } catch (error) {
            rejected('Subjek gagal ditambahkan')
        }
    }

    async function show() {
        const response = await axios.get(`/api/v1/subject/${route.params.id}`)
        subject.value = response.data.data
    }

    async function edit(payload) {
        try {
            const response = await axios.put(`/api/v1/subject/${route.params.id}`, payload)
            accepted('Subjek berhasil diedit')
            router.back()
        } catch (error) {
            rejected('Subjek gagal diedit')
        }
    }

    async function destroy(id) {
        const response = await confirm('Yakin mau hapus subjek?')

        if(response.isConfirmed) {
            try {
                const response  = await axios.delete(`/api/v1/subject/${id}`)
                accepted('Subjek berhasil dihapus')
                setInterval(() => {
                    location.reload()
                }, 1500);
            } catch (error) {
                rejected('Subjek gagal dihapus')
            }
        }
    }

    return {
        subject,
        getSubject,
        count,
        totalPage,
        create,
        show,
        edit,
        destroy,
        getAllSubject
    }
}