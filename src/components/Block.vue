<script setup>
defineProps({ pathName: String });
</script>
<template>
  <div class="flex flex-col h-10 justify-center items-center">
    <button
      class="bg-slate-500 p-3 rounded-xl text-white text-xl font-bold hover:bg-slate-600 active:bg-slate-700 transition border-none"
    >
      {{ pathName }}
    </button>
  </div>
</template>
