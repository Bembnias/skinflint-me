<template>
    <div class="shadow-md col-span-6 row-span-2 rounded-lg">
        <h5 class="mt-5 ml-9 xl:text-4xl font-semibold">New Expense</h5>

        <form class="grid gap-4 lg:grid-cols-2 lg:gap-7 lg:text-lg mx-9 my-5" @submit.prevent="handleSubmit">
            <select class="appearance-none border-b" v-model="selectedCategory" required>
                <option value="" disabled>Type</option>
                <option v-for="option in categories" :key="option" :value="option.category"> {{option.category}} </option>
            </select>

            <input class="border-b" type="text" v-model="name" placeholder="Name" required>

            <input class="border-b" type="number" v-model="amount" placeholder="Amount" required>

            <input class="appearance-none bg-red-300 rounded-full text-white py-1" type="submit" value="Add">
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const selectedCategory = ref('')
        const name = ref('')
        const amount = ref(null)

        const categories = [
            { category: 'Gifts' },
            { category: 'Shopping' },
            { category: 'Food' }
        ]

        const handleSubmit = () => {
            console.log('expense', selectedCategory.value, name.value, amount.value)
        }

        return { categories, selectedCategory, name, amount, handleSubmit }
    }
}
</script>

<style>

</style>