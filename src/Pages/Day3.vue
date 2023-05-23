<script setup>
import {ref} from 'vue'
import inputText from '../assets/day3.txt?raw'

const output = ref('Output will go here')
const input = ref(inputText)

const commonCharacter = (string1, string2) => {
  const array1 = string1.split('');
  const array2 = string2.split('');

  return array1.find(item => array2.includes(item))
}

const priorityValue = (char) => {
  const asciiValue = char.charCodeAt(0);
  if (char >= 'a' && char <= 'z') {
    return asciiValue - 'a'.charCodeAt(0) + 1
  }

  if (char >= 'A' && char <= 'Z') {
    return asciiValue - 'A'.charCodeAt(0) + 27
  }

  throw new Error('Invalid input character. Expected a-z or A-Z')
}

const processInput = () => {
  const singleInput = input.value.split('\n').filter(round => round.trim() !== '');

  let priorities = singleInput.map((line) => {
    console.assert(line.length % 2 === 0, "Invalid line, expected even number of characters")
    const part1 = line.substring(0, line.length / 2)
    const part2 = line.substring(line.length / 2)
    return priorityValue(commonCharacter(part1, part2))
  })

  output.value = priorities.reduce((a,b) => a+b, 0)
}

</script>
<template>
  <div class="space-y-2">
    <div class="text-3xl text-gray-100 font-bold">Day 3</div>
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