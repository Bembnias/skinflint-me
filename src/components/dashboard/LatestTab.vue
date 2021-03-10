<template>
  <div class="container shadow-md col-span-6 row-span-3 rounded-lg overflow-y-auto">
    <h5 class="mt-5 ml-9 2xl:text-4xl font-semibold">Latest</h5>
    <div v-if="actions.length" class="my-9">
      <LatestItem v-for="data in actions" :key="data.id" :data="data"/>
    </div>
    <div v-else class="text-center"> No actions yet </div>

  </div>
</template>

<script>
import getActions from '../../composables/getActions'

import { computed } from 'vue'
import LatestItem from '../dashboard/LatestItem.vue'

export default {
  components: { LatestItem },
  setup() {
    const { actions, error, load } = getActions()

    load()

    // const latestHistory = computed( async () => {
    //   return await actions.slice(0, 5)
    // })

    return { actions, error }
  }
}
</script>

<style>

</style>