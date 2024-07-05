import { createApp } from "vue";
import App from "./App.vue";
import "./styles/main.scss";

// Import BootstrapVueNext
import { createBootstrap } from "bootstrap-vue-next";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

// Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Import Pinia Store
import { createPinia } from "pinia";

library.add(fas);

const app = createApp(App);
const pinia = createPinia();
app.use(createBootstrap());
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(pinia);
app.mount("#app");
