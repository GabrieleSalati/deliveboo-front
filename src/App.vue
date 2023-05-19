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
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss" scoped></style>
