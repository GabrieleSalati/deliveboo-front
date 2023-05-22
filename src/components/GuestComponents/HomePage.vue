<script>
import AppMain from "./AppMain.vue";
import Carousel from "./Carousel.vue";

export default {
  data() {
    return {
      title: "Deliveboo",
    };
  },
  components: {
    AppMain,
    Carousel,
  },
};
</script>

<template>
  <AppMain />
  <Carousel />
</template>

<style lang="scss" scoped></style>
