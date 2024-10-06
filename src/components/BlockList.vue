<script setup>
import Block from './Block.vue';
import BlockHeader from './BlockHeader.vue';

defineProps({
  paths: Array,
});
</script>
<template>
  <BlockHeader />
  <div class="mx-2" v-auto-animate>
    <div
      class="grid grid-cols-1 mt-5 mx-auto gap-y-6 select-none sm2:grid-cols-2 sm2:gap-x-2 md:grid-cols-3 md:gap-x-2 lg:mx-5 lg:gap-x-5 lg:gap-y-8 xl:grid-cols-4"
    >
      <Block
        v-for="path in paths"
        :key="path.id"
        :name="path.name"
        :description="path.description"
        :cost="path.cost"
        :professions="path.professions"
      />
    </div>
  </div>
</template>
