import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";




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
      component: () => import("../pet/pages/search-list.component.vue"),
    },
    {
      path: "/form",
      name: "form",
      component: () => import("../pet/pages/form-list.component.vue")
    }
  ],
});

export default router;
