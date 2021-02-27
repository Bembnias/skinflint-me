<template>
  <div class="mx-9 my-2 ">
      <div class="flex justify-between my-3 border-b-2 border-gray-300 border-opacity-20 pb-2">
        <div class="flex">
            <div class="h-8 w-8 2xl:h-10 2xl:w-10 bg-red-300 rounded-full content-center">
                <svg class="current-stroke text-white h-6 w-6 2xl:h-7 2xl:w-7 mx-auto pt-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
            </div>
            <p class="ml-3 mt-2">Amy's Birthday</p>
        </div>

        <p class="text-gray-400 mt-2">15 mar. 17.30</p>

        <p class="text-gray-400 mt-2"><span class="text-red-500 font-semibold"> {{number}} </span> USD </p>
      </div>
  </div>
</template>

<script>
export default {
    props: [ 'number' ],
    setup(props) {
        const number = props.number

        return { number }
    }
}
</script>

<style>

</style>