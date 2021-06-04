<template>
  <div class="cart">
    <div class="cartList">
        <h1>Shopping Cart</h1>
        <Spinner v-if="cartLoading"/>
        <cart-list :fruits="cartList" v-else/>
        </div>
    <card-details />
  </div>
</template>

<script>
import CardDetails from "../components/CardDetails/CardDetails";
import CartList from "../components/CartList/CartList";
import Spinner from '../components/Spinner/Spinner'

export default {
  components: {
    CardDetails,
    CartList,
    Spinner
  },
  created() {
    this.$store.dispatch("getCart");
  },
  computed:{
      cartList(){
          return this.$store.getters.cartList
      },
      cartLoading(){
          return this.$store.getters.cartLoading
      }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  display: flex;

    @media only screen and (max-width: 500px){
      flex-direction: column;
  }
}

.cartList{
    width: 100%;
    padding: 0 3rem;

      @media only screen and (max-width: 500px){
      order: 2;
      padding: 0;
      margin-top: 1rem;
  }

    h1{
        font-weight: 600;
        margin-bottom: 1rem;
    }
}
</style>