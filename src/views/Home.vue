<template>
  <div class="grid grid-cols-10 auto-rows-max">
    <Sidebar />
    <div class="col-span-8"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/layout/Sidebar.vue'

export default {
  name: 'Home',
  components: { Sidebar }
}
</script>
