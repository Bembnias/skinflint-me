<template>
  <section class="lg:h-screen p-8 overflow-hidden">
    <div class="text-center pb-2">
      <h1 class="text-2xl">  Your Account Settings</h1>
      <i class='bx bxs-cog text-2xl'></i>
    </div>

    <Categories />
    
  </section>
</template>

<script>
import Categories from '@/components/settings/Categories.vue'

export default {
  components: { Categories },
  setup() {

  }
}
</script>

<style>

</style>