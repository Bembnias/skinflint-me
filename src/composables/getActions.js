import { ref } from 'vue'

const getActions = () => {
    const actions = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/actions')
            if (!data.ok) {
                throw Error('No data available')
            }
            actions.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { actions, error, load }
}

export default getActions