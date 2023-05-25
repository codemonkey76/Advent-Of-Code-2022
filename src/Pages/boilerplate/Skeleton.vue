<script setup>
import {ref} from 'vue'
import inputText from '../assets/.txt?raw'

const output = ref('Output will go here')
const input = ref(inputText)

const processInput = () => {

}

</script>
<template>
    <div class="space-y-2">
        <div class="text-3xl text-gray-100 font-bold">Day </div>
        <p class="text-gray-200 text-xl">Go <a href="https://adventofcode.com/2022/day/" class="text-blue-400 hover:underline">here</a> to check the description of the task.</p>
        <label for="Input" class="block text-sm font-medium leading-6 text-gray-200">Input</label>
        <textarea id="about" name="about" rows="10"
                  class="bg-gray-800 block w-full rounded-md border-0 py-1.5 px-3 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  v-model="input"></textarea>
        <button @click="processInput" type="button"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Process
        </button>

        <div v-text="output"
             class="bg-gray-800 block w-full rounded-md border-0 py-1.5 px-3 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></div>
    </div>
</template>
