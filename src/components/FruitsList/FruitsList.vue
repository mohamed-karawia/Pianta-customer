<template>
  <div class="container">
      <single-fruit v-for="fruit in fruits" :key="fruit._id" :fruit="fruit" />
      <Spinner v-if="loading"/>
  </div>
</template>

<script>
/*import banana from "../../assets/bananaimg.jpg";
import apple from "../../assets/appleimg.jpeg";
import orange from "../../assets/orangeimg.jpg";*/

import SingleFruit from "../SingleFruit/SingleFruit";
import Spinner from "../Spinner/Spinner";

export default {
  props: {
    fruits: Array,
  },
  components: {
    singleFruit: SingleFruit,
    Spinner,
  },
  computed: {
    loading() {
      return this.$store.getters.productsLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  //border: 1px solid black;
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  min-width: 20rem;

  @media only screen and (max-width: 766px) {
    order: 3;
    min-width: 100%;
    justify-content: flex-start;
    flex-wrap: nowrap;
    //justify-content: space-around;
    //flex-wrap: nowrap;
  }

  @media only screen and (max-width: 500px) {
    order: 3;
    min-width: 100%;
    //flex-wrap: nowrap;
  }
}
</style>