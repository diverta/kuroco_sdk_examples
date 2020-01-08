import Vue from "vue";
import App from "./App.vue";

import { useDevServer } from "kuroco";
useDevServer(true);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
