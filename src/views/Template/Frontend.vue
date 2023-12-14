<template>
  <div>
    <vue-progress-bar></vue-progress-bar>
    <transition name="fade" mode="out-in">
      <!-- your content here -->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "FrontendComponent",
  data() {
    return {};
  },
  mounted() {
    this.$Progress.finish();
  },
  created() {
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        this.$Progress.parseMeta(meta);
      }
      this.$Progress.start();
      next();
    });
    this.$router.afterEach(() => {
      this.$Progress.finish();
    });
  },
  methods: {},
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
