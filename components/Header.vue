<template>
  <header class="bg-gray-150 dark:bg-white shadow-md">
    <div class="container mx-auto px-6 md:px-10 py-4 flex justify-between items-center max-w-5xl">
      <!-- Logo -->
      <div class="text-2xl font-bold text-gray-900 dark:text-white">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <!-- Image Link -->
          <!-- <img src="../assets/coper-logo.png" alt="Clarionconcept Logo" class="w-72 h-24" /> -->Zikario Hub
        </NuxtLink>
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex space-x-6">
        <NuxtLink to="/" class="text-gray-600 dark:text-gray-300 hover:text-blue-500">Home</NuxtLink>
        <!-- <NuxtLink to="/projects" class="text-gray-600 dark:text-gray-300 hover:text-blue-500">Projects</NuxtLink> -->
        <NuxtLink to="/about" class="text-gray-600 dark:text-gray-300 hover:text-blue-500">About</NuxtLink>
        <NuxtLink to="/contact" class="text-gray-600 dark:text-gray-300 hover:text-blue-500">Contact</NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="flex items-center space-x-4">
        <!-- Dark Mode Toggle (Hidden on mobile) -->
        <button @click="toggleDarkMode" class="hidden md:block focus:outline-none">
          <svg v-if="isDarkMode" class="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <!-- Sun icon SVG for light mode -->
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m6.364 1.636l-.707-.707m4.243 4.243h-1M21 12h-1m-1.636 6.364l-.707.707m-4.243-4.243v1M12 21v1m-6.364-1.636l.707.707m-4.243-4.243h1M3 12h1m1.636-6.364l.707-.707M7.757 4.757l-.707.707M12 5a7 7 0 017 7h-1a6 6 0 00-6-6V5z" />
          </svg>
          <svg v-else class="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <!-- Moon icon SVG for dark mode -->
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m6.364 1.636l-.707-.707m4.243 4.243h-1M21 12h-1m-1.636 6.364l-.707.707m-4.243-4.243v1M12 21v1m-6.364-1.636l.707.707m-4.243-4.243h1M3 12h1m1.636-6.364l.707-.707M7.757 4.757l-.707.707M12 5a7 7 0 017 7h-1a6 6 0 00-6-6V5z" />
          </svg>
        </button>

        <!-- Search Icon (Hidden on mobile) -->
        <button class="hidden md:block text-gray-600 dark:text-gray-300 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m1.1-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"></path>
          </svg>
        </button>

        <!-- CTA Button -->
        <NuxtLink to="/" class="hidden md:inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Get Started
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isOpen = !isOpen" class="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none">
        <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden px-6 py-2 bg-white dark:bg-gray-900 space-y-2">
      <NuxtLink to="/" class="block text-gray-600 dark:text-gray-300">Home</NuxtLink>
      <!-- <NuxtLink to="/projects" class="block text-gray-600 dark:text-gray-300">Projects</NuxtLink> -->
      <NuxtLink to="/about" class="block text-gray-600 dark:text-gray-300">About</NuxtLink>
      <NuxtLink to="/contact" class="block text-gray-600 dark:text-gray-300">Contact</NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const isDarkMode = ref(false)

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
}
</script>
