import { createRouter, createWebHistory } from "vue-router";
import FreeViews from "../views/FreeViews/NavigationFView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: FreeViews,
      redirect: "Home",
      props:true,
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
        },
        {
          path: "/registerShelter",
          name: "RegisterShelter",
          component: () => import("../views/FreeViews/RegisterShelterFView.vue"),
          children:[
            {
              path: "/registerShelter",
              name: "FirstStep",
              props: true,
              component: () => import("../components/personalinformation-component.vue")
            },
            {
              path: "/registerShelter/policy",
              name: "SecondStep",
              props: true,
              component: () => import("../components/policy-component.vue")
            },
            {
              path: "/registerShelter/lastStep",
              name: "LastStep",
              props: true,
              component: () => import("../components/lastStep-component.vue")
            }

          ]
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
          path: "/shelterSection",
          name: "ShelterSection",
          component: () => import("../shelter/pages/shelter-section.component.vue")
        },
        {
          path: "/shelterProfile",
          name: "ShelterProfile",
          component: () => import("../shelter/pages/shelterProfile-section.component.vue")
        }
      ]
    },
    {
      path: "/shelterSection",
      component: () => import("../shelter/pages/navigation-section.component.vue"),
      redirect: "SearchSection",
      children: [
        {
          path: "/shelterProfile",
          name: "ShelterProfile",
          component: () => import("../shelter/pages/shelterProfile-section.component.vue")
        },
        {
          path: "/search",
          name: "SearchSection",
          component: () => import("../user/pages/search-section.component.vue")
        },
        {
          path: "/shelter",
          name: "Shelter",
          component: () => import("../shelter/pages/shelter-section.component.vue")
        },
      ]
    }
  ],
});

export default router;
