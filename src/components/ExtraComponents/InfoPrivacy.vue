<script>
import AppHeader from "../_partials/AppHeader.vue";
import AppFooter from "../_partials/AppFooter.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template><AppHeader />, <AppFooter />,</template>

<style lang="scss" scoped></style>
