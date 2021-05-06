<template>
  <nav class="lg:hidden flex justify-between items-center w-full h-16 space bg-gradient-to-r from-indigo-900 to-indigo-800">
    <div class="w-1/3 ml-8">
        <img class="w-full" src="../../assets/img/skinflint-logo.svg" alt="Skinflint logo">
    </div>
    <i @click="handleClick" class='bx bx-menu burger cursor-pointer mr-7'></i>
  </nav>
</template>

<script>
import { ref } from 'vue'
export default {
    
    setup(props, context) {
        const openClose = ref(true)

        const handleClick = () => {
            openClose.value = !openClose.value
            context.emit('menu', openClose.value)
        }

        return { handleClick }
    }
}
</script>

<style scoped>
    .burger {
        color: white;
        font-size: 3.5rem;
        padding: 0;
    }
</style>