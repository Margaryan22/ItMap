<script setup>
import { computed, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';
import { ref } from 'vue';

import NavBar from '../components/NavBar.vue';
import BlockList from '../components/BlockList.vue';

//запрос на получение информации о блоках(асинхронно,при первом рендеринге приложения)
onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://00fa9b94e3319c70.mokky.dev/paths'
    );
    paths.value = data;
  } catch (error) {
    console.log(error);
  }
});
const screenWidth = ref(window.innerWidth);
const paths = ref([]);
const numPathsToShow = ref(16); // initial number of paths to show

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

function handleResize() {
  screenWidth.value = window.innerWidth;
  updateNumPathsToShow();
}

function updateNumPathsToShow() {
  if (screenWidth.value < 654) numPathsToShow.value = 3;
  else if (screenWidth.value < 768 && screenWidth.value > 654)
    numPathsToShow.value = 4;
  else if (screenWidth.value < 1030 && screenWidth.value > 768)
    numPathsToShow.value = 6;
  else if (screenWidth.value < 1440 && screenWidth.value > 1030)
    numPathsToShow.value = 12;
  else if (screenWidth.value > 1440) numPathsToShow.value = 12;
}

const slicedPaths = computed(() => paths.value.slice(0, numPathsToShow.value));
</script>

<template>
  <NavBar />
  <BlockList :paths="slicedPaths" />
</template>
