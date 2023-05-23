<script setup>
import {ref} from 'vue'
import inputText from '../assets/day2.txt?raw'

const output = ref('Output will go here')
const input = ref(inputText)

const pointsMap = {
  "A": {"X": 3, "Y": 6, "Z": 0},
  "B": {"X": 0, "Y": 3, "Z": 6},
  "C": {"X": 6, "Y": 0, "Z": 3}
}

const shapeScoreMap = {
  "A": 1,
  "B": 2,
  "C": 3,
  "X": 1,
  "Y": 2,
  "Z": 3
}

const points = (a, b) => {
  if (pointsMap[a] && pointsMap[a][b] !== undefined) {
    return pointsMap[a][b] + shapeScoreMap[b]
  } else {
    throw new Error('Invalid arguments')
  }
}
const processInput = () => {
  const rounds = input.value.split('\n').filter(round => round.trim() !== '');
  const roundPoints = rounds.map((round) => {
    const [a, b] = round.split(' ').map(arg => arg.trim());
    return points(a, b);
  })
  output.value = roundPoints.reduce((a,b) => a+b, 0)
}

</script>

<template>
  <div class="space-y-2">
    <label for="Input" class="block text-sm font-medium leading-6 text-gray-900">Input</label>
    <textarea id="about" name="about" rows="3"
              class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="input"></textarea>
    <button @click="processInput" type="button"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      Process
    </button>

    <div v-text="output"
         class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></div>
  </div>
</template>
