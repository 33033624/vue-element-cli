import Vue from "vue";
import App from "./App.vue";
import Storage from "vue-ls";
import router from "./router";

import "./config/element-ui.config";
Vue.config.productionTip = false;
var options = {
  namespace: "vuejs__", // key prefix
  name: "ls", // name variable Vue.[ls] or this.[$ls],
  storage: "local" // storage name session, local, memory
};

Vue.use(Storage, options);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
