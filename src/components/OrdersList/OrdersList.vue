<template>
  <div class="ordersList">
    <ul>
      <li v-for="order in orders.products" :key="order._id">
        <Order :order="order" />
      </li>
    </ul>
    <h2>Total price: {{ orders.totalPrice }} L.E</h2>
    <h2>Status: {{ orders.status }}</h2>
  </div>
</template>

<script>
import Order from "../Order/Order";


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
      align-items: stretch;

      @media only screen and (max-width: 661px){
        grid-template-columns: repeat(1, 1fr);
      }
  }
}
</style>