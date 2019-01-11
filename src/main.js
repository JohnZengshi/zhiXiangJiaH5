import Vue from "vue";
import App from "./App";
import "amfe-flexible";
const app = new Vue ({
    el: "#app",
    render: h => h(App),
});

Vue.use({
    app
})