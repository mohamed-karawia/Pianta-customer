<template>
  <div class="cart">
    <div class="cartList">
      <h1>Shopping Cart</h1>
      <Spinner v-if="cartLoading" />
      <cart-list :fruits="cartList" v-else />
    </div>
    <card-details :cartList="cartList" :total="cartTotal" />
    <Backdrop v-if="backdrop" @hideBackdrop="hideBackdrop">
      <div class="Alert">
        <svg class="Alert__svg msg" v-if="backdropMessage">
          <use xlink:href="../assets/alert.svg#icon-check-circle-o"></use>
        </svg>
        <svg class="Alert__svg error" v-if="backdropError">
          <use xlink:href="../assets/alert.svg#icon-error_outline"></use>
        </svg>
        {{ backdropMessage ? backdropMessage : backdropError }}
      </div>
    </Backdrop>
  </div>
</template>

<script>
import CardDetails from "../components/CardDetails/CardDetails";
import CartList from "../components/CartList/CartList";
import Spinner from "../components/Spinner/Spinner";
import Backdrop from "../components/Backdrop/Backdrop.vue";


export default {
  components: {
    CardDetails,
    CartList,
    Spinner,
    Backdrop,
  },
  data() {
    return {

    };
  },
  created() {
    window.scroll(0, 0);
    this.$store.dispatch("getCart");
  },
  computed: {
    cartList() {
      return this.$store.getters.cartList;
    },
    cartLoading() {
      return this.$store.getters.cartLoading;
    },
    cartTotal() {
      return this.$store.getters.finalPrice;
    },
    backdrop() {
      return this.$store.getters.backdrop;
    },
    backdropMessage() {
      return this.$store.getters.backdropMessage;
    },
    backdropError() {
      return this.$store.getters.backdropError;
    },
  },
  methods: {
    hideBackdrop() {
      this.$store.commit("hideBackdrop");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/global.scss";

.cart {
  display: flex;
  align-items: flex-start;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
}

.cartList {
  width: 100%;
  padding: 0 3rem;

  @media only screen and (max-width: 500px) {
    order: 2;
    padding: 0;
    margin-top: 1rem;
  }

  h1 {
    font-weight: 600;
    margin-bottom: 1rem;
  }
}

.Alert {
  @include Alert;

  &__svg {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    animation: alert 1s infinite;
  }

  .msg {
    fill: rgb(69, 247, 69);
  }

  .error {
    fill: red;
  }
}
</style>