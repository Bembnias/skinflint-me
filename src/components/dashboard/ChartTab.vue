<template>
  <div class="shadow-md col-span-6 row-span-3 rounded-lg">
    <h5 class="mt-5 ml-9 mb-9 2xl:text-4xl font-semibold">Top Expense Categories</h5>
    <div class="w-2/3 mx-auto">
      <div class="max-w-full">
        <apexchart type="donut" :options="options" :series="series"></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: ['actions'],
  setup(props) {
    const options = {
      labels: ['Shopping', 'Gifts', 'Paychecks'],
    }

    const series = [2000,1200,3700]

    const topCategories = computed(() => {
      // return array of expenses only
      const allExpenses = props.actions.filter((item) => {
        return item.type === 'expense'
      })
      
      // Return array of categories and amounts
      const onlyCategoriesAndAmounts = allExpenses.map((item) => {
        return {
          category: item.category,
          amount: item.amount
        }
      })

      // Add up amounts of same category
      const reducedCategories = onlyCategoriesAndAmounts.reduce((a, b) => {
        a[b.category] = (a[b.category] || 0) + b.amount;
        return a;
      }, {});
      //  convert to array
      let reducedCategoriesArray = []
      Object.keys(reducedCategories).map((key) => reducedCategoriesArray.push({
        category: key,
        amount: reducedCategories[key]
      }))

      // Sort by amounts and return top 3 categories
      return reducedCategoriesArray.sort((a, b) => {
        return parseFloat(a.amount) - parseFloat(b.amount)
      }).slice(0,3)
    })
    console.log(topCategories)
    return { options, series }
  }
}
</script>

<style>

</style>