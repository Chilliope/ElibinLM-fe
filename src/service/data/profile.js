import axios from '../axios'
import useSwal from '../swal'
import { useRoute, useRouter } from 'vue-router'

export default function useProfile() {
    const { accepted, rejected, confirm } = useSwal()
    const router = useRouter()

    async function update(payload) {
        try {
            const response = await axios.post('/api/v1/profile', payload)
            setInterval(() => {
                location.reload()
            }, 1500);
            accepted('Profil berhasil diedit')
        } catch (error) {
            rejected('Profil gagal diedit')
        }
    }

    return {
        update
    }
}