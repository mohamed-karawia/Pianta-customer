<template>
  <div class="home">
    <div class="container">
      <fruits-categories @changeType="changeType"/>
      <fruits-list :fruits="products" v-if="!loading"/>
      <Spinner v-if="loading"/>
      <Wallet />
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
  </div>
</template>

<script>
import FruitsCategories from "../components/FruitsCategories/FruitsCategories";
import Wallet from "../components/Wallet/Wallet";
import FruitsList from "../components/FruitsList/FruitsList";
import Spinner from "../components/Spinner/Spinner";

export default {
  data() {
    return {
      
    };
  },
  components: {
    fruitsCategories: FruitsCategories,
    Wallet,
    fruitsList: FruitsList,
    Spinner,
  },
  created() {
    this.$store.dispatch("getProducts", this.$route.query);
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
    pages() {
      return Math.ceil(this.$store.getters.total / 10);
    },
    loading(){
      return this.$store.getters.productsLoading;
    }
  },
  methods: {
    changePage(page) {
       this.$router.replace({path: '/', query: {
         ...this.$route.query,
         page: page
       }})
       this.$store.dispatch("getProducts", this.$route.query);
    },
    changeType(type){
      this.$router.replace({path: '/', query: {
        ...this.$route.query,
        type: type
      }})
      this.$store.dispatch("getProducts", this.$route.query);
    }
  },
};
</script>

<style lang="scss" scoped>
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

.pagination {
  display: flex;
  justify-content: center;
}
</style>
