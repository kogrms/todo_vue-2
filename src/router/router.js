import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Todos from "@/views/Todos";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/todos",
      // component: () => import('./views/Todos.vue')
      component: Todos,
    },
  ],
});
