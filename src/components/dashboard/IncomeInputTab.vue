<template>
  <div class="shadow-md col-span-6 row-span-2 rounded-lg">
    <h5 class="mt-5 ml-9 xl:text-4xl font-semibold">New Income</h5>
    <form class="grid lg:grid-cols-2 lg:gap-7 lg:text-lg gap-4 mx-9 my-5" @submit.prevent="handleSubmit">
      <select class="appearance-none border-b" v-model="selectedCategory" required>
        <option value="" disabled>Type</option>
        <option 
          v-for="option in categories"
          :key="option" 
          :value="{category: option.category, categoryIcon: option.categoryIcon}"
         > 
          {{option.category}}
        </option>
      </select>

      <input class="border-b" type="text" v-model="name" placeholder="Name" required>

      <input class="border-b" type="number" step='0.01' v-model="amount" placeholder="Amount" required>

      <input class="appearance-none bg-green-200 rounded-full text-white py-1" type="submit" value="Add">
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import getCategories from '../../composables/getCategories'
import addAction from '../../composables/addAction'

import { DateTime } from 'luxon'

export default {
  setup() {
    const { categories, load } = getCategories()

    load()

    const selectedCategory = ref('')
    const name = ref('')
    const amount = ref(null)

    const handleSubmit = () => {
      const newAction = {
        type: 'income',
        category: selectedCategory.value.category,
        categoryIcon: selectedCategory.value.categoryIcon,
        name: name.value,
        amount: parseFloat(amount.value).toFixed(2),
        date: DateTime.now().toLocaleString(DateTime.DATETIME_MED)
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