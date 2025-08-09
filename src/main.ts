import { createApp } from "vue";
import { createPinia } from "pinia";
import { createAppRouter } from "./router";
import App from "./App.vue";
import ElementPlus from 'element-plus';

import 'element-plus/dist/index.css';
import "./style.css";

const app = createApp(App);
const pinia = createPinia();
const router = createAppRouter();
app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
