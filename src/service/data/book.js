import axios from '../axios'

export default function useBook() {

    function create(payload) {
        return payload
    }

    return {
        create
    }
}