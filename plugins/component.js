import { Auth, Template } from "@/components/index";
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("v-auth", Auth);
    Vue.component("v-template", Template);
  }
};

export default GlobalComponents;
