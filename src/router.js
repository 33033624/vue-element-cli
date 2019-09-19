import Vue from "vue";
import VueRouter from "vue-router";
import RouterConfig from "./config/router.config";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "main" */ "./components/main.vue"),
      children: RouterConfig
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/login/login.vue")
    },
    {
      path: "*",
      redirect: "/home"
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (Vue.ls.get("token")) {
    /* has token */
    if (to.name == "login") {
      next({
        name: "home"
      });
    } else {
      next();
    }
  } else {
    if (to.name === "login") next();
    else {
      next({ name: "login" });
    }
    // next();
  }
});

export default router;
