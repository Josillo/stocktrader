// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";

import App from "./App";
import { routes } from "./routes";

import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  mode: "history",
  routes
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
