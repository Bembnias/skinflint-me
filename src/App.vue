<template>
  <div class="grid grid-cols-10 auto-rows-max">
    <Sidebar />
    <div class="col-span-8">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue'
export default {
  components: { Sidebar }
}
</script>