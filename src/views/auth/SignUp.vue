<template>
  <form @submit.prevent="handleEmailSignup" class="w-2/3 md:w-1/2 lg:w-1/3 mx-auto text-center">
    <h3 class="text-3xl py-4">Sign up</h3>
    <GoogleAuth methodMsg="Sing up"/>

    <div class="my-5 inline-flex w-full">
      <div class="inline-divider mt-2"></div>
      <p class="mx-1 text-sm text-gray-500 mx-auto">Or sign up with email</p>
      <div class="inline-divider mt-2"></div>
    </div>

    <p v-if="error" class="border-2 border-red-500 p-2 rounded-lg my-4 w-full text-red-500 text-sm">{{error}}</p>

    <input type="text" class="border-b w-full p-2" placeholder="Name" v-model="name">
    <input type="email" class="border-b w-full p-2 mt-4" placeholder="Email" v-model="email">
    <input type="password" class="border-b w-full p-2 mt-4 mb-2" placeholder="Password" v-model="password">

    <button class="bg-emerald text-white p-2 rounded-lg mt-5 mb-3 cursor-pointer w-full" type="submit">Sign up</button>

    <router-link :to="{ name: 'SignIn' }" class="text-gray-500 text-sm">
      Already have an account? 
      <span class="text-gray-700 font-bold">Sign in here</span>
    </router-link>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../../composables/useSignup'
import { useRouter } from 'vue-router'
import GoogleAuth from '@/components/auth/GoogleAuth.vue'

export default {
  components: { GoogleAuth },
  setup() {
    const { error, emailSignup } = useSignup()
    const router = useRouter()

    const name = ref('')
    const email = ref('')
    const password = ref('')

    const handleEmailSignup = async () => {
      await emailSignup(email.value, password.value, name.value)
      !error.value && router.push({ name: 'Home' })
    }
    
    return { name, email, password, handleEmailSignup, error }
  }
}
</script>

<style scoped>

.inline-divider {
  width: 30%;
  height: 1px;
  background-color: #E5E7EB;
}

.bg-emerald {
  background-color: #2ecc71;
}

</style>