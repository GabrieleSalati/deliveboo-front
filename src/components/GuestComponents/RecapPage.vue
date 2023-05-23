<script>
import Cart from "../GuestComponents/Cart.vue"

export default {
    data() {
        return {
            title: "Ordina e paga!"
        }
    },

    components: {
        Cart,
    },
};
</script>

<template>
    <h1>{{ title }}</h1>
    <Cart />
</template>

<style lang="scss" scoped></style>