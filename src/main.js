import { createApp } from "vue";
import "./style.css";
import Register from "./pages/Register.vue";
import Welcome from "./pages/Welcome.vue";
import BlockList from "./components/BlockList.vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);
const routes = [
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
app.use(router);
app.mount("#app");
