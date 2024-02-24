// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/SignUp",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/HomePage",
    name: "HomePage",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
