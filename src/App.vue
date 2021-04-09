<template>
  <div class="grid grid-cols-10 auto-rows-max">
    <Sidebar @click="closeMenu" class="lg:block" :class="{ hidden: isClose }"/>
    <div class="col-span-10 lg:col-span-8">
      <TopMenu @menu="openMenu" />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue'
import TopMenu from '@/components/layout/TopMenu.vue'
import { ref } from 'vue'

export default {
  components: { Sidebar, TopMenu },
  setup() {
    const isClose = ref(true)

    const openMenu = (openClose) => {
      isClose.value = openClose
    }

    const closeMenu = () => {
      isClose.value = true
    }

    return { isClose, openMenu, closeMenu }
  }
}
</script>

<style>
  .component-mobile-height {
    height: calc(100% - 64px);
  }
</style>