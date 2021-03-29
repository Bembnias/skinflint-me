<template>
  <div class="shadow-md col-span-6 row-span-3 rounded-lg">
    <h5 class="mt-5 ml-9 mb-9 2xl:text-4xl font-semibold">Top Expense Categories</h5>
      <div class="mx-auto w-full xl:w-10/12 2xl:w-8/12">
        <div v-if="series">
          <apexchart type="donut" :options="options" :series="series"></apexchart>
        </div>
        <div v-else>Loading data</div>
      </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: ['actions'],
  setup(props) {

    // SEPARATE TOP 3 CATEGORIES FOR CHART LABELS
    const options = computed(() => {
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
      return {
        labels: reducedCategoriesArray.sort((a, b) => {
          return parseFloat(a.amount) - parseFloat(b.amount)
        }).slice(0,3).map((item) => {
          return item.category
        })
      }
    })

    // SEPARATE TOP 3 AMOUNTS FOR CHART SERIES
    const series = computed(() => {
      const allExpenses = props.actions.filter((item) => {
        return item.type === 'expense'
      })
      
      const onlyCategoriesAndAmounts = allExpenses.map((item) => {
        return {
          category: item.category,
          amount: item.amount
        }
      })

      const reducedCategories = onlyCategoriesAndAmounts.reduce((a, b) => {
        a[b.category] = (a[b.category] || 0) + b.amount;
        return a;
      }, {});

      let reducedCategoriesArray = []
      Object.keys(reducedCategories).map((key) => reducedCategoriesArray.push({
        category: key,
        amount: reducedCategories[key]
      }))

      return reducedCategoriesArray.sort((a, b) => {
        return parseFloat(a.amount) - parseFloat(b.amount)
      }).slice(0,3).map((item) => {
        return -item.amount
      })
    })

    return { options, series }
  }
}
</script>

<style>

</style>