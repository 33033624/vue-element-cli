import Vue from "vue";
import App from "./App.vue";
import Storage from "vue-ls";
import "./config/element-ui.config";
Vue.config.productionTip = false;
var options = {
  namespace: "vuejs__", // key prefix
  name: "ls", // name variable Vue.[ls] or this.[$ls],
  storage: "local" // storage name session, local, memory
};

Vue.use(Storage, options);
new Vue({
  render: h => h(App)
}).$mount("#app");
