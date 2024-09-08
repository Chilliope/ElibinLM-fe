import axios from '../axios'
import { ref } from 'vue'
import useSwal from '../swal'
import { useRouter } from 'vue-router'

export default function useLibrary() {
    const library = ref([])
    const count = ref([])
    const { accepted, rejected, confirm } = useSwal()
    const router = useRouter()

    async function getLibrary() {
        const response = await axios.get('/api/v1/library/1')
        library.value = response.data.data
        count.value = response.data.count
    }

    async function update(payload) {
        try {
            const response = await axios.post('/api/v1/library/1', payload)
            accepted('Perpustakaan berhasil diedit')
            router.back()
        } catch (error) {
            rejected('Perpustakaan gagal diedit')
        }
    }

    return {
        library,
        getLibrary,
        update,
        count
    }
}