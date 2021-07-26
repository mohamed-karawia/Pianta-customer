<template>
  <div class="home">
    <div class="container">
      <fruits-categories @changeType="changeType" />
      <fruits-list :fruits="products" v-if="!loading && products.length > 0" />
      <h2 v-if="!loading && products.length == 0">No Products Available</h2>
      <Spinner v-if="loading" />
      <Wallet :totalCart="totalCart" :price="totalPrice" />
    </div>
    <div class="pagination" v-if="pages > 1">
      <paginate
        :page-count="pages"
        :page-range="3"
        :margin-pages="2"
        :click-handler="changePage"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'container-class'"
        :page-class="'page-class'"
        :page-link-class="'page-link-class'"
        :active-class="'active-class'"
      >
      </paginate>
    </div>
    <Backdrop v-if="backdrop" @hideBackdrop="hideBackdrop">
      <div class="Alert">
        <svg class="Alert__svg msg" v-if="backdropMessage">
          <use xlink:href="../assets/alert.svg#icon-check-circle-o"></use>
        </svg>
        <svg class="Alert__svg error" v-if="backdropError">
          <use xlink:href="../assets/alert.svg#icon-error_outline"></use>
        </svg>
        {{ backdropMessage? backdropMessage : backdropError }}
      </div>
    </Backdrop>
  </div>
</template>

<script>
import FruitsCategories from "../components/FruitsCategories/FruitsCategories";
import Wallet from "../components/Wallet/Wallet";
import FruitsList from "../components/FruitsList/FruitsList";
import Spinner from "../components/Spinner/Spinner";
import Backdrop from "../components/Backdrop/Backdrop";

export default {
  data() {
    return {};
  },
  components: {
    fruitsCategories: FruitsCategories,
    Wallet,
    fruitsList: FruitsList,
    Spinner,
    Backdrop,
  },
  created() {
    this.$store.dispatch("getProducts", this.$route.query);
    this.$store.dispatch("getCart");
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
    pages() {
      return Math.ceil(this.$store.getters.total / 10);
    },
    loading() {
      return this.$store.getters.productsLoading;
    },
    totalCart() {
      return Number(this.$store.getters.cartList.length);
    },
    totalPrice() {
      return Number(this.$store.getters.finalPrice);
    },
    backdrop() {
      return this.$store.getters.backdrop;
    },
    backdropMessage() {
      return this.$store.getters.backdropMessage;
    },
    backdropError(){
      return this.$store.getters.backdropError
    }
  },
  methods: {
    changePage(page) {
      this.$router.replace({
        path: "/",
        query: {
          ...this.$route.query,
          page: page,
        },
      });
      this.$store.dispatch("getProducts", this.$route.query);
    },
    changeType(type) {
      window.scroll(0, 0);
      this.$router.replace({
        path: "/",
        query: {
          ...this.$route.query,
          type: type,
        },
      });
      this.$store.dispatch("getProducts", this.$route.query);
    },
    hideBackdrop() {
      this.$store.commit("hideBackdrop");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/global.scss";

.home {
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
}
.container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media only screen and (max-width: 766px) {
    flex-direction: column;
  }
}

h2 {
  font-weight: 400;
  font-size: 3rem;
}

.pagination {
  display: flex;
  justify-content: center;
}

.Alert {
  @include Alert;

  &__svg{
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    animation: alert 1s infinite;
  }

  .msg{
    fill: rgb(69, 247, 69);
  }

  .error{
    fill: red;
  }
}
</style>
