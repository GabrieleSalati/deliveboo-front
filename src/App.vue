<script>
import axios from "axios";
import RestaurantIndex from "./components/GuestComponents/RestaurantIndex.vue";
import AppHeader from "./components/_partials/AppHeader.vue";
import AppFooter from "./components/_partials/AppFooter.vue";
import AppMain from "./components/GuestComponents/AppMain.vue";
import DishForm from "./components/UserComponents/FormComponents/DishForm.vue";
import UserForm from "./components/UserComponents/FormComponents/UserForm.vue";
import LoginForm from "./components/UserComponents/FormComponents/LoginForm.vue";

export default {
  data() {
    return {
      title: "Deliveboo",
      restaurants: [],
    };
  },
  components: {
    AppHeader,
    AppFooter,
    AppMain,
    RestaurantIndex,
    DishForm,
    UserForm,
    LoginForm,
  },

  methods: {
    fetchRestaurants() {
      axios.get("http://127.0.0.1:8000/api/restaurants").then((response) => {
        this.restaurants = response.data;
      });
    },
  },

  created() {
    this.fetchRestaurants();
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <!-- <div class="container">
    <RestaurantIndex :restaurants="restaurants" />
  </div> -->
  <AppFooter />
  <!-- <LoginForm />
  <hr />
  <UserForm />
  <hr /> -->
  <!-- <DishForm /> -->
</template>

<style lang="scss" scoped></style>
