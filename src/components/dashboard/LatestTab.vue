<template>
  <div class="container shadow-md col-span-6 row-span-3 rounded-lg overflow-y-auto">
    <h5 class="mt-5 ml-9 2xl:text-4xl font-semibold">Latest</h5>
    <div class="my-9">
      <LatestItem number="-75" />
      <LatestItem number="-50" />
      <LatestItem number="-39.99" />
      <LatestItem number="-29.99" />

    </div>

  </div>
</template>

<script>
import LatestItem from '../dashboard/LatestItem.vue'
export default {
  components: { LatestItem }
}
</script>

<style>

</style>