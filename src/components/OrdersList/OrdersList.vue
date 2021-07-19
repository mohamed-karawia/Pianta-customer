<template>
  <div class="ordersList">
    <ul v-if="!loading">
      <li v-for="order in orders.products" :key="order._id">
        <Order :order="order" />
      </li>
    </ul>
    <Spinner v-else />
    <h2>Total price: {{ orders.totalPrice }}</h2>
    <h2>Status: {{ orders.status }}</h2>
  </div>
</template>

<script>
import Order from "../Order/Order";
import Spinner from '../../components/Spinner/Spinner.vue'

export default {
  data() {
    return {};
  },
  props: {
    orders: Object,
    loading: Boolean
  },
  components: {
    Order,
    Spinner
  },
  methods: {
    changeType(type){
      this.$emit('changeType', type)
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../sass/global.scss';

.ordersList {
  width: 100%;
  padding: 2rem 0;
  border-bottom: 2px solid $primary-color;

  h2{
    color: black;
    font-size: 2.2rem;
    font-weight: 400;
    text-transform: capitalize;
  }

  ul {
      list-style: none;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, minmax(10rem, 30rem));
      grid-column-gap: 20px;

      @media only screen and (max-width: 661px){
        grid-template-columns: repeat(1, 1fr);
      }
  }
}
</style>