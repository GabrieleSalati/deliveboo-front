<script>
import AppHeader from "./components/_partials/AppHeader.vue";
import AppFooter from "./components/_partials/AppFooter.vue";
import InfoPrivacy from "./components/ExtraComponents/InfoPrivacy.vue";
import CookiesVue from "./components/ExtraComponents/Cookies.vue";
export default {
  data() {
    return {
      title: "Deliveboo",
    };
  },
  components: {
    AppHeader,
    InfoPrivacy,
    AppFooter,
    CookiesVue,
  },
};
</script>

<template>
  <!-- <AppHeader />
  <router-view></router-view>
  <AppFooter /> -->
  <!-- <InfoPrivacy /> -->
  <CookiesVue />
</template>

<style lang="scss" scoped></style>
