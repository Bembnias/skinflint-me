<template>
  <section class="h-screen grid grid-cols-12 grid-rows-6 gap-4 p-8">
    <StatTabs />
    <ChartTab />
    <LatestTab />
    <IncomeInputTab />
    <ExpenseInputTab />
  </section>
</template>

<script>
import StatTabs from '@/components/dashboard/StatTabs'
import ChartTab from '@/components/dashboard/ChartTab'
import LatestTab from '@/components/dashboard/LatestTab'
import IncomeInputTab from '@/components/dashboard/IncomeInputTab'
import ExpenseInputTab from '@/components/dashboard/ExpenseInputTab'

export default {
  name: 'Home',
  components: { StatTabs, ChartTab, LatestTab, IncomeInputTab, ExpenseInputTab}
}
</script>