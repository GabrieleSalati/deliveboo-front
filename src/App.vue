<script>
import AppHeader from "./components/_partials/AppHeader.vue";
import AppFooter from "./components/_partials/AppFooter.vue";

export default {
  data() {
    return {
      title: "Deliveboo",
    };
  },
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <div class="app d-flex flex-column">
    <AppHeader />
    <router-view></router-view>
    <div class="mt-auto">
      <AppFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
}
</style>
