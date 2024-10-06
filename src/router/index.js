import { createRouter, createWebHistory } from 'vue-router';
import HomeTemplate from '../pages/HomeTemplate.vue';
import LogIn from '../pages/LogIn.vue';
import Register from '../pages/Register.vue';
import AboutUs from '../components/AboutUs.vue';
import ChoosePath from '../pages/ChoosePath.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeTemplate', component: HomeTemplate },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: LogIn,
    },
    {
      path: '/choose_your_path',
      name: 'Path',
      component: ChoosePath,
    },
    {
      path: '/about_us',
      name: 'AboutUs',
      component: AboutUs,
    },
  ],
});

export default router;
