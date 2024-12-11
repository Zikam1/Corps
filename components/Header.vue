<template>
  <header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo Section -->
        <div class="flex-shrink-0">
          <!-- <img class="h-8" src="/logo.svg" alt="Logo"> -->
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-4">
          
          <a href="#" class="text-black hover:text-red-500 px-3 py-2 rounded-md text-lg font-medium">Resume</a>
          <a href="#" class="text-black hover:text-red-500 px-3 py-2 rounded-md text-lg font-medium">CV</a>
          <a href="#" class="text-black hover:text-red-500 px-3 py-2 rounded-md text-lg font-medium">Cover letter</a>
          <a href="#" class="text-black hover:text-red-500 px-3 py-2 rounded-md text-lg font-medium">Blog Post</a>
          <a href="#" class="text-black hover:text-red-500 px-3 py-2 rounded-md text-lg font-medium">About</a>
        </div>

        <!-- Search Bar (Optional) -->
        <!-- <div class="relative hidden md:block">
          <input
            type="text"
            class="w-full sm:w-64 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
        </div> -->

        <!-- Mobile Menu Icon -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-blue-600 text-white">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium">Home</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium">About</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium">Services</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium">Contact</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
