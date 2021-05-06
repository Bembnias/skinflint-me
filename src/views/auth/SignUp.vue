<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <p>Join skinflint and track your budget</p>
    <input type="text" class="border-b" placeholder="Name" v-model="name">
    <button type="submit">Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const name = ref('')

    const handleSubmit = () => {
      console.log(name.value)
    }
    
    return { name, handleSubmit }
  }
}
</script>

<style>

</style>