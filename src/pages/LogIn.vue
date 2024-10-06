<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
</script>
<template>
  <div
    class="select-none flex flex-col min-h-screen justify-center items-center transition"
    v-auto-animate
  >
    <b class="font-sans text-6xl mb-12 text-slate-600">)Welcome to WhyIT(</b>

    <div class="flex flex-col gap-4 mb-6" v-auto-animate>
      <input
        v-model="email"
        type="email"
        placeholder="your email address"
        @input="onChangeEmailInput"
        class="border-slate-200 border-2 text-slate-600 rounded-xl p-3 hover:border-slate-300 transition focus:border-slate-400 focus:outline-none focus:ring-0 required:*@gmail border-warning"
      />
      <input
        v-model="password"
        type="password"
        @input="onChangePasswordInput"
        class="border-slate-200 border-2 rounded-xl p-3 hover:border-slate-300 transition focus:border-slate-400 focus:outline-none focus:ring-0"
        placeholder="password"
      />
    </div>

    <div class="flex flex-row gap-3">
      <router-link to="/choose_your_path">
        <button
          v-on:click="logInBtn"
          class="w-24 font-bold bg-slate-500 p-3 rounded-xl text-white text-xl hover:bg-slate-600 active:bg-slate-700 transition"
        >
          LogIn
        </button>
      </router-link>
      <router-link to="/register">
        <button
          class="w-24 font-bold bg-slate-500 p-3 rounded-xl text-white text-xl hover:bg-slate-600 active:bg-slate-700 transition"
        >
          Register
        </button>
      </router-link>
    </div>
  </div>
</template>
