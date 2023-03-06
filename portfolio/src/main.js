import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store";
import Router from "./router/index";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { auth } from "./Firebase/firebase";

loadFonts();
let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    createApp(App).use(vuetify).use(Router).use(store).mount("#app");
  }
});
