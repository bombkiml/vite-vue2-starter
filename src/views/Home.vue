<template>
  <div class="home col-md-10 col-12 content-box mx-auto">
    <nav class="h4">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Hello VueJS + Vite" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  props: {
    test: String,
  },
  components: {
    HelloWorld,
  },
  data() {
    return {
      id: 0,
    };
  },
  mounted() {
    // Basic alert
    this.$noty.show("Hello world!");
    // Success notification
    this.$noty.success("Your profile has been saved!");
    // Error message
    this.$noty.error("Oops, something went wrong!");
    // Warning
    this.$noty.warning("Please review your information.");
    // Basic alert
    this.$noty.info("New version of the app is available!");

    //this.api();
    //this.$noty("Hello user!");
    /* new this.$noty({
      text: "Some notification text",
    }).show(); */
  },
  methods: {
    api() {
      /* $axios.get("/vipclass/spclty").then((e) => {
        console.log(e);
      }); */

      $axios.get("/android/force/99.242").then((e) => {
        console.log(e);
      });

      /* $axios.get("/twozefive/api/v1/department")
      .then(e => {
        console.log(e);
      }) */
    },
  },
};
</script>

<style lang="scss">
.home {
  margin-top: 10%;
}
</style>
