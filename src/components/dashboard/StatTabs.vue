<template>

  <div class="relative shadow-md col-span-4 row-span-1 rounded-lg overflow-hidden">
    <div class="text-center absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <h3 class="font-semibold text-xl md:text-3xl 2xl:text-5xl text-gray-800">${{totalBudget}} </h3>
      <small class="text-gray-400 text-xs md:text-sm">Total Budget</small>
    </div>
  </div>

  <div class="relative shadow-md col-span-4 row-span-1 rounded-lg overflow-hidden">
    <div class="text-center inline-flex absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <svg class="stroke-current w-8 md:w-9 2xl:w-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
      <div class="text-center">
        <h3 class="font-semibold text-xl md:text-3xl 2xl:text-5xl text-gray-800">$120</h3>
        <small class="text-gray-400 text-xs md:text-sm">March Income</small>
      </div>
    </div>
  </div>

  <div class="relative shadow-md col-span-4 row-span-1 rounded-lg overflow-hidden">
    <div class="text-center inline-flex absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <svg class="stroke-current w-8 md:w-9 2xl:w-12 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
      <div class="text-center">
        <h3 class="font-semibold text-xl md:text-3xl 2xl:text-5xl text-gray-800">$90</h3>
        <small class="text-gray-400 text-xs md:text-sm">March Expenses</small>
      </div>
    </div>
  </div>

</template>

<script>
import { computed, ref, watch } from 'vue'
import getActions from '../../composables/getActions'

export default {
  setup() {
    const { actions, error, load } = getActions()

    load()

    const totalBudget = computed(() => {
      let totalSum = 0
      actions.value.map((item) => {
        totalSum += parseFloat(item.amount)
      })
      return totalSum
    })
  
    return { totalBudget }
  }
}
</script>