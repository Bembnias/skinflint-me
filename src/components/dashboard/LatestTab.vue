<template>
  <div class="container relative shadow-md col-span-12 md:col-span-6 row-span-3 rounded-lg overflow-y-auto">
    <h5 class="mt-5 ml-9 2xl:text-4xl font-semibold">Latest</h5>
    <div v-if="latestHistory.length" class="my-9">
      <HistoryRecord v-for="data in latestHistory" :key="data.id" :data="data"/>
    </div>
    <div v-else class="text-center text-gray-400 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <p>No actions yet</p>
      <i class='bx bx-message-square-x text-2xl'></i>
    </div>

  </div>
</template>

<script>
import { computed } from 'vue'
import HistoryRecord from './HistoryRecord'

export default {
  props: ['actions'],
  components: { HistoryRecord },
  setup(props) {
    const latestHistory = computed(() => {
      return props.actions.reverse().slice(0, 5)
    })

    return { latestHistory }
  }
}
</script>

<style>

</style>