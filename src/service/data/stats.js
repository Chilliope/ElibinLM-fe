import { ref } from 'vue'
import axios from '../axios'

export default function useStats() {
    const statsData = ref([])

    async function member() {
        const response = await axios.get('/api/v1/stats/member')
        statsData.value = response.data.data
    }

    async function visitor() {
        const response = await axios.get('/api/v1/stats/visitor')
        statsData.value = response.data.data
    }

    async function borrow() {
        const response = await axios.get('/api/v1/stats/borrow')
        statsData.value = response.data.data
    }

    return {
        statsData,
        member,
        visitor,
        borrow
    }
}