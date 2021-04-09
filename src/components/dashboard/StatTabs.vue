<template>

  <div class="relative shadow-md col-span-12 md:col-span-4 row-span-1 rounded-lg overflow-hidden">
    <div class="text-center absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <h3 class="font-semibold text-xl md:text-3xl 2xl:text-5xl text-gray-800">${{totalBudget}} </h3>
      <small class="text-gray-400 text-xs md:text-sm">Total Budget</small>
    </div>
  </div>

  <div class="relative shadow-md col-span-6 md:col-span-4 row-span-1 rounded-lg overflow-hidden">
    <div class="text-center inline-flex absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <svg class="stroke-current w-8 md:w-9 2xl:w-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
      <div class="text-center">
        <h3 class="font-semibold text-xl md:text-3xl 2xl:text-5xl text-gray-800">${{monthlyIncome}}</h3>
        <small class="text-gray-400 text-xs md:text-sm">Monthly Income</small>
      </div>
    </div>
  </div>

  <div class="relative shadow-md col-span-6 md:col-span-4 row-span-1 rounded-lg overflow-hidden">
    <div class="text-center inline-flex absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <svg class="stroke-current w-8 md:w-9 2xl:w-12 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
      <div class="text-center">
        <h3 class="font-semibold text-xl md:text-3xl 2xl:text-5xl text-gray-800">${{monthlyExpenses}}</h3>
        <small class="text-gray-400 text-xs md:text-sm">Monthly Expenses</small>
      </div>
    </div>
  </div>

</template>

<script>
import { computed, watchEffect } from 'vue'
import dayjs from 'dayjs'

export default {
  props: ['actions'],
  setup(props) {

    const monthlyIncome = computed(() => {
      let monthlySum = 0
      // Check if record type is equal to 'income', then check if it's current month
      const monthlyAmounts = props.actions.filter((item) => {
        if (item.type === 'income') {
          return dayjs(item.date).isSame(dayjs().format('DD MMM YYYY'), 'month')
        }
      })
      // Update monthlySum variable by valid amounts
      monthlyAmounts.map((item) => {
        monthlySum += parseFloat(item.amount)
      })
      return monthlySum.toFixed(2)
    })

    const monthlyExpenses = computed(() => {
      let monthlySum = 0
      // Check if record type is equal to 'expense', then check if it's current month
      const monthlyAmounts = props.actions.filter((item) => {
        if (item.type === 'expense') {
          return dayjs(item.date).isSame(dayjs().format('DD MMM YYYY'), 'month')
        }
      })
      // Update monthlySum variable by valid amounts
      monthlyAmounts.map((item) => {
        monthlySum += parseFloat(item.amount)
      })
      // Change negative value to positive one
      return Math.abs(monthlySum.toFixed(2))
    })

    const totalBudget = computed(() => {
      let totalSum = 0
      props.actions.map((item) => {
        totalSum += parseFloat(item.amount)
      })
      return totalSum.toFixed(2)
    })
  
    return { totalBudget, monthlyIncome, monthlyExpenses }
  }
}
</script>