import axios from './axios'
import useSwal from './swal'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

export default function useAuth() {
    const { accepted, rejected, confirm } = useSwal()
    const route = useRoute()
    const router = useRouter()
    const user = ref([])

    async function signin(payload) {
        try {
            const response = await axios.post('/api/v1/auth/signin', payload)
            accepted('Kamu berhasil login')
            setToken(response.data.token)
            router.push('/dashboard')
        } catch (error) {
            rejected('Username atau Password salah')
        }
    }

    async function signout() {
        const response = await confirm('Yakin mau logout?')

        if(response.isConfirmed) {
            try {
                const response = await axios.post('/api/v1/auth/signout')
                removeToken()
                router.push('/signin')
                accepted('Berhasil logout')
            } catch (error) {
                rejected('Gagal logout')
            }
        }
    }

    async function authUser() {
        try {
            const response = await axios.get('/api/v1/authUser')
            user.value = response.data
        } catch (error) {
            removeToken()
            location.reload()   
        }
    }

    function setToken(token) {
        localStorage.setItem('auth_token', token)
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    function removeToken() {
        localStorage.removeItem('auth_token')
        axios.defaults.headers.common.Authorization = `Bearer `
    }

    return {
        signin,
        signout,
        user,
        authUser
    }
}