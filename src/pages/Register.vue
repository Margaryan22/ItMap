<script></script>
<template>
  <div class="flex flex-col min-h-screen justify-center items-center">
    <b class="font-sans text-5xl mb-8 text-slate-600">Register in WhyIt</b>
    <b class="font-sans text-3xl mb-4 text-slate-500"
      >Please, fill in the fields</b
    >
    <div class="flex flex-col w-50">
      <input
        class="border-slate-300 border-2 mb-2 rounded-xl p-3 hover:border-slate-400 transition focus:border-slate-500 focus:outline-none focus:ring-0"
        placeholder="nickname"
      />
      <input
        class="border-slate-300 border-2 mb-4 rounded-xl p-3 hover:border-slate-400 transition focus:border-slate-500 focus:outline-none focus:ring-0"
        placeholder="password"
      />
      <input
        class="border-slate-300 border-2 mb-4 rounded-xl p-3 hover:border-slate-400 transition focus:border-slate-500 focus:outline-none focus:ring-0"
        placeholder="email address"
      />

      <button
        class="font-bold bg-slate-500 p-3 rounded-xl text-white text-xl hover:bg-slate-600 active:bg-slate-700 transition border-none"
      >
        Register
      </button>
    </div>
    <router-link to="/">
      <button class="mt-4 font-bold text-slate-400">Back to Welcome</button>
    </router-link>
  </div>
</template>
