<script>
import AppHeader from "./components/partials/AppHeader.vue";
import AppFooter from "./components/partials/AppFooter.vue";

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
  <AppFooter />
</template>

<style lang="scss" scoped></style>
