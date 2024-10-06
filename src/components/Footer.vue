<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer
    class="bg-slate-600 bg-opacity-80 mt-auto flex-shrink-0 fixed bottom-0 text-slate-300 text-xs font-mono py-2 text-center w-full mx-auto md:text-base md:h-20 md:py-4"
    v-auto-animate
  >
    <p>&copy; {{ currentYear }} WhyIT. All rights reserved.</p>
    <nav class="mt-2" v-auto-animate>
      <ul class="flex justify-center space-x-6">
        <li><a href="/about_us" class="hover:underline">About Us</a></li>
        <li><a href="/contact" class="hover:underline">Contact</a></li>
        <li><a href="/privacy" class="hover:underline">Privacy Policy</a></li>
      </ul>
    </nav>
  </footer>
</template>
