import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/landingpage/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage,
    },
  ],
});

export default router;