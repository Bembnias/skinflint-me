<template>
    <div class="mt-16 absolute z-50 w-full component-mobile-height lg:mt-0 lg:relative lg:col-span-2 lg:h-screen bg-gradient-to-r from-indigo-900 to-indigo-800">
        <div class="w-1/2 lg:w-8/12 mx-auto mt-7">
            <img class="hidden lg:block w-full" src="../../assets/img/skinflint-logo.svg" alt="Skinflint logo">

            <div v-if="user !== null" class="flex flex-col mt-9 space-y-4">
                <router-link :to="{ name: 'Home' }" class="flex flex-row">
                    <div class="w-7">
                        <svg class="stroke-current stroke-1 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                    </div>
                    <span class="text-white text-lg ml-2">Dashboard</span>
                </router-link>
                <router-link :to="{ name: 'History' }" class="flex flex-row">
                    <div class="w-7">
                        <svg class="stroke-current stroke-1 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span class="text-white text-lg ml-2">History</span>
                </router-link>
                <router-link :to="{ name: 'Settings' }" class="flex flex-row">
                    <div class="w-7">
                        <svg class="stroke-current stroke-1 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                    </div>
                    <span class="text-white text-lg ml-2">Settings</span>
                </router-link>
            </div>

            <div v-else class="flex flex-col mt-9 space-y-4">
                <router-link :to="{ name: 'SignIn' }" class="flex flex-row">
                    <div class="w-7">
                        <svg class="stroke-current stroke-1 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span class="text-white text-lg ml-2">Login</span>
                </router-link>
                <router-link :to="{ name: 'SignUp' }" class="flex flex-row">
                    <div class="w-7">
                        <svg class="stroke-current stroke-1 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
                    </div>
                    <span class="text-white text-lg ml-2">Sign up</span>
                </router-link>
            </div>

            <div v-if="user" @click="handleLogout" class="flex flex-col content-center mt-9">
                <div class="mx-auto h-0.5 w-full bg-white bg-opacity-10"></div>
                <div class="flex mt-4 mx-auto w-8 h-8 border-2 border-white rounded-full content-center border-opacity-30 hover:border-opacity-100 cursor-pointer">
                    <svg class="mx-auto w-5 stroke-current stroke-1 text-white text-opacity-30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                </div>
                <p class="text-center text-white m-2">Hi, {{user.displayName}}!</p>
            </div>
            <div v-else class="mt-9">
                <div class="mx-auto h-0.5 w-full bg-white bg-opacity-10"></div>
                <p class="text-center text-white m-2">Welcome!</p>
            </div>
        </div>
    </div>
</template>

<script>
import useLogout from '../../composables/useLogout'
import getUser from '../../composables/getUser'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const router = useRouter()
        const { error, logout } = useLogout()
        const { user } = getUser()

        const handleLogout = async () => {
            await logout()

            !error.value && router.push({ name: 'SignIn' }) && console.log('User logged out')
        }

        return { handleLogout, user }
    }
}
</script>