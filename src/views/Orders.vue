<template>
  <div class="container">
    <orders-nav @changeType="changeType"></orders-nav>
    <Spinner v-if="loading" />
    <div class="data" v-else>
      <order-list
        v-for="(order, index) in orders"
        :key="index"
        :orders="order"
        @changeType="changeType"
      />
      <h2 v-if="orders.length == 0">No orders available...</h2>
    </div>
  </div>
</template>

<script>
import ordersNav from "../components/OrdersNav/OrdersNav.vue";
import Spinner from "../components/Spinner/Spinner.vue";
import orderList from "../components/OrdersList/OrdersList";

export default {
  components: {
    ordersNav,
    orderList,
    Spinner,
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

  h2{
    font-weight: 400;
    font-size: 2rem;
  }

  .data{
    width: 100%;
  }
}
</style>