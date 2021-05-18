<template>
  <div class="w-full py-2 shadow-md rounded-md">
    <h5 class="text-xl p-2">Categories manager</h5>
    <form class="grid grid-cols-3 p-2 gap-2" @submit.prevent="handleSubmit">
      <input class="border-b" type="text" v-model="categoryName" placeholder="Category name" required>
      <select class="appearance-none border-b" v-model="selectedIcon" required>
        <option value="" disabled>Choose Icon</option>
        <option 
          v-for="icon in icons"
          :key="icon.id" 
          :value="{categoryIcon: icon.iconCode}"
          > 
          {{icon.iconName}}
        </option>
      </select>
      <input class="appearance-none bg-green-200 rounded-full text-white py-1  cursor-pointer" type="submit" value="Add category">
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import icons from './icons'

export default {
  setup() {

    const categoryName = ref('')
    const selectedIcon = ref('')

    const handleSubmit = () => {
      console.log(categoryName.value, selectedIcon.value.categoryIcon)
    }

    return { categoryName, selectedIcon, icons, handleSubmit }
  }
}
</script>

<style>

</style>