<template>
  <p @click="openGoogleSignup" class="bg-blue-600 text-white p-2 rounded-lg my-4 cursor-pointer">{{ methodMsg }} using <span class="font-semibold">Google account</span></p>
</template>

<script>
import useSignup from '../../composables/useSignup'
import { useRouter } from 'vue-router'

export default {
    props: { methodMsg: String },
    setup(props) {
        const { error, googleSignup } = useSignup()
        const router = useRouter()

        const openGoogleSignup = async () => {
            await googleSignup()
            !error.value && router.push({ name: 'Home' })
        }

        return { openGoogleSignup, error }
    }
}
</script>

<style>

</style>