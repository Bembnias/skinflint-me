<template>
  <div class="relative h-screen overflow-y-scroll pb-5">

    <h1 class="text-center text-gray-800 text-4xl pt-5 font-semibold">History</h1>
    <p class="text-center text-gray-500 text-xl pt-2">Your full time records history</p>
    
    <div class="flex px-9 pt-5 w-1/2 mx-auto">
      <div class="flex-1">
        <LitepieDatepicker
          userange
          :formatter="formatter"
          placeholder="Select date range"
          v-model="dateRange"
        ></LitepieDatepicker>
      </div>
    </div>

    <div v-if="filteredActions.length" class="pt-5">
      <HistoryRecord v-for="data in filteredActions" :key="data.id" :data="data"/>
    </div>
    <div v-else class="text-center text-gray-300 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <p class="text-xl">No actions yet</p>
      <i class='bx bx-message-square-x text-4xl'></i>
    </div>

  </div>
</template>

<script>
import { computed, ref } from 'vue'
import getActions from '@/composables/getActions'
import HistoryRecord from '@/components/dashboard/HistoryRecord'

import LitepieDatepicker from 'litepie-datepicker'
import dayjs from 'dayjs'

export default {
  components: { HistoryRecord, LitepieDatepicker },
  setup() {
    const { actions, error, load } = getActions()

    load()
    
    // Dayjs plugin for checking date range
    const isBetween = require('dayjs/plugin/isBetween')
    dayjs.extend(isBetween)

    const dateRange = ref([])
    const formatter = ref({
      date: 'DD MMM YYYY',
      month: 'MMM'
    })

    const filteredActions = computed(() => {
      if (!dateRange.value.length) {
        return actions.value
      } else {
        return actions.value.filter(item => {
          return dayjs(item.date).isBetween(dateRange.value[0], dateRange.value[1], null, '[]')
        })
      }
    })

    return { filteredActions, dateRange, formatter }
  }
}
</script>

<style>

</style>