<script>
import axios from "axios";
import UserForm from "./components/UserComponents/FormComponents/UserForm.vue";
import LoginForm from "./components/UserComponents/FormComponents/LoginForm.vue";
import DishForm from "./components/UserComponents/FormComponents/DishForm.vue";

export default {
  data() {
    return {
      restaurants: [],
    };
  },

  components: {
    UserForm,
    LoginForm,
    DishForm,
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
  <div class="container">
    <UserForm />
    <LoginForm />
    <DishForm />
  </div>
</template>

<style lang="scss" scoped></style>
