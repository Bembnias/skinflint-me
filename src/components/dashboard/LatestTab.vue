<template>
  <div class="container shadow-md col-span-6 row-span-3 rounded-lg overflow-y-auto">
    <h5 class="mt-5 ml-9 2xl:text-4xl font-semibold">Latest</h5>
    <div class="my-9">
      <LatestItem v-for="data in latestHistory" :key="data.id" :data="data"/>

    </div>

  </div>
</template>

<script>
import { computed } from 'vue'
import LatestItem from '../dashboard/LatestItem.vue'
export default {
  components: { LatestItem },
  setup() {
    const history = [
      {
        id: 1,
        type: 'expense',
        category: 'bxs-gift',
        name: 'Amy\'s Birthday',
        amount: -29.99,
        date: '15 mar. 17.30'
      },
      {
        id: 2,
        type: 'income',
        category: 'bx-money',
        name: 'March Paycheck',
        amount: 2800.00,
        date: '10 mar. 11.00'
      },
      {
        id: 3,
        type: 'expense',
        category: 'bxs-shopping-bag',
        name: 'Saturday shopping',
        amount: -66.40,
        date: '19 mar. 12.20'
      },
      {
        id: 4,
        type: 'income',
        category: 'bx-money',
        name: 'March Paycheck',
        amount: 2800.00,
        date: '10 mar. 11.00'
      },
      {
        id: 5,
        type: 'income',
        category: 'bx-money',
        name: 'March Paycheck',
        amount: 2800.00,
        date: '10 mar. 11.00'
      },
      {
        id: 6,
        type: 'income',
        category: 'bx-money',
        name: 'March Paycheck',
        amount: 2800.00,
        date: '10 mar. 11.00'
      },
    ]

    const latestHistory = computed(() => {
      return history.slice(0, 5)
    })

    return { latestHistory }
  }
}
</script>

<style>

</style>