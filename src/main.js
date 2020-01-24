import Vue from "vue";
import VueRouter from "vue-router";
import Nprogress from "nprogress";

// Aquí importamos las rutas de nuestra aplicación
import router from "./router";

import App from "./App.vue";

// include styles file
import "./lib/VueStyles";

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  Nprogress.start();
  document.title = `42 Madrid - ${to.meta.title}`;
  next();
});
// navigation guard after each
router.afterEach(() => {
  Nprogress.done();
});
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
