<script>

import HomePage from "../src/components/GuestComponents/HomePage.vue";
import AppHeader from "./components/_partials/AppHeader.vue";

export default {
  data() {
    return {
      title: "Deliveboo",
    };
  },
  components: {
    AppHeader
  },
};
</script>

<template>
  <AppHeader />
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
