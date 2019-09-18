import Vue from "vue";
import App from "./App.vue";
import "./config/element-ui.config";
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
