import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import SearchView from "../components/SearchView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    }
  ],
});

export default router;
