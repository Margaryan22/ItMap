<script>
export default {
  name: "Welcome",
  methods: {
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
<template>
  <div class="flex flex-col min-h-screen justify-center items-center">
    <b class="font-sans text-6xl mb-12 text-slate-600">Welcome to WhyIt</b>

    <div class="flex flex-col gap-4 mb-6">
      <input
        class="border-slate-200 border-2 rounded-xl p-3 hover:border-slate-300 transition focus:border-slate-400 focus:outline-none focus:ring-0 required:*@gmail"
        placeholder="your email address"
      />
      <input
        class="border-slate-200 border-2 rounded-xl p-3 hover:border-slate-300 transition focus:border-slate-400 focus:outline-none focus:ring-0"
        placeholder="password"
      />
    </div>

    <div class="flex flex-row gap-10">
      <button
        v-on:click="logInBtn"
        class="font-bold bg-slate-500 p-3 rounded-xl text-white text-xl hover:bg-slate-600 active:bg-slate-700 transition"
      >
        LogIn
      </button>

      <button
        @click="goToRegister"
        class="font-bold bg-slate-500 p-3 rounded-xl text-white text-xl hover:bg-slate-600 active:bg-slate-700 transition"
      >
        Register
      </button>
    </div>
  </div>
</template>
