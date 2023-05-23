<script>
import AppHeader from "./components/_partials/AppHeader.vue";
import AppFooter from "./components/_partials/AppFooter.vue";
import BraintreePymentForm from "./components/GuestComponents/BraintreePymentForm.vue";
export default {
  data() {
    return {
      title: "Deliveboo",
    };
  },
  components: {
    AppHeader,
    AppFooter,
    BraintreePymentForm,
  },
};
</script>

<template>
  <AppHeader />
  <BraintreePymentForm />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss" scoped></style>
