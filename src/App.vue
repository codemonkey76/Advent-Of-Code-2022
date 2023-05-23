<script setup>
import {ref} from "vue";
import NavMenu from "./Nav/NavMenu.vue";
import { Bars3Icon } from '@heroicons/vue/20/solid'

const sidebarOpen = ref(false)

</script>

<template>
  <div>
    <NavMenu v-model:sidebarOpen="sidebarOpen"></NavMenu>
    <div class="xl:pl-72">
      <!-- Sticky search header -->
      <div class="xl:hidden sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-white xl:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-5 w-5" aria-hidden="true" />
        </button>

      </div>
      <main class="lg:pr-96 p-4">
        <router-view />
      </main>
    </div>
  </div>

</template>
