<template>
  <div class="mx-9 my-2 ">
      <div class="flex justify-between my-3 border-b-2 border-gray-300 border-opacity-20 pb-2">
        <div class="flex">
            <div :class="bgColorCheck" class="relative text-lg h-8 w-8 2xl:h-10 2xl:w-10 bg-red-300 rounded-full content-center">
                <i :class="data.categoryIcon" class="bx text-white absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></i>
            </div>
            <p class="ml-3 mt-2"> {{data.name}} </p>
        </div>

        <p class="text-gray-400 mt-2"> {{data.date}} </p>

        <p class="text-gray-400 mt-2"><span :class="txtColorCheck" class="font-semibold"> {{data.amount}} </span> USD </p>
      </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: [ 'data' ],
    setup(props) {
        const data = props.data

        // Set color classes based on transfer category
        const bgColorCheck = computed(() =>{
            return {
                'bg-red-300': data.type === 'expense',
                'bg-green-200': data.type === 'income'
            }
        })

        const txtColorCheck = computed(() => {
            return {
                'text-red-500': data.type === 'expense',
                'text-green-500': data.type === 'income'
            }
        })

        return { data, bgColorCheck, txtColorCheck }
    }
}
</script>

<style>

</style>