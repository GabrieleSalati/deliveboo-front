<script>
import localStorageMixin from "../../localStorageMixin.js";
export default {
  mixins: [localStorageMixin],
  data() {
    return {
      title: "Cart",
      id: null,
      key: "chiave",
    };
  },
  components: {},
  computed: {
    fetchid2() {
      return (this.id = this.getFromLocalStorage("chiave2"));
    },
  },
  methods: {
    fetchid() {
      this.id = this.getFromLocalStorage("chiave2");
    },
    syncAfterRemove(key) {
      this.removeFromLocalStorage(key);
      // this.fetchid();
    },
  },
  created() {
    // this.fetchid();
  },
};
</script>
<template>
  <div>
    <h1>carrello</h1>
    <h2 v-for="id in fetchid2">{{ id }}</h2>

    <button class="btn btn-danger" @click="this.syncAfterRemove(this.key)">
      Remove
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
