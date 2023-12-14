import Vue from "vue";
// using template
import initialize from "../plugins/component";
Vue.use(initialize);

// axios with axios retry
import axiosService from "axios";
import axiosRetry from "axios-retry";
const axios = axiosService.create();
axiosRetry(axios, {
  retries: Infinity,
  retryDelay: (retryCount) => {
    console.log(`retry attempt: ${retryCount}`);
    return 7000; // time interval between retries
  },
  retryCondition: (error) => {
    // if retry condition is not specified, by default idempotent requests are retried
    return error;
  },
});
Vue.prototype.$axios = axios;

// vue cookie
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

// vue session
import VueSession from "vue-session";
Vue.use(VueSession);

// import jQuery & boostrab 4
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "popper.js";
import "@/assets/sass/app.scss";

// vue-moment
import moment from "vue-moment";
Vue.use(moment);

// font awesome
import "vue-awesome/icons/flag";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
Vue.component("v-icon", Icon);

// import vue notyjs
import VueNoty from "vuejs-noty";
Vue.use(VueNoty);
Vue.use(VueNoty, {
  progressBar: true,
  layout: "topRight",
  theme: "metroui",
  timeout: 4000,
});

// floating tooltips
import { Dropdown } from "floating-vue";
import "floating-vue/dist/style.css";
Vue.component("VDropdown", Dropdown);

// import vue progress bar
import VueProgressBar from "vue-progressbar";
const options = {
  color: "#6EC164",
  failedColor: "#e3342f",
  thickness: "3px",
  transition: {
    speed: "0.9s",
    opacity: "0.9s",
    termination: 1000,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};
Vue.use(VueProgressBar, options);
