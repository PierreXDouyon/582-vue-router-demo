import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";

// createApp(App).use(router).mount("#app");
const app = createApp(App).use(router);
app.mount("#app");
