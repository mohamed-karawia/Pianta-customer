<template>
  <div class="container">
    <order-list
      v-for="(order, index) in orders"
      :key="index"
      :orders="order"
      @changeType="changeType"
      :loading="loading"
    />
  </div>
</template>

<script>
import orderList from "../components/OrdersList/OrdersList";

export default {
  components: {
    orderList,
  },
  created() {
    this.$store.dispatch("getOrders", this.$route.query);
  },
  computed: {
    orders() {
      return this.$store.getters.orders;
    },
    loading() {
      return this.$store.getters.ordersLoading;
    },
  },
  methods: {
    changeType(type) {
      this.$router.replace({
        path: "/orders",
        query: {
          type: type,
        },
      });
      this.$store.dispatch("getOrders", this.$route.query);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
}
</style>