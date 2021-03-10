<template>
  <div class="h-screen">
    <h1 class="text-center text-gray-800 text-4xl pt-5 font-semibold">History</h1>
    <p class="text-center text-gray-500 text-xl pt-2">Your full time records history</p>
    <div class="flex px-9 pt-5 w-1/2 mx-auto">
      <LitepieDatepicker
        userange
        :formatter="formatter"
        placeholder="Select date range"
        v-model="dateValue"
      ></LitepieDatepicker>
    </div>
    <p @click="showDate" class="text-xl cursor-pointer text-center">Show date</p>
    <div class="pt-5 overflow-y-scroll">
      <HistoryRecord v-for="data in actions" :key="data.id" :data="data"/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import LitepieDatepicker from 'litepie-datepicker'
import getActions from '@/composables/getActions'
import HistoryRecord from '@/components/dashboard/HistoryRecord'

export default {
  components: { HistoryRecord, LitepieDatepicker },
  setup() {
    const { actions, error, load } = getActions()

    load()

    const dateValue = ref([])
    const formatter = ref({
      date: 'DD MMM YYYY',
      month: 'MMM'
    })

    const showDate = () => {
      console.log(dateValue.value)
    }
    return { actions, dateValue, formatter, showDate }
  }
}
</script>

<style>

</style>