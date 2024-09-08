import axios from '../axios'
import { ref } from 'vue'
import useSwal from '../swal'
import { useRoute, useRouter } from 'vue-router'

export default function useMember() {
    const member = ref([])
    const totalPage = ref([])
    const { accepted, rejected, confirm } = useSwal()
    const route = useRoute()
    const router = useRouter()
    const count = ref([])

    async function getMember(search) {
        if(search == undefined) {
            search = ''
        }
        const response = await axios.get(`/api/v1/member?page=${route.params.page}&search=${search}`)
        member.value = response.data.data.data
        totalPage.value = response.data.data.last_page
        count.value = response.data.count
    }

    async function show() {
        const response = await axios.get(`/api/v1/member/${route.params.id}`)
        member.value = response.data.data
    }

    async function create(payload) {
        try {
            const response = await axios.post('/api/v1/member', payload)
            accepted('Anggota berhasil ditambahkan')
            router.back()
        } catch (error) {
            rejected('Anggota gagal ditambahkan')
        }
    } 

    async function update(payload) {
        try {
            const response = await axios.post(`/api/v1/member/${route.params.id}`, payload)
            accepted('Anggota berhasil diedit')
            router.back()
        } catch (error) {
            rejected('Anggota gagal diedit')
        }
    }

    async function destroy(id) {
        const response = await confirm('Yakin mau hapus anggota?')

        if(response.isConfirmed) {
            try {
                const response = await axios.delete(`/api/v1/member/${id}`)
                setInterval(() => {
                    location.reload()
                }, 1500);
                accepted('Anggota berhasil dihapus')
            } catch (error) {
                rejected('Anggota gagal dihapus')
            }
        }
    } 

    return {
        member,
        getMember,
        create,
        show,
        update,
        destroy,
        totalPage,
        count
    }
}