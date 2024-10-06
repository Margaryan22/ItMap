<script setup>
import NavBar from './NavBar.vue';
</script>
<template>
  <NavBar />
  <div
    class="flex flex-col items-center text-center mx-auto -mt-20 gap-y-14 select-none justify-center h-screen"
  >
    <div>
      <h1 class="text-xl text-slate-600 font-bold sm2:text-2xl">About Us</h1>
      <p
        class="text-slate-500 text-base font-semibold w-60 text-wrap break-words text-center mt-2 sm2:w-96 sm2:text-lg"
      >
        At WhyIT, we're passionate about empowering individuals to acquire new
        skills and knowledge that can transform their lives. Our mission is to
        provide high-quality online courses that are accessible, engaging, and
        affordable.
      </p>
    </div>
    <div>
      <h1 class="text-xl text-slate-600 font-bold sm2:text-2xl">Our Story</h1>
      <p
        class="text-slate-500 text-base font-semibold w-60 text-wrap break-words text-center mt-2 sm2:w-96 sm2:text-lg"
      >
        We believe that education should be a lifelong journey, not a one-time
        event. That's why we created WhyIT - to make it easy for anyone to learn
        new things, anytime, anywhere.
      </p>
    </div>
  </div>
</template>
