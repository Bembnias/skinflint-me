import { ref } from 'vue'
import { projectAuth, googleProvider } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

// Standard email singup
const emailSignup = async (email, password, displayName) => {
  error.value = null
  isPending.value = true

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    isPending.value = true
    if (!res) {
      throw new Error('Could not complete signup')
    }
    await res.user.updateProfile({ displayName })
    error.value = null
    isPending.value = false
    console.log(res)
    
    return res
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message
    isPending.value = false
  }
}

// Google signup (popup)
// const openGoogleSignup = () => {
//   isPending.value = true

//   projectAuth.signInWithPopup(googleProvider).then(() => {
//     router.push({ name: 'Home' })
//     error.value = null
//     isPending.value = false

//   }).catch((err) => {
//     console.log(err.message)
//     error.value = err.message
//     isPending.value = false

//   })
// }

const googleSignup = async () => {
  error.value = null
  isPending.value = true

  try {
    const res = await projectAuth.signInWithPopup(googleProvider)

    if (!res) {
      throw new Error('Could not complete signup')
    }
    error.value = null
    isPending.value = false
    console.log(res)

  } catch (err) {
    console.log(err.message)
    error.value = err.message
    isPending.value = false
  }
}

const useSignup = () => {
  return { error, emailSignup, googleSignup, isPending }
}

export default useSignup