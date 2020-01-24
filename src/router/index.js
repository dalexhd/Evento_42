import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../container/Full"),
      redirect: { name: "inicio" },
      children: [
        {
          path: "/inicio",
          component: () => import("../views/Inicio.vue"),
          name: "inicio"
        },
        {
          path: "/componentes",
          component: () => import("../views/Componentes.vue"),
          name: "componentes"
        }
      ]
    }
  ]
});
