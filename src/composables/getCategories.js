import { ref } from 'vue'

const getCategories = () => {
    const categories = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/categories')
            if (!data.ok) {
                throw Error('No data available')
            }
            categories.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { categories, error, load }
}

export default getCategories