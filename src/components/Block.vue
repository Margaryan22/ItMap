<script setup>
defineProps({
  name: String,
  description: String,
  cost: Number,
  professions: Array,
});
</script>
<template>
  <router-link
    to="/choose_your_path"
    class="flex flex-col font-mono border-l-4 border-b-4 border-slate-300 bg-slate-200 gap-2 mx-auto rounded-2xl w-80 p-2 shadow-lg cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:z-10 transition md:w-56 lg:w-80"
    v-auto-animate
  >
    <p class="text-slate-600 text-sm font-bold text-wrap">{{ name }}.</p>
    <p class="text-slate-500 text-xs text-wrap">
      {{ description }}
    </p>
    <p class="text-slate-500 text-xs text-wrap">cost:{{ cost }}$</p>
    <p class="text-slate-600 text-xs font-bold text-wrap">
      {{ professions.join(', ') }}
    </p>
  </router-link>
</template>
