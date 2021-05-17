<template>
    <form @submit.prevent="handleSubmit" class="w-2/3 md:w-1/2 lg:w-1/3 mx-auto text-center">
    <h3 class="text-3xl py-4">Sign in</h3>
    <GoogleAuth methodMsg="Sing in"/>

    <div class="my-5 inline-flex w-full">
      <div class="inline-divider mt-2"></div>
      <p class="mx-1 text-sm text-gray-500 mx-auto">Or sign in with email</p>
      <div class="inline-divider mt-2"></div>
    </div>

    <p v-if="error" class="border-2 border-red-500 p-2 rounded-lg my-4 w-full text-red-500 text-sm">{{error}}</p>

    <input type="email" class="border-b w-full p-2 mt-4" placeholder="Email" v-model="email" required>
    <input type="password" class="border-b w-full p-2 mt-4 mb-2" placeholder="Password" v-model="password" required>

    <button class="bg-emerald text-white p-2 rounded-lg mt-5 mb-3 cursor-pointer w-full" type="submit">
      <span v-if="!isPending">Sign in</span>
      <i v-else class='bx bx-loader text-lg animate-spin'></i>
    </button>

    <router-link :to="{ name: 'SignUp' }" class="text-gray-500 text-sm">
      Don't have an account? 
      <span class="text-gray-700 font-bold">Sign up here</span>
    </router-link>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../../composables/useLogin'
import useSignup from '../../composables/useSignup'
import { useRouter } from 'vue-router'
import GoogleAuth from '@/components/auth/GoogleAuth.vue'

export default {
  components: { GoogleAuth },
  setup() {
    const { error, isPending, login } = useLogin()
    const { googleSignup } = useSignup()
    const router = useRouter()

    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      await login(email.value, password.value)
      !error.value && router.push({ name: 'Home' })
    }

    const openGoogleSignIn = async () => {
      await googleSignup()
      !error.value && router.push({ name: 'Home' })
    }
    
    return { email, password, handleSubmit, openGoogleSignIn, error, isPending }
  }
}
</script>

<style scoped>

.inline-divider {
  min-width: 30%;
  height: 1px;
  background-color: #E5E7EB;
}

.bg-emerald {
  background-color: #2ecc71;
}

</style>