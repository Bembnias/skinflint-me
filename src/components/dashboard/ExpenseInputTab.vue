<template>
    <div class="shadow-md col-span-12 md:col-span-6 row-span-2 rounded-lg">
        <h5 class="mt-5 ml-9 xl:text-4xl font-semibold">New Expense</h5>

        <form class="grid gap-4 lg:grid-cols-2 lg:gap-7 lg:text-lg mx-9 my-5" @submit.prevent="handleSubmit">
            <select class="appearance-none border-b" v-model="selectedCategory" required>
                <option v-if="!categories.length" value="" disabled>Add new category in settings</option>
                <option v-else value="" disabled>Category</option>
                    <option 
                        v-for="option in categories"
                        :key="option" 
                        :value="{category: option.category, categoryIcon: option.categoryIcon}"
                        > 
                        {{option.category}}
                    </option>
            </select>

            <input class="border-b" type="text" v-model="name" placeholder="Name" required>

            <input class="border-b" type="number" step='0.01' min="0" v-model="amount" placeholder="Amount" required>

            <input class="appearance-none bg-red-300 rounded-full text-white py-1 cursor-pointer" type="submit" value="Add">
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import getCategories from '../../composables/getCategories'
import addAction from '../../composables/addAction'

import dayjs from 'dayjs'

export default {
    setup() {
        const { categories, load } = getCategories()

        load()

        const selectedCategory = ref('')
        const name = ref('')
        const amount = ref(null)

        const handleSubmit = () => {
            const newAction = {
                type: 'expense',
                category: selectedCategory.value.category,
                categoryIcon: selectedCategory.value.categoryIcon,
                name: name.value,
                amount: -parseFloat(amount.value).toFixed(2),
                date: dayjs().format('DD MMM YYYY, HH:mm')
            }

            addAction(newAction)

            console.log('New action added')

            selectedCategory.value = ''
            name.value = ''
            amount.value = ''
        }

        return { categories, selectedCategory, name, amount, handleSubmit }
    }
}
</script>

<style>

</style>