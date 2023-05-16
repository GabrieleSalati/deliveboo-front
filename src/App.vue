<script>
import AppHeader from "./components/partials/AppHeader.vue";
import AppFooter from "./components/partials/AppFooter.vue";
import AppMain from "./components/GuestComponents/AppMain.vue";

export default {
  data() {
    return {
      title: "Deliveboo",
    };
  },

  components: {
    AppHeader,
    AppFooter,
    AppMain,
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss" scoped></style>
