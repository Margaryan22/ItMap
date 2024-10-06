<script setup>
import { RouterLink } from 'vue-router';
import { RouterView } from 'vue-router';
const slogan1440 = ')Choose your path and make dream come true!(';
const slogan768 = ')Choose your path!(';
</script>
<template>
  <header class="sm:mx-2 mt-4" v-auto-animate>
    <div
      class="flex justify-between items-center mx-auto font-mono font-bold text-sm select-none md:text-base md:gap-18 lg:text-lg xl:text-xl xl:mx-4"
    >
      <div class="flex justify-between items-center gap-8 md:gap-20 lg:gap-16">
        <RouterLink to="/"
          ><p
            class="text-slate-700 text-xl cursor-pointer hover:-translate-y-2 hover:translate-x-2 hover:underline transition md:text-2xl lg:text-3xl xl:text-5xl"
          >
            WhyIT
          </p></RouterLink
        >
        <p class="text-slate-500 text-xl hidden md:block lg:hidden xl:hidden">
          {{ slogan768 }}
        </p>
        <p
          class="text-slate-500 text-xl hidden lg:block xl:block lg:text-wrap md:hidden"
        >
          {{ slogan1440 }}
        </p>
      </div>
      <div class="flex justify-between items-center gap-8 md:gap-10 lg:gap-12">
        <div
          class="flex justify-between items-center gap-8 md:gap-10 lg:gap-12"
        >
          <RouterLink
            class="text-slate-600 hover:-translate-y-1 hover:-translate-x-[0.5px] transition"
            to="/about_us"
          >
            About
          </RouterLink>
          <RouterLink
            class="text-slate-600 hover:-translate-y-1 hover:-translate-x-[0.5px] transition"
            to="/choose_your_path"
            >Paths</RouterLink
          >
        </div>
        <div class="flex justify-between items-center gap-4 md:gap-8 lg:gap-4">
          <RouterLink to="/login"
            ><button
              class="bg-slate-400 px-2 py-2 rounded-xl w-14 text-white hover:-translate-y-1 transition md:w-16 xl:w-20"
            >
              LogIn
            </button></RouterLink
          >
          <RouterLink to="/register"
            ><button
              class="bg-slate-500 px-2 py-2 rounded-xl w-16 text-white hover:-translate-y-1 transition md:w-20"
            >
              SignUp
            </button></RouterLink
          >
        </div>
      </div>
    </div>
  </header>
  <router-view></router-view>
</template>
