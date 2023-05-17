<script>
import AppHeader from "../_partials/AppHeader.vue";
import AppFooter from "../_partials/AppFooter.vue";
import AppMain from "./AppMain.vue";

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
  <!-- <AppHeader /> -->
  <AppMain />
  <AppFooter />
</template>

<style lang="scss" scoped></style>
