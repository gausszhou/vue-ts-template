import { createApp } from "vue";
import { createPinia } from "pinia";
import { createAppRouter } from "./router";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
const router = createAppRouter();
app.use(pinia);
app.use(router);
app.mount("#app");
