import { createApp } from "vue";
import App from "./App.vue";
import { toolTipPlugin } from "./toolTipPlugin";

import "./assets/main.css";

createApp(App).use(toolTipPlugin).mount("#app");
