import { createRouter, createWebHistory } from "vue-router";
import FreeViews from "../views/FreeViews/NavigationFView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: FreeViews,
      redirect: "Home",
      children: [
        {
          path: "/home",
          name: "Home",
          component: () => import("../views/FreeViews/HomeFView.vue")
        },
        {
          path: "/register",
          name: "Register",
          component: () => import("../views/FreeViews/RegisterFView.vue")
        }
      ]
    },
    {
      path: "/user",
      component: () => import("../user/pages/navigation-section.component.vue"),
      redirect: "Search",
      children: [
        {
          path: "/profile",
          name: "Profile",
          component: () => import("../user/pages/profile-section.component.vue")
        },
        {
          path: "/search",
          name: "Search",
          component: () => import("../user/pages/search-section.component.vue")
        },
        {
          path: "/shelter",
          name: "Shelter",
          component: () => import("../shelter/pages/shelter-section.component.vue")
        },
        {
          path: "/shelterProfile",
          name: "ShelterProfile",
          component: () => import("../shelter/pages/shelterProfile-section.component.vue")
        }
      ]
    }
  ],
});

export default router;
