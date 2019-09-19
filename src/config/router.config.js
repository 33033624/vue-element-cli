const RouterConfig = [
  {
    path: "/test",
    name: "test",
    meta: { title: "选项1" },
    component: () =>
      import(/* webpackChunkName: "test" */ "../views/test/test.vue")
  }
];
export default RouterConfig;
